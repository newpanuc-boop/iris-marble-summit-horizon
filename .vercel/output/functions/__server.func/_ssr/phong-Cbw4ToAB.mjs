import { o as __toESM } from "../_runtime.mjs";
import { a as coversDate, c as formatMoney, f as todayVN, o as formatDateVN } from "./format-w534KtO6.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as Plus } from "../_libs/lucide-react.mjs";
import { a as SheetHeader, c as cn, i as SheetContent, o as SheetTitle, r as Sheet, s as Shell, t as Button } from "./shell-BFYCjhug.mjs";
import { a as useBookings, d as useRoomAction, f as useRoomTypes, n as useAddRoom, p as useRooms, t as Skeleton } from "./skeleton-B-Mlmikd.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-hMW4k6ac.mjs";
import { n as Input, r as Label } from "./label-lbzozH-M.mjs";
import { n as RoomStatusBadge, t as BookingStatusBadge } from "./status-badge-D2WTDjP7.mjs";
import { a as DialogTitle, c as SelectItem, i as DialogHeader, l as SelectTrigger, n as Dialog, o as Select, r as DialogContent, s as SelectContent, t as BookingDialog, u as SelectValue } from "./booking-dialog-HxZGuw93.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/phong-Cbw4ToAB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	{
		id: "all",
		label: "Tất cả"
	},
	{
		id: "available",
		label: "Trống"
	},
	{
		id: "occupied",
		label: "Đang ở"
	},
	{
		id: "cleaning",
		label: "Dọn"
	},
	{
		id: "maintenance",
		label: "Bảo trì"
	}
];
function RoomsPage() {
	const rooms = useRooms();
	const bookings = useBookings();
	const types = useRoomTypes();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [addOpen, setAddOpen] = (0, import_react.useState)(false);
	const [bookOpen, setBookOpen] = (0, import_react.useState)(false);
	const [number, setNumber] = (0, import_react.useState)("");
	const [floor, setFloor] = (0, import_react.useState)(1);
	const [typeId, setTypeId] = (0, import_react.useState)("");
	const add = useAddRoom();
	const action = useRoomAction();
	const today = todayVN();
	const list = (0, import_react.useMemo)(() => {
		const all = rooms.data ?? [];
		return filter === "all" ? all : all.filter((r) => r.status === filter);
	}, [rooms.data, filter]);
	const floors = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const room of list) {
			const arr = map.get(room.floor) ?? [];
			arr.push(room);
			map.set(room.floor, arr);
		}
		return [...map.entries()].sort((a, b) => b[0] - a[0]);
	}, [list]);
	const currentBooking = selected ? (bookings.data ?? []).find((b) => b.roomId === selected.id && (b.status === "confirmed" || b.status === "checked_in") && coversDate(b.checkIn, b.checkOut, today)) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		title: "Sơ đồ phòng",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			onClick: () => setAddOpen(true),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden sm:inline",
				children: "Thêm phòng"
			})]
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 flex flex-wrap gap-2",
				children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: filter === f.id ? "default" : "outline",
					onClick: () => setFilter(f.id),
					children: f.label
				}, f.id))
			}),
			rooms.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: Array.from({ length: 9 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-24 rounded-xl" }, i))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-8",
				children: floors.map(([floorNo, floorRooms]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground",
					children: ["Tầng ", floorNo]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",
					children: floorRooms.map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setSelected(room),
						className: cn("flex min-h-24 flex-col items-start justify-between rounded-xl p-3 text-left shadow-border transition-colors duration-150", room.status === "available" && "bg-card hover:bg-accent", room.status === "occupied" && "bg-ink text-primary-foreground hover:bg-ink/90", room.status === "cleaning" && "bg-clay/15 hover:bg-clay/20", room.status === "maintenance" && "bg-destructive/10 hover:bg-destructive/15"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl tracking-tight",
								children: room.number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-xs", room.status === "occupied" ? "text-primary-foreground/70" : "text-muted-foreground"),
								children: room.type.name.replace("Phòng ", "").replace("Suite ", "Suite ")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomStatusBadge, { status: room.status })
						]
					}, room.id))
				})] }, floorNo))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: Boolean(selected),
				onOpenChange: (v) => !v && setSelected(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
					className: "overflow-y-auto",
					children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, { children: ["Phòng ", selected.number] }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: selected.type.image,
							alt: selected.type.name,
							className: "mt-4 aspect-[3/2] w-full rounded-lg object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-col gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: selected.type.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm",
									children: [
										selected.type.capacity,
										" khách · ",
										formatMoney(selected.type.pricePerNight),
										"/đêm"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomStatusBadge, { status: selected.status }),
								selected.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: selected.notes
								}) : null,
								currentBooking ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "rounded-lg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
										className: "p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
											className: "text-base",
											children: currentBooking.guestName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground",
											children: [
												currentBooking.code,
												" · ",
												formatDateVN(currentBooking.checkIn),
												" →",
												" ",
												formatDateVN(currentBooking.checkOut)
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
										className: "p-4 pt-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingStatusBadge, { status: currentBooking.status })
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Không có khách ở đêm nay."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2",
									children: [
										selected.status === "cleaning" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											onClick: () => {
												action.mutate({
													id: selected.id,
													status: "available",
													notes: ""
												});
												setSelected(null);
											},
											children: "Đã dọn xong"
										}) : null,
										selected.status === "available" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											onClick: () => {
												setBookOpen(true);
											},
											children: "Đặt phòng này"
										}) : null,
										selected.status !== "maintenance" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "outline",
											onClick: () => {
												action.mutate({
													id: selected.id,
													status: "maintenance",
													notes: "Chuyển bảo trì từ sơ đồ phòng"
												});
												setSelected(null);
											},
											children: "Bảo trì"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "outline",
											onClick: () => {
												action.mutate({
													id: selected.id,
													status: "available",
													notes: ""
												});
												setSelected(null);
											},
											children: "Kết thúc bảo trì"
										})
									]
								})
							]
						})
					] }) : null
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingDialog, {
				open: bookOpen,
				onOpenChange: setBookOpen,
				presetRoomId: selected?.id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: addOpen,
				onOpenChange: setAddOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Thêm phòng" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex flex-col gap-4",
					onSubmit: async (e) => {
						e.preventDefault();
						if (!typeId) return;
						await add.mutateAsync({
							number,
							floor,
							typeId: Number(typeId)
						});
						setAddOpen(false);
						setNumber("");
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "num",
								children: "Số phòng"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "num",
								value: number,
								onChange: (e) => setNumber(e.target.value),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "floor",
								children: "Tầng"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "floor",
								type: "number",
								min: 1,
								max: 12,
								value: floor,
								onChange: (e) => setFloor(Number(e.target.value))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Hạng phòng" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: typeId || void 0,
								onValueChange: setTypeId,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Chọn hạng" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: (types.data ?? []).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: String(t.id),
									children: t.name
								}, t.id)) })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: add.isPending || !typeId,
							children: "Lưu phòng"
						})
					]
				})] })
			})
		]
	});
}
//#endregion
export { RoomsPage as component };
