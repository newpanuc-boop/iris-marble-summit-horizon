import { o as __toESM } from "../_runtime.mjs";
import { c as formatMoney, u as nightsBetween } from "./format-w534KtO6.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { m as Check, p as ChevronDown, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { c as cn, t as Button } from "./shell-BFYCjhug.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as useAvailability, s as useCreateBooking } from "./skeleton-B-Mlmikd.mjs";
import { n as Input, r as Label, t as DateRangeField } from "./label-lbzozH-M.mjs";
import { a as SelectItemIndicator, c as SelectTrigger$1, i as SelectItem$1, l as SelectValue$1, n as SelectContent$1, o as SelectItemText, r as SelectIcon, s as SelectPortal, t as Select$1, u as SelectViewport } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-dialog-HxZGuw93.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-ink/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed left-1/2 top-1/2 z-50 w-[calc(100%-1.5rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-card p-6 shadow-border", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Đóng"
			})]
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mb-4 flex flex-col gap-1", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-xl font-medium tracking-tight", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
var Select = Select$1;
var SelectValue = SelectValue$1;
function SelectTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
		className: cn("flex h-11 w-full items-center justify-between rounded-md border border-input bg-card px-3 text-sm", "focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 opacity-60" })
		})]
	});
}
function SelectContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent$1, {
		className: cn("relative z-50 min-w-32 overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-border", className),
		position: "popper",
		sideOffset: 4,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: "p-1",
			children
		})
	}) });
}
function SelectItem({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
		className: cn("relative flex w-full cursor-pointer select-none items-center rounded-md py-2 pl-8 pr-3 text-sm outline-none", "focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute left-2 flex size-4 items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-24 w-full rounded-md border border-input bg-card px-3 py-2 text-sm transition-colors duration-150", "placeholder:text-muted-foreground", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function BookingDialog({ open, onOpenChange, presetRoomId }) {
	const [checkIn, setCheckIn] = (0, import_react.useState)("");
	const [checkOut, setCheckOut] = (0, import_react.useState)("");
	const [guestCount, setGuestCount] = (0, import_react.useState)(2);
	const [roomId, setRoomId] = (0, import_react.useState)(presetRoomId ? String(presetRoomId) : "");
	const [guestName, setGuestName] = (0, import_react.useState)("");
	const [guestPhone, setGuestPhone] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [paid, setPaid] = (0, import_react.useState)(false);
	const ready = Boolean(checkIn && checkOut && nightsBetween(checkIn, checkOut) >= 1);
	const avail = useAvailability(checkIn, checkOut, guestCount, open && ready);
	const create = useCreateBooking();
	const rooms = avail.data ?? [];
	const selected = (0, import_react.useMemo)(() => rooms.find((r) => String(r.id) === roomId), [rooms, roomId]);
	const nights = ready ? nightsBetween(checkIn, checkOut) : 0;
	const total = selected ? nights * selected.type.pricePerNight : 0;
	function reset() {
		setCheckIn("");
		setCheckOut("");
		setGuestCount(2);
		setRoomId(presetRoomId ? String(presetRoomId) : "");
		setGuestName("");
		setGuestPhone("");
		setNotes("");
		setPaid(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => {
			onOpenChange(v);
			if (!v) reset();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90dvh] overflow-y-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Tạo đơn đặt phòng" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Walk-in tại quầy lễ tân. Phòng trống theo ngày đã chọn." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-4",
				onSubmit: async (e) => {
					e.preventDefault();
					if (!selected || !checkIn || !checkOut) return;
					try {
						const booking = await create.mutateAsync({
							guestName,
							guestPhone,
							guestCount,
							roomId: selected.id,
							checkIn,
							checkOut,
							source: "walk_in",
							notes,
							paid
						});
						toast.success(`Đã tạo đơn ${booking.code}`);
						onOpenChange(false);
						reset();
					} catch {}
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2 sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Ngày ở" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateRangeField, {
									checkIn,
									checkOut: checkOut || void 0,
									onChange: (range) => {
										setCheckIn(range?.checkIn ?? "");
										setCheckOut(range?.checkOut ?? "");
										setRoomId(presetRoomId ? String(presetRoomId) : "");
									}
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "guests",
									children: "Số khách"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "guests",
									type: "number",
									min: 1,
									max: 8,
									value: guestCount,
									onChange: (e) => setGuestCount(Number(e.target.value))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Phòng trống" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: roomId || void 0,
									onValueChange: setRoomId,
									disabled: !ready,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: ready ? avail.isLoading ? "Đang tải…" : "Chọn phòng" : "Chọn ngày trước" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: rooms.map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
										value: String(room.id),
										children: [
											room.number,
											" · ",
											room.type.name,
											" · ",
											formatMoney(room.type.pricePerNight)
										]
									}, room.id)) })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: "Tên khách"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									required: true,
									minLength: 2,
									value: guestName,
									onChange: (e) => setGuestName(e.target.value),
									placeholder: "Nguyễn Văn A"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "phone",
									children: "Điện thoại"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "phone",
									required: true,
									minLength: 8,
									value: guestPhone,
									onChange: (e) => setGuestPhone(e.target.value),
									placeholder: "09xx xxx xxx"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2 sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "notes",
									children: "Ghi chú"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "notes",
									value: notes,
									onChange: (e) => setNotes(e.target.value),
									placeholder: "Yêu cầu gối, giờ đến…"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: paid,
							onChange: (e) => setPaid(e.target.checked),
							className: "size-4 accent-primary"
						}), "Đã thanh toán tại quầy"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-lg bg-muted px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.14em] text-muted-foreground",
								children: "Tạm tính"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl tabular-nums",
								children: total ? formatMoney(total) : "—"
							}),
							nights > 0 && selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									nights,
									" đêm · ",
									selected.type.name
								]
							}) : null
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: !selected || create.isPending || !guestName || !guestPhone,
							children: create.isPending ? "Đang lưu…" : "Tạo đơn"
						})]
					})
				]
			})]
		})
	});
}
//#endregion
export { DialogTitle as a, SelectItem as c, DialogHeader as i, SelectTrigger as l, Dialog as n, Select as o, DialogContent as r, SelectContent as s, BookingDialog as t, SelectValue as u };
