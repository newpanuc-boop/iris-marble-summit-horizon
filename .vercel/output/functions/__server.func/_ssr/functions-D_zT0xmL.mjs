import { a as coversDate, f as todayVN, i as addDays, u as nightsBetween } from "./format-w534KtO6.mjs";
import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { a as object, i as number, n as boolean, o as string, t as _enum } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/functions-D_zT0xmL.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var _0002_hotel_default = "create table if not exists room_types (\n  id               serial primary key,\n  code             text not null unique,\n  name             text not null,\n  description      text not null,\n  capacity         int not null,\n  price_per_night  numeric(12, 0) not null,\n  image            text not null,\n  amenities        text not null\n);\n\ncreate table if not exists rooms (\n  id         serial primary key,\n  number     text not null unique,\n  floor      int not null,\n  type_id    int not null references room_types(id),\n  status     text not null default 'available',\n  notes      text not null default ''\n);\n\ncreate table if not exists bookings (\n  id            serial primary key,\n  code          text not null unique,\n  guest_name    text not null,\n  guest_phone   text not null,\n  guest_count   int not null,\n  room_id       int not null references rooms(id),\n  check_in      date not null,\n  check_out     date not null,\n  status        text not null default 'confirmed',\n  total_amount  numeric(12, 0) not null,\n  paid          boolean not null default false,\n  source        text not null default 'walk_in',\n  notes         text not null default '',\n  created_at    timestamptz not null default now()\n);\n\ncreate index if not exists bookings_room_dates_idx on bookings (room_id, check_in, check_out);\ncreate index if not exists bookings_status_idx on bookings (status);\ncreate index if not exists bookings_check_in_idx on bookings (check_in);\ncreate index if not exists rooms_floor_idx on rooms (floor);\n\ninsert into room_types (id, code, name, description, capacity, price_per_night, image, amenities)\nvalues\n  (1, 'standard', 'Phòng Tiêu chuẩn',\n   'Hai giường đơn, cửa sổ chớp thông thoáng, phù hợp khách công tác hoặc bạn đồng hành.',\n   2, 1290000, '/hotel/standard.jpg',\n   'Wifi, Điều hòa, Nước khoáng, Máy sấy'),\n  (2, 'deluxe', 'Phòng Deluxe',\n   'Giường đôi king, bàn viết, cửa sổ nhìn ra sân trong — ánh sáng chiều vàng.',\n   2, 1890000, '/hotel/deluxe.jpg',\n   'Wifi, Điều hòa, Mini bar, Bồn tắm đứng, Áo choàng'),\n  (3, 'family', 'Phòng Gia đình',\n   'Giường lớn kèm daybed, bàn tròn, cửa sổ ra cây xanh — đủ chỗ cho bốn người.',\n   4, 2490000, '/hotel/family.jpg',\n   'Wifi, Điều hòa, Mini bar, Nôi trẻ em theo yêu cầu'),\n  (4, 'suite', 'Suite Hướng vườn',\n   'Phòng rộng mở ra sân riêng, ghế mây, chậu đá — ở chậm vài ngày.',\n   3, 2890000, '/hotel/suite.jpg',\n   'Wifi, Điều hòa, Bồn tắm, Sân riêng, Trà chiều')\non conflict (id) do nothing;\n\ninsert into rooms (id, number, floor, type_id, status, notes) values\n  (1,  '101', 1, 1, 'occupied',    ''),\n  (2,  '102', 1, 1, 'cleaning',    'Trả phòng sáng nay'),\n  (3,  '103', 1, 1, 'available',   ''),\n  (4,  '104', 1, 2, 'occupied',    ''),\n  (5,  '105', 1, 2, 'available',   ''),\n  (6,  '106', 1, 2, 'available',   ''),\n  (7,  '201', 2, 1, 'available',   ''),\n  (8,  '202', 2, 1, 'available',   ''),\n  (9,  '203', 2, 2, 'available',   ''),\n  (10, '204', 2, 2, 'available',   ''),\n  (11, '205', 2, 3, 'available',   ''),\n  (12, '206', 2, 3, 'maintenance', 'Hỏng điều hòa — chờ kỹ thuật'),\n  (13, '301', 3, 2, 'available',   ''),\n  (14, '302', 3, 2, 'available',   ''),\n  (15, '303', 3, 4, 'occupied',    ''),\n  (16, '304', 3, 4, 'occupied',    ''),\n  (17, '401', 4, 4, 'available',   ''),\n  (18, '402', 4, 4, 'available',   '')\non conflict (id) do nothing;\n\n-- Seed around 2026-09-02 (today in the assignment window)\ninsert into bookings (\n  id, code, guest_name, guest_phone, guest_count, room_id,\n  check_in, check_out, status, total_amount, paid, source, notes, created_at\n) values\n  (1,  'AV-2401', 'Trần Minh Khang',  '0912 384 201', 1, 1,\n   '2026-09-01', '2026-09-04', 'checked_in',  3870000, true,  'walk_in', 'Yêu cầu gối thấp',           '2026-08-28 09:12:00+07'),\n  (2,  'AV-2402', 'Lê Hoàng Yến',     '0983 221 445', 2, 4,\n   '2026-08-31', '2026-09-02', 'checked_in',  3780000, true,  'online',  'Checkout trước 11h',         '2026-08-20 14:03:00+07'),\n  (3,  'AV-2403', 'Phạm Đức Anh',     '0906 118 773', 1, 7,\n   '2026-09-02', '2026-09-05', 'confirmed',   3870000, false, 'online',  'Đến sau 20h',                '2026-08-30 11:40:00+07'),\n  (4,  'AV-2404', 'Nguyễn Thu Hà',    '0934 667 812', 3, 11,\n   '2026-09-02', '2026-09-06', 'confirmed',   9960000, true,  'walk_in', 'Có trẻ 5 tuổi',              '2026-09-01 16:22:00+07'),\n  (5,  'AV-2405', 'Võ Nhật Nam',      '0971 550 309', 2, 15,\n   '2026-09-01', '2026-09-05', 'checked_in', 11560000, true,  'online',  '',                           '2026-08-12 08:55:00+07'),\n  (6,  'AV-2406', 'Đặng Phương Linh', '0888 214 660', 2, 17,\n   '2026-09-04', '2026-09-07', 'confirmed',   8670000, false, 'online',  'Kỷ niệm cưới',               '2026-08-25 19:10:00+07'),\n  (7,  'AV-2407', 'Bùi Quốc Huy',     '0945 003 128', 1, 2,\n   '2026-08-29', '2026-09-01', 'cancelled',   3870000, false, 'online',  'Khách hủy vì đổi lịch bay',  '2026-08-18 10:00:00+07'),\n  (8,  'AV-2408', 'Hoàng Mỹ An',      '0962 778 431', 2, 9,\n   '2026-08-28', '2026-09-01', 'checked_out', 7560000, true,  'walk_in', '',                           '2026-08-27 13:45:00+07'),\n  (9,  'AV-2409', 'Đỗ Thanh Tùng',    '0918 902 554', 2, 6,\n   '2026-09-03', '2026-09-06', 'confirmed',   5670000, false, 'online',  '',                           '2026-08-31 21:18:00+07'),\n  (10, 'AV-2410', 'Mai Ngọc Châu',    '0933 441 270', 2, 16,\n   '2026-08-30', '2026-09-03', 'checked_in', 11560000, true,  'online',  'Dị ứng lông thú',            '2026-08-15 07:30:00+07'),\n  (11, 'AV-2411', 'Lý Hải Đăng',      '0903 216 889', 1, 8,\n   '2026-09-05', '2026-09-08', 'confirmed',   3870000, false, 'online',  '',                           '2026-09-01 09:05:00+07'),\n  (12, 'AV-2412', 'Ngô Bảo Trâm',     '0987 654 012', 2, 5,\n   '2026-09-06', '2026-09-09', 'confirmed',   5670000, true,  'walk_in', 'Xuất hóa đơn công ty',       '2026-09-02 10:40:00+07')\non conflict (id) do nothing;\n\nselect setval('room_types_id_seq', (select coalesce(max(id), 1) from room_types));\nselect setval('rooms_id_seq', (select coalesce(max(id), 1) from rooms));\nselect setval('bookings_id_seq', (select coalesce(max(id), 1) from bookings));\n";
/**
* Migration bookkeeping shared by the two appliers — `scripts/migrate.mjs`
* (deploy, `readdir`) and `src/lib/db.ts` (PGLite preview, `import.meta.glob`).
*
* Applied files are keyed by BASENAME, so the same file applies once no matter
* which directory it is globbed from. That is what makes the auth schema safe to
* copy from `migrations/auth/` into `migrations/` when an app turns sign-in on:
* a database that already has `0001_auth.sql` will not re-run it.
*
* Neither applier descends into subdirectories, so `migrations/auth/*.sql` is
* out of scope for both until it is copied up.
*/
/**
* The `_migrations` key for a migration path (or bare filename).
* @param {string} path
* @returns {string}
*/
function migrationName(path) {
	return path.split("/").pop() ?? path;
}
/**
* @param {string} path
* @returns {boolean}
*/
function isMigrationFile(path) {
	return path.endsWith(".sql");
}
/**
* Migrations in `paths` that are not yet in `applied`, in apply order.
* Non-`.sql` entries (a `readdir` also yields `migrations/auth/`) are dropped.
* @param {Iterable<string>} paths
* @param {Iterable<string>} applied
* @returns {Array<{ name: string, path: string }>}
*/
function pendingMigrations(paths, applied) {
	const done = new Set(applied);
	return [...paths].filter(isMigrationFile).map((path) => ({
		name: migrationName(path),
		path
	})).sort((a, b) => a.name.localeCompare(b.name)).filter(({ name }) => !done.has(name));
}
var rawDatabaseUrl = typeof process !== "undefined" ? process.env.DATABASE_URL : void 0;
var databaseUrl = rawDatabaseUrl && rawDatabaseUrl.trim() ? rawDatabaseUrl : void 0;
/**
* Active backend: real **Neon** when `DATABASE_URL` is set (deployed / configured
* sandbox), otherwise a local embedded **PGLite** (Postgres compiled to WASM) so
* the app has a working database even with nothing configured — the live preview
* included. Swap in Neon later by just setting `DATABASE_URL`; no code changes.
*/
var dbSource = databaseUrl ? "neon" : "pglite";
/**
* Init state lives on globalThis as promises: dev HMR creates new instances of
* this module, and two instances racing module-level state would open a second
* pool or run two concurrent PGLite migration passes (whose duplicate
* `_migrations` insert rejects — and would get memoized, poisoning every later
* `getSql()`). A failed init clears its slot so the next call retries.
*/
var globalRef = globalThis;
/**
* Result-type parity: Postgres sends every value as text plus a type OID — the
* JS value is the DRIVER's parsing choice, and pg and PGLite disagree (pg:
* int8 -> string, date -> local-midnight Date; PGLite: int8 -> BigInt, which
* JSON.stringify rejects, date -> UTC Date). Normalize both so preview and
* production return identical, JSON-safe shapes:
*   int8/bigint (incl. count(*)) -> number (past 2^53 loses precision — cast
*                                   `::text` if you ever need huge integers)
*   date                         -> 'YYYY-MM-DD' string
*   interval                     -> Postgres interval text
* numeric already comes back as a string on both (arbitrary precision).
*/
var OID_INT8 = 20;
var OID_DATE = 1082;
var OID_INTERVAL = 1186;
var identity = (v) => v;
/** Wrap a query runner in the tagged-template + `.query()` `Sql` surface. */
function toSql(run) {
	const sql = (async (strings, ...values) => {
		let text = strings[0];
		for (let i = 0; i < values.length; i += 1) text += `$${i + 1}${strings[i + 1]}`;
		return run(text, values);
	});
	sql.query = (text, params = []) => run(text, params);
	return sql;
}
function createNeonSql() {
	globalRef.__pgSqlPromise__ ??= (async () => {
		const { Pool, types } = await import("../_libs/pg.mjs").then((n) => n.t);
		types.setTypeParser(OID_INT8, Number);
		types.setTypeParser(OID_DATE, identity);
		types.setTypeParser(OID_INTERVAL, identity);
		const pool = new Pool({ connectionString: databaseUrl });
		return toSql(async (text, params) => {
			return (await pool.query(text, params)).rows;
		});
	})().catch((err) => {
		globalRef.__pgSqlPromise__ = void 0;
		throw err;
	});
	return globalRef.__pgSqlPromise__;
}
async function createPgliteSql() {
	globalRef.__pgliteInstance__ ??= (async () => {
		const { PGlite } = await import("../_libs/electric-sql__pglite.mjs").then((n) => n.t);
		const pg = new PGlite({ parsers: {
			[OID_INT8]: Number,
			[OID_DATE]: identity,
			[OID_INTERVAL]: identity
		} });
		await pg.waitReady;
		await pg.exec("create table if not exists _migrations (name text primary key, applied_at timestamptz not null default now())");
		return pg;
	})().catch((err) => {
		globalRef.__pgliteInstance__ = void 0;
		throw err;
	});
	const pg = await globalRef.__pgliteInstance__;
	const migrate = async () => {
		const migrations = /* #__PURE__ */ Object.assign({ "/migrations/0002_hotel.sql": _0002_hotel_default });
		const done = (await pg.query("select name from _migrations")).rows.map((r) => r.name);
		for (const { name, path } of pendingMigrations(Object.keys(migrations), done)) await pg.transaction(async (tx) => {
			await tx.exec(migrations[path]);
			await tx.query("insert into _migrations (name) values ($1)", [name]);
		});
	};
	const pass = (globalRef.__pgliteMigrateChain__ ?? Promise.resolve()).catch(() => void 0).then(migrate);
	globalRef.__pgliteMigrateChain__ = pass;
	await pass;
	return toSql(async (text, params) => {
		return (await pg.query(text, params)).rows;
	});
}
var sqlPromise = null;
async function createSql() {
	if (typeof window !== "undefined") throw new Error("@/lib/db is server-only — call getSql() from a createServerFn handler or a server route loader, never from client code.");
	return dbSource === "neon" ? createNeonSql() : createPgliteSql();
}
/**
* Get the shared, **server-only** SQL client. Neon when `DATABASE_URL` is set,
* otherwise the local PGLite fallback. Memoized — safe to call per request.
*
* Schema comes from `migrations/*.sql`, auto-applied before the first query on
* both backends — define tables there, never inline in server functions.
*/
function getSql() {
	sqlPromise ??= createSql().catch((err) => {
		sqlPromise = null;
		throw err;
	});
	return sqlPromise;
}
/**
* Finish DB bootstrap before the server handles traffic.
*
* - **PGLite** (preview / no `DATABASE_URL`): open the in-memory DB and apply
*   `migrations/*.sql`. Idempotent — concurrent callers share one promise.
* - **Neon**: no-op (pool is created lazily on first query).
*
* Vite `configureServer` awaits this at dev startup; production imports of this
* module kick it off immediately (see bottom of file).
*/
function ensureDbReady() {
	if (dbSource !== "pglite") return Promise.resolve();
	return getSql().then(() => void 0);
}
var globalBoot = globalThis;
if (typeof window === "undefined" && dbSource === "pglite") globalBoot.__pgBootstrapPromise__ ??= ensureDbReady().catch((err) => {
	globalBoot.__pgBootstrapPromise__ = void 0;
	console.error("[db] PGLite bootstrap failed:", err);
	throw err;
});
var dateStr = string().regex(/^\d{4}-\d{2}-\d{2}$/);
function money(v) {
	return typeof v === "number" ? v : Number(v);
}
function mapType(row) {
	return {
		id: row.id,
		code: row.code,
		name: row.name,
		description: row.description,
		capacity: row.capacity,
		pricePerNight: money(row.price_per_night),
		image: row.image,
		amenities: row.amenities.split(",").map((s) => s.trim()).filter(Boolean)
	};
}
function mapRoom(row) {
	return {
		id: row.id,
		number: row.number,
		floor: row.floor,
		status: row.status,
		notes: row.notes,
		type: {
			id: row.type_id,
			code: row.type_code,
			name: row.type_name,
			description: row.type_description,
			capacity: row.type_capacity,
			pricePerNight: money(row.type_price),
			image: row.type_image,
			amenities: row.type_amenities.split(",").map((s) => s.trim()).filter(Boolean)
		}
	};
}
function mapBooking(row) {
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
		status: row.status,
		totalAmount: money(row.total_amount),
		paid: Boolean(row.paid),
		source: row.source,
		notes: row.notes,
		createdAt: String(row.created_at)
	};
}
var ROOM_SQL = `select
  r.id, r.number, r.floor, r.status, r.notes,
  t.id as type_id, t.code as type_code, t.name as type_name,
  t.description as type_description, t.capacity as type_capacity,
  t.price_per_night as type_price, t.image as type_image,
  t.amenities as type_amenities
from rooms r
join room_types t on t.id = r.type_id`;
var BOOKING_SQL = `select
  b.id, b.code, b.guest_name, b.guest_phone, b.guest_count,
  b.room_id, r.number as room_number, t.name as room_type_name,
  b.check_in::text as check_in, b.check_out::text as check_out,
  b.status, b.total_amount, b.paid, b.source, b.notes,
  b.created_at::text as created_at
from bookings b
join rooms r on r.id = b.room_id
join room_types t on t.id = r.type_id`;
async function fetchRooms() {
	return (await (await getSql()).query(`${ROOM_SQL} order by r.floor, r.number`)).map(mapRoom);
}
async function fetchBookings() {
	return (await (await getSql()).query(`${BOOKING_SQL} order by b.check_in desc, b.id desc`)).map(mapBooking);
}
async function fetchBookingByCode(code) {
	const rows = await (await getSql()).query(`${BOOKING_SQL} where b.code = $1`, [code.toUpperCase().trim()]);
	return rows[0] ? mapBooking(rows[0]) : null;
}
function isBlocking(status) {
	return status === "confirmed" || status === "checked_in";
}
async function roomBlocked(roomId, checkIn, checkOut, exceptId) {
	return (await (await getSql()).query(`select id from bookings
     where room_id = $1
       and status in ('confirmed', 'checked_in')
       and check_in < $3
       and check_out > $2
       and ($4::int is null or id <> $4)
     limit 1`, [
		roomId,
		checkIn,
		checkOut,
		exceptId ?? null
	])).length > 0;
}
function makeCode() {
	return `AV-${Math.floor(1e3 + Math.random() * 9e3)}`;
}
var listRoomTypes_createServerFn_handler = createServerRpc({
	id: "f13037bb5c3851031a0d4038b4fb69858f8c70f568feb701682c8046cc513fc4",
	name: "listRoomTypes",
	filename: "src/lib/hotel/functions.ts"
}, (opts) => listRoomTypes.__executeServer(opts));
var listRoomTypes = createServerFn({ method: "GET" }).handler(listRoomTypes_createServerFn_handler, async () => {
	return (await (await getSql()).query(`select id, code, name, description, capacity, price_per_night, image, amenities
     from room_types order by price_per_night`)).map(mapType);
});
var listRooms_createServerFn_handler = createServerRpc({
	id: "53f980e7b514cdf019e68722ce12be0eb6fa80a8fede76a0c0c2186bdd6f153f",
	name: "listRooms",
	filename: "src/lib/hotel/functions.ts"
}, (opts) => listRooms.__executeServer(opts));
var listRooms = createServerFn({ method: "GET" }).handler(listRooms_createServerFn_handler, async () => {
	return fetchRooms();
});
var listBookings_createServerFn_handler = createServerRpc({
	id: "73232b0d7dfc654509570ebe6b309d9e2045d9d9d34770854438da1946f28fb7",
	name: "listBookings",
	filename: "src/lib/hotel/functions.ts"
}, (opts) => listBookings.__executeServer(opts));
var listBookings = createServerFn({ method: "GET" }).handler(listBookings_createServerFn_handler, async () => {
	return fetchBookings();
});
var getDashboard_createServerFn_handler = createServerRpc({
	id: "08431f70631fdbdcaecdf97250efa414d51de66ea5ded224d32a80f888d9d734",
	name: "getDashboard",
	filename: "src/lib/hotel/functions.ts"
}, (opts) => getDashboard.__executeServer(opts));
var getDashboard = createServerFn({ method: "GET" }).handler(getDashboard_createServerFn_handler, async () => {
	const today = todayVN();
	const [rooms, bookings] = await Promise.all([fetchRooms(), fetchBookings()]);
	const covering = bookings.filter((b) => isBlocking(b.status)).filter((b) => coversDate(b.checkIn, b.checkOut, today));
	const month = today.slice(0, 7);
	const monthBookings = bookings.filter((b) => b.status !== "cancelled" && b.checkIn.slice(0, 7) === month);
	const arrivals = bookings.filter((b) => b.checkIn === today && b.status !== "cancelled").sort((a, b) => a.roomNumber.localeCompare(b.roomNumber));
	const departures = bookings.filter((b) => b.checkOut === today && (b.status === "checked_in" || b.status === "checked_out")).sort((a, b) => a.roomNumber.localeCompare(b.roomNumber));
	const sellable = rooms.filter((r) => r.status !== "maintenance").length;
	const occupiedTonight = covering.length;
	return {
		today,
		occupancy: sellable === 0 ? 0 : Math.round(occupiedTonight / sellable * 100),
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
			return s + (b.nights > 0 ? b.totalAmount / b.nights : 0);
		}, 0),
		recent: bookings.slice(0, 8)
	};
});
var getAvailability_createServerFn_handler = createServerRpc({
	id: "7d30319223954a041c6faa4749a734611bb1c7aa8c2036300bb7c2c8d9f5485c",
	name: "getAvailability",
	filename: "src/lib/hotel/functions.ts"
}, (opts) => getAvailability.__executeServer(opts));
var getAvailability = createServerFn({ method: "GET" }).validator(object({
	checkIn: dateStr,
	checkOut: dateStr,
	guests: number().int().min(1).max(8).optional()
})).handler(getAvailability_createServerFn_handler, async ({ data }) => {
	if (nightsBetween(data.checkIn, data.checkOut) < 1) throw new Error("Ngày trả phòng phải sau ngày nhận phòng.");
	const [rooms, bookings] = await Promise.all([fetchRooms(), fetchBookings()]);
	const blocked = new Set(bookings.filter((b) => isBlocking(b.status) && b.checkIn < data.checkOut && data.checkIn < b.checkOut).map((b) => b.roomId));
	return rooms.filter((room) => {
		if (room.status === "maintenance") return false;
		if (blocked.has(room.id)) return false;
		if (data.guests && room.type.capacity < data.guests) return false;
		return true;
	});
});
var lookupBooking_createServerFn_handler = createServerRpc({
	id: "9b8410c4a1ea1319475bd8a06cabb43f741f20e8a8b23c824f2d9ac8a4191e15",
	name: "lookupBooking",
	filename: "src/lib/hotel/functions.ts"
}, (opts) => lookupBooking.__executeServer(opts));
var lookupBooking = createServerFn({ method: "GET" }).validator(object({ code: string().min(4).max(16) })).handler(lookupBooking_createServerFn_handler, async ({ data }) => {
	return fetchBookingByCode(data.code);
});
var createBooking_createServerFn_handler = createServerRpc({
	id: "5e16c1d270f4de8c5a9ead5f3a4cbbaf143d64ee273e238f469b88206d7d06b0",
	name: "createBooking",
	filename: "src/lib/hotel/functions.ts"
}, (opts) => createBooking.__executeServer(opts));
var createBooking = createServerFn({ method: "POST" }).validator(object({
	guestName: string().trim().min(2).max(80),
	guestPhone: string().trim().min(8).max(24),
	guestCount: number().int().min(1).max(8),
	roomId: number().int(),
	checkIn: dateStr,
	checkOut: dateStr,
	source: _enum(["walk_in", "online"]),
	notes: string().max(240).optional().default(""),
	paid: boolean().optional().default(false)
})).handler(createBooking_createServerFn_handler, async ({ data }) => {
	const nights = nightsBetween(data.checkIn, data.checkOut);
	if (nights < 1) throw new Error("Cần ở ít nhất một đêm.");
	const today = todayVN();
	if (data.checkIn < today) throw new Error("Không đặt phòng cho ngày đã qua.");
	const sql = await getSql();
	const roomRows = await sql.query(`${ROOM_SQL} where r.id = $1`, [data.roomId]);
	const room = roomRows[0] ? mapRoom(roomRows[0]) : null;
	if (!room) throw new Error("Không tìm thấy phòng.");
	if (room.status === "maintenance") throw new Error("Phòng đang bảo trì.");
	if (data.guestCount > room.type.capacity) throw new Error(`Phòng ${room.number} tối đa ${room.type.capacity} khách.`);
	if (await roomBlocked(room.id, data.checkIn, data.checkOut)) throw new Error("Phòng đã được đặt trong khoảng ngày này.");
	const total = nights * room.type.pricePerNight;
	let code = makeCode();
	for (let i = 0; i < 8; i += 1) {
		if ((await sql.query(`select id from bookings where code = $1`, [code])).length === 0) break;
		code = makeCode();
	}
	const inserted = await sql.query(`insert into bookings
        (code, guest_name, guest_phone, guest_count, room_id, check_in, check_out,
         status, total_amount, paid, source, notes)
       values ($1,$2,$3,$4,$5,$6,$7,'confirmed',$8,$9,$10,$11)
       returning id`, [
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
		data.notes ?? ""
	]);
	return mapBooking((await sql.query(`${BOOKING_SQL} where b.id = $1`, [inserted[0].id]))[0]);
});
var updateBookingStatus_createServerFn_handler = createServerRpc({
	id: "44ce17bc0d88262ac3ceda27d1d606c8641fb975ba5ab458c713acd24e7daaf5",
	name: "updateBookingStatus",
	filename: "src/lib/hotel/functions.ts"
}, (opts) => updateBookingStatus.__executeServer(opts));
var updateBookingStatus = createServerFn({ method: "POST" }).validator(object({
	id: number().int(),
	action: _enum([
		"check_in",
		"check_out",
		"cancel",
		"mark_paid"
	])
})).handler(updateBookingStatus_createServerFn_handler, async ({ data }) => {
	const sql = await getSql();
	const rows = await sql.query(`${BOOKING_SQL} where b.id = $1`, [data.id]);
	if (!rows[0]) throw new Error("Không tìm thấy đơn đặt.");
	const booking = mapBooking(rows[0]);
	const today = todayVN();
	if (data.action === "mark_paid") await sql.query(`update bookings set paid = true where id = $1`, [booking.id]);
	else if (data.action === "cancel") {
		if (booking.status === "checked_in") throw new Error("Không hủy đơn đang nhận phòng — hãy trả phòng trước.");
		if (booking.status === "checked_out") throw new Error("Đơn đã trả phòng, không hủy được.");
		await sql.query(`update bookings set status = 'cancelled' where id = $1`, [booking.id]);
	} else if (data.action === "check_in") {
		if (booking.status !== "confirmed") throw new Error("Chỉ nhận phòng với đơn đã xác nhận.");
		if (today < booking.checkIn) throw new Error("Chưa đến ngày nhận phòng.");
		if (today >= booking.checkOut) throw new Error("Đã quá ngày trả phòng.");
		if (mapRoom((await sql.query(`${ROOM_SQL} where r.id = $1`, [booking.roomId]))[0]).status === "maintenance") throw new Error("Phòng đang bảo trì.");
		await sql.query(`update bookings set status = 'checked_in', paid = true where id = $1`, [booking.id]);
		await sql.query(`update rooms set status = 'occupied' where id = $1`, [booking.roomId]);
	} else if (data.action === "check_out") {
		if (booking.status !== "checked_in") throw new Error("Chỉ trả phòng với đơn đang ở.");
		await sql.query(`update bookings set status = 'checked_out' where id = $1`, [booking.id]);
		await sql.query(`update rooms set status = 'cleaning', notes = 'Trả phòng — chờ buồng phòng' where id = $1`, [booking.roomId]);
	}
	return mapBooking((await sql.query(`${BOOKING_SQL} where b.id = $1`, [booking.id]))[0]);
});
var updateRoomStatus_createServerFn_handler = createServerRpc({
	id: "5e14cf775ad9937c68d03d704a6aba99e150eed02a9f8809022f97cf45747efa",
	name: "updateRoomStatus",
	filename: "src/lib/hotel/functions.ts"
}, (opts) => updateRoomStatus.__executeServer(opts));
var updateRoomStatus = createServerFn({ method: "POST" }).validator(object({
	id: number().int(),
	status: _enum([
		"available",
		"occupied",
		"cleaning",
		"maintenance"
	]),
	notes: string().max(200).optional()
})).handler(updateRoomStatus_createServerFn_handler, async ({ data }) => {
	const sql = await getSql();
	await sql.query(`update rooms set status = $2, notes = coalesce($3, notes) where id = $1`, [
		data.id,
		data.status,
		data.notes ?? null
	]);
	const rows = await sql.query(`${ROOM_SQL} where r.id = $1`, [data.id]);
	if (!rows[0]) throw new Error("Không tìm thấy phòng.");
	return mapRoom(rows[0]);
});
var createRoom_createServerFn_handler = createServerRpc({
	id: "c67fc8a05aa3c6e6632d974ce96925a5b49baf5030f43dc24e67ed5b2e4cc5f7",
	name: "createRoom",
	filename: "src/lib/hotel/functions.ts"
}, (opts) => createRoom.__executeServer(opts));
var createRoom = createServerFn({ method: "POST" }).validator(object({
	number: string().trim().min(1).max(8),
	floor: number().int().min(1).max(12),
	typeId: number().int()
})).handler(createRoom_createServerFn_handler, async ({ data }) => {
	const sql = await getSql();
	if ((await sql.query(`select id from rooms where number = $1`, [data.number])).length) throw new Error(`Số phòng ${data.number} đã tồn tại.`);
	const inserted = await sql.query(`insert into rooms (number, floor, type_id, status) values ($1,$2,$3,'available') returning id`, [
		data.number,
		data.floor,
		data.typeId
	]);
	return mapRoom((await sql.query(`${ROOM_SQL} where r.id = $1`, [inserted[0].id]))[0]);
});
var getCalendar_createServerFn_handler = createServerRpc({
	id: "026909af9bd915360c3a6f071988df1972ccaf00b0afae06af73bafc0ed32fd1",
	name: "getCalendar",
	filename: "src/lib/hotel/functions.ts"
}, (opts) => getCalendar.__executeServer(opts));
var getCalendar = createServerFn({ method: "GET" }).validator(object({ start: dateStr.optional() })).handler(getCalendar_createServerFn_handler, async ({ data }) => {
	const start = data.start ?? todayVN();
	const days = Array.from({ length: 14 }, (_, i) => addDays(start, i));
	const [rooms, bookings] = await Promise.all([fetchRooms(), fetchBookings()]);
	const blocking = bookings.filter((b) => isBlocking(b.status));
	return {
		start,
		days,
		rows: rooms.map((room) => {
			return {
				room,
				cells: days.map((date) => {
					const hit = blocking.find((b) => b.roomId === room.id && coversDate(b.checkIn, b.checkOut, date));
					if (!hit) return {
						date,
						booking: null
					};
					const isStart = hit.checkIn === date || date === start;
					let span = 0;
					if (isStart) for (const d of days) {
						if (d < hit.checkIn) continue;
						if (d >= hit.checkOut) break;
						if (d < start) continue;
						span += 1;
					}
					return {
						date,
						booking: {
							id: hit.id,
							code: hit.code,
							guestName: hit.guestName,
							status: hit.status,
							isStart,
							span
						}
					};
				})
			};
		})
	};
});
var getReports_createServerFn_handler = createServerRpc({
	id: "6b6e39dc33462c001698a8d980dfa96a969940d568a437898d0b45c4f91265a7",
	name: "getReports",
	filename: "src/lib/hotel/functions.ts"
}, (opts) => getReports.__executeServer(opts));
var getReports = createServerFn({ method: "GET" }).handler(getReports_createServerFn_handler, async () => {
	const today = todayVN();
	const start = addDays(today, -13);
	const [rooms, bookings] = await Promise.all([fetchRooms(), fetchBookings()]);
	const sellable = rooms.filter((r) => r.status !== "maintenance").length || rooms.length;
	const days = Array.from({ length: 14 }, (_, i) => {
		const date = addDays(start, i);
		const occupied = bookings.filter((b) => isBlocking(b.status) && coversDate(b.checkIn, b.checkOut, date)).length;
		return {
			date,
			occupied,
			blocked: occupied,
			total: sellable,
			rate: sellable === 0 ? 0 : Math.round(occupied / sellable * 100)
		};
	});
	const month = today.slice(0, 7);
	const monthBookings = bookings.filter((b) => b.status !== "cancelled" && b.checkIn.slice(0, 7) === month);
	const byTypeMap = /* @__PURE__ */ new Map();
	for (const b of monthBookings) {
		const cur = byTypeMap.get(b.roomTypeName) ?? {
			nights: 0,
			revenue: 0
		};
		cur.nights += b.nights;
		cur.revenue += b.totalAmount;
		byTypeMap.set(b.roomTypeName, cur);
	}
	const allNonCancel = bookings.filter((b) => b.status !== "cancelled");
	const avgStay = allNonCancel.length === 0 ? 0 : allNonCancel.reduce((s, b) => s + b.nights, 0) / allNonCancel.length;
	const cancelRate = bookings.length === 0 ? 0 : Math.round(bookings.filter((b) => b.status === "cancelled").length / bookings.length * 100);
	return {
		today,
		days,
		byType: [...byTypeMap.entries()].map(([typeName, v]) => ({
			typeName,
			...v
		})),
		monthRevenue: monthBookings.reduce((s, b) => s + b.totalAmount, 0),
		monthNights: monthBookings.reduce((s, b) => s + b.nights, 0),
		avgStay: Math.round(avgStay * 10) / 10,
		cancelRate
	};
});
//#endregion
export { createBooking_createServerFn_handler, createRoom_createServerFn_handler, getAvailability_createServerFn_handler, getCalendar_createServerFn_handler, getDashboard_createServerFn_handler, getReports_createServerFn_handler, listBookings_createServerFn_handler, listRoomTypes_createServerFn_handler, listRooms_createServerFn_handler, lookupBooking_createServerFn_handler, updateBookingStatus_createServerFn_handler, updateRoomStatus_createServerFn_handler };
