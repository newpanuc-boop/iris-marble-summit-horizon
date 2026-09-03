import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSql } from "@/lib/db";
import { addDays, coversDate, nightsBetween, todayVN } from "./format";
import type {
  Booking,
  BookingSource,
  BookingStatus,
  CalendarRow,
  DashboardData,
  ReportsData,
  Room,
  RoomStatus,
  RoomType,
} from "./types";

type RoomTypeRow = {
  id: number;
  code: string;
  name: string;
  description: string;
  capacity: number;
  price_per_night: string | number;
  image: string;
  amenities: string;
};

type RoomRow = {
  id: number;
  number: string;
  floor: number;
  status: string;
  notes: string;
  type_id: number;
  type_code: string;
  type_name: string;
  type_description: string;
  type_capacity: number;
  type_price: string | number;
  type_image: string;
  type_amenities: string;
};

type BookingRow = {
  id: number;
  code: string;
  guest_name: string;
  guest_phone: string;
  guest_count: number;
  room_id: number;
  room_number: string;
  room_type_name: string;
  check_in: string;
  check_out: string;
  status: string;
  total_amount: string | number;
  paid: boolean;
  source: string;
  notes: string;
  created_at: string;
};

const dateStr = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

function money(v: string | number): number {
  return typeof v === "number" ? v : Number(v);
}

function mapType(row: RoomTypeRow): RoomType {
  return {
    id: row.id,
    code: row.code,
    name: row.name,
    description: row.description,
    capacity: row.capacity,
    pricePerNight: money(row.price_per_night),
    image: row.image,
    amenities: row.amenities.split(",").map((s) => s.trim()).filter(Boolean),
  };
}

function mapRoom(row: RoomRow): Room {
  return {
    id: row.id,
    number: row.number,
    floor: row.floor,
    status: row.status as RoomStatus,
    notes: row.notes,
    type: {
      id: row.type_id,
      code: row.type_code,
      name: row.type_name,
      description: row.type_description,
      capacity: row.type_capacity,
      pricePerNight: money(row.type_price),
      image: row.type_image,
      amenities: row.type_amenities.split(",").map((s) => s.trim()).filter(Boolean),
    },
  };
}

function mapBooking(row: BookingRow): Booking {
  const checkIn = String(row.check_in).slice(0, 10);
  const checkOut = String(row.check_out).slice(0, 10);
  return {
    id: row.id,
    code: row.code,
    guestName: row.guest_name,
    guestPhone: row.guest_phone,
    guestCount: row.guest_count,
    roomId: row.room_id,
    roomNumber: row.room_number,
    roomTypeName: row.room_type_name,
    checkIn,
    checkOut,
    nights: nightsBetween(checkIn, checkOut),
    status: row.status as BookingStatus,
    totalAmount: money(row.total_amount),
    paid: Boolean(row.paid),
    source: row.source as BookingSource,
    notes: row.notes,
    createdAt: String(row.created_at),
  };
}

const ROOM_SQL = `select
  r.id, r.number, r.floor, r.status, r.notes,
  t.id as type_id, t.code as type_code, t.name as type_name,
  t.description as type_description, t.capacity as type_capacity,
  t.price_per_night as type_price, t.image as type_image,
  t.amenities as type_amenities
from rooms r
join room_types t on t.id = r.type_id`;

const BOOKING_SQL = `select
  b.id, b.code, b.guest_name, b.guest_phone, b.guest_count,
  b.room_id, r.number as room_number, t.name as room_type_name,
  b.check_in::text as check_in, b.check_out::text as check_out,
  b.status, b.total_amount, b.paid, b.source, b.notes,
  b.created_at::text as created_at
from bookings b
join rooms r on r.id = b.room_id
join room_types t on t.id = r.type_id`;

async function fetchRooms(): Promise<Room[]> {
  const sql = await getSql();
  const rows = await sql.query<RoomRow>(`${ROOM_SQL} order by r.floor, r.number`);
  return rows.map(mapRoom);
}

async function fetchBookings(): Promise<Booking[]> {
  const sql = await getSql();
  const rows = await sql.query<BookingRow>(`${BOOKING_SQL} order by b.check_in desc, b.id desc`);
  return rows.map(mapBooking);
}

async function fetchBookingByCode(code: string): Promise<Booking | null> {
  const sql = await getSql();
  const rows = await sql.query<BookingRow>(`${BOOKING_SQL} where b.code = $1`, [
    code.toUpperCase().trim(),
  ]);
  return rows[0] ? mapBooking(rows[0]) : null;
}

function isBlocking(status: BookingStatus): boolean {
  return status === "confirmed" || status === "checked_in";
}

async function roomBlocked(
  roomId: number,
  checkIn: string,
  checkOut: string,
  exceptId?: number,
): Promise<boolean> {
  const sql = await getSql();
  const rows = await sql.query<{ id: number }>(
    `select id from bookings
     where room_id = $1
       and status in ('confirmed', 'checked_in')
       and check_in < $3
       and check_out > $2
       and ($4::int is null or id <> $4)
     limit 1`,
    [roomId, checkIn, checkOut, exceptId ?? null],
  );
  return rows.length > 0;
}

function makeCode(): string {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `AV-${n}`;
}

export const listRoomTypes = createServerFn({ method: "GET" }).handler(async () => {
  const sql = await getSql();
  const rows = await sql.query<RoomTypeRow>(
    `select id, code, name, description, capacity, price_per_night, image, amenities
     from room_types order by price_per_night`,
  );
  return rows.map(mapType);
});

export const listRooms = createServerFn({ method: "GET" }).handler(async () => {
  return fetchRooms();
});

export const listBookings = createServerFn({ method: "GET" }).handler(async () => {
  return fetchBookings();
});

export const getDashboard = createServerFn({ method: "GET" }).handler(
  async (): Promise<DashboardData> => {
    const today = todayVN();
    const [rooms, bookings] = await Promise.all([fetchRooms(), fetchBookings()]);
    const active = bookings.filter((b) => isBlocking(b.status));
    const covering = active.filter((b) => coversDate(b.checkIn, b.checkOut, today));
    const month = today.slice(0, 7);
    const monthBookings = bookings.filter(
      (b) => b.status !== "cancelled" && b.checkIn.slice(0, 7) === month,
    );
    const arrivals = bookings
      .filter((b) => b.checkIn === today && b.status !== "cancelled")
      .sort((a, b) => a.roomNumber.localeCompare(b.roomNumber));
    const departures = bookings
      .filter((b) => b.checkOut === today && (b.status === "checked_in" || b.status === "checked_out"))
      .sort((a, b) => a.roomNumber.localeCompare(b.roomNumber));
    const sellable = rooms.filter((r) => r.status !== "maintenance").length;
    const occupiedTonight = covering.length;
    return {
      today,
      occupancy: sellable === 0 ? 0 : Math.round((occupiedTonight / sellable) * 100),
      available: rooms.filter((r) => r.status === "available").length,
      occupied: rooms.filter((r) => r.status === "occupied").length,
      cleaning: rooms.filter((r) => r.status === "cleaning").length,
      maintenance: rooms.filter((r) => r.status === "maintenance").length,
      totalRooms: rooms.length,
      arrivals,
      departures,
      inHouse: bookings.filter((b) => b.status === "checked_in"),
      monthRevenue: monthBookings.reduce((s, b) => s + b.totalAmount, 0),
      todayRevenue: covering.reduce((s, b) => {
        const nightly = b.nights > 0 ? b.totalAmount / b.nights : 0;
        return s + nightly;
      }, 0),
      recent: bookings.slice(0, 8),
    };
  },
);

export const getAvailability = createServerFn({ method: "GET" })
  .validator(
    z.object({
      checkIn: dateStr,
      checkOut: dateStr,
      guests: z.number().int().min(1).max(8).optional(),
    }),
  )
  .handler(async ({ data }) => {
    if (nightsBetween(data.checkIn, data.checkOut) < 1) {
      throw new Error("Ngày trả phòng phải sau ngày nhận phòng.");
    }
    const [rooms, bookings] = await Promise.all([fetchRooms(), fetchBookings()]);
    const blocked = new Set(
      bookings
        .filter(
          (b) =>
            isBlocking(b.status) &&
            b.checkIn < data.checkOut &&
            data.checkIn < b.checkOut,
        )
        .map((b) => b.roomId),
    );
    return rooms.filter((room) => {
      if (room.status === "maintenance") return false;
      if (blocked.has(room.id)) return false;
      if (data.guests && room.type.capacity < data.guests) return false;
      return true;
    });
  });

export const lookupBooking = createServerFn({ method: "GET" })
  .validator(z.object({ code: z.string().min(4).max(16) }))
  .handler(async ({ data }) => {
    return fetchBookingByCode(data.code);
  });

export const createBooking = createServerFn({ method: "POST" })
  .validator(
    z.object({
      guestName: z.string().trim().min(2).max(80),
      guestPhone: z.string().trim().min(8).max(24),
      guestCount: z.number().int().min(1).max(8),
      roomId: z.number().int(),
      checkIn: dateStr,
      checkOut: dateStr,
      source: z.enum(["walk_in", "online"]),
      notes: z.string().max(240).optional().default(""),
      paid: z.boolean().optional().default(false),
    }),
  )
  .handler(async ({ data }) => {
    const nights = nightsBetween(data.checkIn, data.checkOut);
    if (nights < 1) throw new Error("Cần ở ít nhất một đêm.");
    const today = todayVN();
    if (data.checkIn < today) throw new Error("Không đặt phòng cho ngày đã qua.");

    const sql = await getSql();
    const roomRows = await sql.query<RoomRow>(`${ROOM_SQL} where r.id = $1`, [data.roomId]);
    const room = roomRows[0] ? mapRoom(roomRows[0]) : null;
    if (!room) throw new Error("Không tìm thấy phòng.");
    if (room.status === "maintenance") throw new Error("Phòng đang bảo trì.");
    if (data.guestCount > room.type.capacity) {
      throw new Error(`Phòng ${room.number} tối đa ${room.type.capacity} khách.`);
    }
    if (await roomBlocked(room.id, data.checkIn, data.checkOut)) {
      throw new Error("Phòng đã được đặt trong khoảng ngày này.");
    }

    const total = nights * room.type.pricePerNight;
    let code = makeCode();
    for (let i = 0; i < 8; i += 1) {
      const exists = await sql.query<{ id: number }>(`select id from bookings where code = $1`, [
        code,
      ]);
      if (exists.length === 0) break;
      code = makeCode();
    }

    const inserted = await sql.query<BookingRow>(
      `insert into bookings
        (code, guest_name, guest_phone, guest_count, room_id, check_in, check_out,
         status, total_amount, paid, source, notes)
       values ($1,$2,$3,$4,$5,$6,$7,'confirmed',$8,$9,$10,$11)
       returning id`,
      [
        code,
        data.guestName,
        data.guestPhone,
        data.guestCount,
        room.id,
        data.checkIn,
        data.checkOut,
        total,
        data.paid,
        data.source,
        data.notes ?? "",
      ],
    );
    const full = await sql.query<BookingRow>(`${BOOKING_SQL} where b.id = $1`, [inserted[0].id]);
    return mapBooking(full[0]);
  });

export const updateBookingStatus = createServerFn({ method: "POST" })
  .validator(
    z.object({
      id: z.number().int(),
      action: z.enum(["check_in", "check_out", "cancel", "mark_paid"]),
    }),
  )
  .handler(async ({ data }) => {
    const sql = await getSql();
    const rows = await sql.query<BookingRow>(`${BOOKING_SQL} where b.id = $1`, [data.id]);
    if (!rows[0]) throw new Error("Không tìm thấy đơn đặt.");
    const booking = mapBooking(rows[0]);
    const today = todayVN();

    if (data.action === "mark_paid") {
      await sql.query(`update bookings set paid = true where id = $1`, [booking.id]);
    } else if (data.action === "cancel") {
      if (booking.status === "checked_in") {
        throw new Error("Không hủy đơn đang nhận phòng — hãy trả phòng trước.");
      }
      if (booking.status === "checked_out") {
        throw new Error("Đơn đã trả phòng, không hủy được.");
      }
      await sql.query(`update bookings set status = 'cancelled' where id = $1`, [booking.id]);
    } else if (data.action === "check_in") {
      if (booking.status !== "confirmed") throw new Error("Chỉ nhận phòng với đơn đã xác nhận.");
      if (today < booking.checkIn) throw new Error("Chưa đến ngày nhận phòng.");
      if (today >= booking.checkOut) throw new Error("Đã quá ngày trả phòng.");
      const roomRows = await sql.query<RoomRow>(`${ROOM_SQL} where r.id = $1`, [booking.roomId]);
      const room = mapRoom(roomRows[0]);
      if (room.status === "maintenance") throw new Error("Phòng đang bảo trì.");
      await sql.query(`update bookings set status = 'checked_in', paid = true where id = $1`, [
        booking.id,
      ]);
      await sql.query(`update rooms set status = 'occupied' where id = $1`, [booking.roomId]);
    } else if (data.action === "check_out") {
      if (booking.status !== "checked_in") throw new Error("Chỉ trả phòng với đơn đang ở.");
      await sql.query(`update bookings set status = 'checked_out' where id = $1`, [booking.id]);
      await sql.query(
        `update rooms set status = 'cleaning', notes = 'Trả phòng — chờ buồng phòng' where id = $1`,
        [booking.roomId],
      );
    }

    const next = await sql.query<BookingRow>(`${BOOKING_SQL} where b.id = $1`, [booking.id]);
    return mapBooking(next[0]);
  });

export const updateRoomStatus = createServerFn({ method: "POST" })
  .validator(
    z.object({
      id: z.number().int(),
      status: z.enum(["available", "occupied", "cleaning", "maintenance"]),
      notes: z.string().max(200).optional(),
    }),
  )
  .handler(async ({ data }) => {
    const sql = await getSql();
    await sql.query(`update rooms set status = $2, notes = coalesce($3, notes) where id = $1`, [
      data.id,
      data.status,
      data.notes ?? null,
    ]);
    const rows = await sql.query<RoomRow>(`${ROOM_SQL} where r.id = $1`, [data.id]);
    if (!rows[0]) throw new Error("Không tìm thấy phòng.");
    return mapRoom(rows[0]);
  });

export const createRoom = createServerFn({ method: "POST" })
  .validator(
    z.object({
      number: z.string().trim().min(1).max(8),
      floor: z.number().int().min(1).max(12),
      typeId: z.number().int(),
    }),
  )
  .handler(async ({ data }) => {
    const sql = await getSql();
    const clash = await sql.query<{ id: number }>(`select id from rooms where number = $1`, [
      data.number,
    ]);
    if (clash.length) throw new Error(`Số phòng ${data.number} đã tồn tại.`);
    const inserted = await sql.query<{ id: number }>(
      `insert into rooms (number, floor, type_id, status) values ($1,$2,$3,'available') returning id`,
      [data.number, data.floor, data.typeId],
    );
    const rows = await sql.query<RoomRow>(`${ROOM_SQL} where r.id = $1`, [inserted[0].id]);
    return mapRoom(rows[0]);
  });

export const getCalendar = createServerFn({ method: "GET" })
  .validator(
    z.object({
      start: dateStr.optional(),
    }),
  )
  .handler(async ({ data }): Promise<{ start: string; days: string[]; rows: CalendarRow[] }> => {
    const start = data.start ?? todayVN();
    const days = Array.from({ length: 14 }, (_, i) => addDays(start, i));
    const [rooms, bookings] = await Promise.all([fetchRooms(), fetchBookings()]);
    const blocking = bookings.filter((b) => isBlocking(b.status));
    const rows: CalendarRow[] = rooms.map((room) => {
      const cells = days.map((date) => {
        const hit = blocking.find(
          (b) => b.roomId === room.id && coversDate(b.checkIn, b.checkOut, date),
        );
        if (!hit) return { date, booking: null };
        const isStart = hit.checkIn === date || date === start;
        let span = 0;
        if (isStart) {
          for (const d of days) {
            if (d < hit.checkIn) continue;
            if (d >= hit.checkOut) break;
            if (d < start) continue;
            span += 1;
          }
        }
        return {
          date,
          booking: {
            id: hit.id,
            code: hit.code,
            guestName: hit.guestName,
            status: hit.status,
            isStart,
            span,
          },
        };
      });
      return { room, cells };
    });
    return { start, days, rows };
  });

export const getReports = createServerFn({ method: "GET" }).handler(
  async (): Promise<ReportsData> => {
    const today = todayVN();
    const start = addDays(today, -13);
    const [rooms, bookings] = await Promise.all([fetchRooms(), fetchBookings()]);
    const sellable = rooms.filter((r) => r.status !== "maintenance").length || rooms.length;
    const days = Array.from({ length: 14 }, (_, i) => {
      const date = addDays(start, i);
      const occupied = bookings.filter(
        (b) => isBlocking(b.status) && coversDate(b.checkIn, b.checkOut, date),
      ).length;
      return {
        date,
        occupied,
        blocked: occupied,
        total: sellable,
        rate: sellable === 0 ? 0 : Math.round((occupied / sellable) * 100),
      };
    });
    const month = today.slice(0, 7);
    const monthBookings = bookings.filter(
      (b) => b.status !== "cancelled" && b.checkIn.slice(0, 7) === month,
    );
    const byTypeMap = new Map<string, { nights: number; revenue: number }>();
    for (const b of monthBookings) {
      const cur = byTypeMap.get(b.roomTypeName) ?? { nights: 0, revenue: 0 };
      cur.nights += b.nights;
      cur.revenue += b.totalAmount;
      byTypeMap.set(b.roomTypeName, cur);
    }
    const allNonCancel = bookings.filter((b) => b.status !== "cancelled");
    const avgStay =
      allNonCancel.length === 0
        ? 0
        : allNonCancel.reduce((s, b) => s + b.nights, 0) / allNonCancel.length;
    const cancelRate =
      bookings.length === 0
        ? 0
        : Math.round(
            (bookings.filter((b) => b.status === "cancelled").length / bookings.length) * 100,
          );
    return {
      today,
      days,
      byType: [...byTypeMap.entries()].map(([typeName, v]) => ({ typeName, ...v })),
      monthRevenue: monthBookings.reduce((s, b) => s + b.totalAmount, 0),
      monthNights: monthBookings.reduce((s, b) => s + b.nights, 0),
      avgStay: Math.round(avgStay * 10) / 10,
      cancelRate,
    };
  },
);
