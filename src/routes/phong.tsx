import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { BookingDialog } from "@/components/hotel/booking-dialog";
import { BookingStatusBadge, RoomStatusBadge } from "@/components/hotel/status-badge";
import { useAddRoom, useBookings, useRoomAction, useRoomTypes, useRooms } from "@/components/hotel/query";
import { Shell } from "@/components/hotel/shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { coversDate, formatDateVN, formatMoney, todayVN } from "@/lib/hotel/format";
import type { Room, RoomStatus } from "@/lib/hotel/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/phong")({ component: RoomsPage });

const FILTERS: { id: "all" | RoomStatus; label: string }[] = [
  { id: "all", label: "Tất cả" },
  { id: "available", label: "Trống" },
  { id: "occupied", label: "Đang ở" },
  { id: "cleaning", label: "Dọn" },
  { id: "maintenance", label: "Bảo trì" },
];

function RoomsPage() {
  const rooms = useRooms();
  const bookings = useBookings();
  const types = useRoomTypes();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const [selected, setSelected] = useState<Room | null>(null);
  const [addOpen, setAddOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  const [number, setNumber] = useState("");
  const [floor, setFloor] = useState(1);
  const [typeId, setTypeId] = useState("");
  const add = useAddRoom();
  const action = useRoomAction();
  const today = todayVN();

  const list = useMemo(() => {
    const all = rooms.data ?? [];
    return filter === "all" ? all : all.filter((r) => r.status === filter);
  }, [rooms.data, filter]);

  const floors = useMemo(() => {
    const map = new Map<number, Room[]>();
    for (const room of list) {
      const arr = map.get(room.floor) ?? [];
      arr.push(room);
      map.set(room.floor, arr);
    }
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
  }, [list]);

  const currentBooking = selected
    ? (bookings.data ?? []).find(
        (b) =>
          b.roomId === selected.id &&
          (b.status === "confirmed" || b.status === "checked_in") &&
          coversDate(b.checkIn, b.checkOut, today),
      )
    : undefined;

  return (
    <Shell
      title="Sơ đồ phòng"
      action={
        <Button onClick={() => setAddOpen(true)}>
          <Plus className="size-4" />
          <span className="hidden sm:inline">Thêm phòng</span>
        </Button>
      }
    >
      <div className="mb-5 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <Button
            key={f.id}
            size="sm"
            variant={filter === f.id ? "default" : "outline"}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </Button>
        ))}
      </div>

      {rooms.isLoading ? (
        <div className="grid gap-3 sm:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <Skeleton key={i} className="h-24 rounded-xl" />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          {floors.map(([floorNo, floorRooms]) => (
            <section key={floorNo}>
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Tầng {floorNo}
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {floorRooms.map((room) => (
                  <button
                    key={room.id}
                    type="button"
                    onClick={() => setSelected(room)}
                    className={cn(
                      "flex min-h-24 flex-col items-start justify-between rounded-xl p-3 text-left shadow-border transition-colors duration-150",
                      room.status === "available" && "bg-card hover:bg-accent",
                      room.status === "occupied" && "bg-ink text-primary-foreground hover:bg-ink/90",
                      room.status === "cleaning" && "bg-clay/15 hover:bg-clay/20",
                      room.status === "maintenance" && "bg-destructive/10 hover:bg-destructive/15",
                    )}
                  >
                    <span className="font-display text-xl tracking-tight">{room.number}</span>
                    <span
                      className={cn(
                        "text-xs",
                        room.status === "occupied" ? "text-primary-foreground/80" : "text-muted-foreground",
                      )}
                    >
                      {room.type.name.replace("Phòng ", "")}
                    </span>
                    {room.status === "occupied" ? (
                      <span className="text-xs text-primary-foreground/80">Đang ở</span>
                    ) : (
                      <RoomStatusBadge status={room.status} />
                    )}
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      <Sheet open={Boolean(selected)} onOpenChange={(v) => !v && setSelected(null)}>
        <SheetContent className="overflow-y-auto">
          {selected ? (
            <>
              <SheetHeader>
                <SheetTitle>Phòng {selected.number}</SheetTitle>
              </SheetHeader>
              <img
                src={selected.type.image}
                alt={selected.type.name}
                className="mt-4 aspect-[3/2] w-full rounded-lg object-cover"
              />
              <div className="mt-4 flex flex-col gap-3">
                <p className="text-sm text-muted-foreground">{selected.type.description}</p>
                <p className="text-sm">
                  {selected.type.capacity} khách · {formatMoney(selected.type.pricePerNight)}/đêm
                </p>
                <RoomStatusBadge status={selected.status} />
                {selected.notes ? (
                  <p className="text-sm text-muted-foreground">{selected.notes}</p>
                ) : null}
                {currentBooking ? (
                  <Card className="rounded-lg">
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">{currentBooking.guestName}</CardTitle>
                      <p className="text-xs text-muted-foreground">
                        {currentBooking.code} · {formatDateVN(currentBooking.checkIn)} →{" "}
                        {formatDateVN(currentBooking.checkOut)}
                      </p>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <BookingStatusBadge status={currentBooking.status} />
                    </CardContent>
                  </Card>
                ) : (
                  <p className="text-sm text-muted-foreground">Không có khách ở đêm nay.</p>
                )}
                <div className="grid grid-cols-2 gap-2">
                  {selected.status === "cleaning" ? (
                    <Button
                      onClick={() => {
                        action.mutate({ id: selected.id, status: "available", notes: "" });
                        setSelected(null);
                      }}
                    >
                      Đã dọn xong
                    </Button>
                  ) : null}
                  {selected.status === "available" ? (
                    <Button
                      onClick={() => {
                        setBookOpen(true);
                      }}
                    >
                      Đặt phòng này
                    </Button>
                  ) : null}
                  {selected.status !== "maintenance" ? (
                    <Button
                      variant="outline"
                      onClick={() => {
                        action.mutate({
                          id: selected.id,
                          status: "maintenance",
                          notes: "Chuyển bảo trì từ sơ đồ phòng",
                        });
                        setSelected(null);
                      }}
                    >
                      Bảo trì
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      onClick={() => {
                        action.mutate({ id: selected.id, status: "available", notes: "" });
                        setSelected(null);
                      }}
                    >
                      Kết thúc bảo trì
                    </Button>
                  )}
                </div>
              </div>
            </>
          ) : null}
        </SheetContent>
      </Sheet>

      <BookingDialog
        open={bookOpen}
        onOpenChange={setBookOpen}
        presetRoomId={selected?.id}
      />

      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thêm phòng</DialogTitle>
          </DialogHeader>
          <form
            className="flex flex-col gap-4"
            onSubmit={async (e) => {
              e.preventDefault();
              if (!typeId) return;
              await add.mutateAsync({ number, floor, typeId: Number(typeId) });
              setAddOpen(false);
              setNumber("");
            }}
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="num">Số phòng</Label>
              <Input id="num" value={number} onChange={(e) => setNumber(e.target.value)} required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="floor">Tầng</Label>
              <Input
                id="floor"
                type="number"
                min={1}
                max={12}
                value={floor}
                onChange={(e) => setFloor(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Hạng phòng</Label>
              <Select value={typeId || undefined} onValueChange={setTypeId}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn hạng" />
                </SelectTrigger>
                <SelectContent>
                  {(types.data ?? []).map((t) => (
                    <SelectItem key={t.id} value={String(t.id)}>
                      {t.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" disabled={add.isPending || !typeId}>
              Lưu phòng
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </Shell>
  );
}
