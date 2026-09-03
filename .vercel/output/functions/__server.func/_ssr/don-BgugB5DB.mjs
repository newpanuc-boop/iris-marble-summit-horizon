import { o as __toESM } from "../_runtime.mjs";
import { c as formatMoney, o as formatDateVN, r as SOURCE_LABEL, t as BOOKING_STATUS_LABEL } from "./format-w534KtO6.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as Plus, r as Search } from "../_libs/lucide-react.mjs";
import { s as Shell, t as Button } from "./shell-BFYCjhug.mjs";
import { a as useBookings, i as useBookingAction, t as Skeleton } from "./skeleton-B-Mlmikd.mjs";
import { n as Input } from "./label-lbzozH-M.mjs";
import { t as BookingStatusBadge } from "./status-badge-D2WTDjP7.mjs";
import { t as BookingDialog } from "./booking-dialog-HxZGuw93.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/don-BgugB5DB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	{
		id: "all",
		label: "Tất cả"
	},
	{
		id: "confirmed",
		label: "Xác nhận"
	},
	{
		id: "checked_in",
		label: "Đang ở"
	},
	{
		id: "checked_out",
		label: "Đã trả"
	},
	{
		id: "cancelled",
		label: "Hủy"
	}
];
function Actions({ booking }) {
	const act = useBookingAction();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap gap-2",
		children: [
			booking.status === "confirmed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				disabled: act.isPending,
				onClick: () => act.mutate({
					id: booking.id,
					action: "check_in"
				}),
				children: "Nhận phòng"
			}) : null,
			booking.status === "checked_in" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				disabled: act.isPending,
				onClick: () => act.mutate({
					id: booking.id,
					action: "check_out"
				}),
				children: "Trả phòng"
			}) : null,
			booking.status === "confirmed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "outline",
				disabled: act.isPending,
				onClick: () => act.mutate({
					id: booking.id,
					action: "cancel"
				}),
				children: "Hủy"
			}) : null,
			!booking.paid && booking.status !== "cancelled" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "ghost",
				disabled: act.isPending,
				onClick: () => act.mutate({
					id: booking.id,
					action: "mark_paid"
				}),
				children: "Đánh dấu đã thu"
			}) : null
		]
	});
}
function BookingsPage() {
	const { data, isLoading } = useBookings();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const list = (0, import_react.useMemo)(() => {
		let rows = data ?? [];
		if (filter !== "all") rows = rows.filter((b) => b.status === filter);
		const needle = q.trim().toLowerCase();
		if (needle) rows = rows.filter((b) => b.code.toLowerCase().includes(needle) || b.guestName.toLowerCase().includes(needle) || b.roomNumber.includes(needle) || b.guestPhone.includes(needle));
		return rows;
	}, [
		data,
		filter,
		q
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		title: "Đơn đặt phòng",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			onClick: () => setOpen(true),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden sm:inline",
				children: "Đơn mới"
			})]
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingDialog, {
				open,
				onOpenChange: setOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex flex-col gap-3 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "pl-9",
						placeholder: "Tìm mã đơn, tên, số phòng…",
						value: q,
						onChange: (e) => setQ(e.target.value)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: filter === f.id ? "default" : "outline",
						onClick: () => setFilter(f.id),
						children: f.label
					}, f.id))
				})]
			}),
			isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-2",
				children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-20 rounded-xl" }, i))
			}) : list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-16 text-center text-sm text-muted-foreground",
				children: "Không có đơn phù hợp."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden overflow-x-auto md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[52rem] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 font-medium",
								children: "Mã"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 font-medium",
								children: "Khách"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 font-medium",
								children: "Phòng"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 font-medium",
								children: "Ở"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 font-medium",
								children: "Tiền"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 font-medium",
								children: "Nguồn"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 font-medium",
								children: "Trạng thái"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 font-medium",
								children: "Thao tác"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: list.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border align-top",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 font-mono text-xs",
								children: b.code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: b.guestName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										b.guestPhone,
										" · ",
										b.guestCount,
										" khách"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "py-3",
								children: [b.roomNumber, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: b.roomTypeName
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "py-3 text-muted-foreground",
								children: [
									formatDateVN(b.checkIn),
									" → ",
									formatDateVN(b.checkOut),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs",
										children: [b.nights, " đêm"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "py-3 tabular-nums",
								children: [formatMoney(b.totalAmount), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: b.paid ? "Đã thu" : "Chưa thu"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3",
								children: SOURCE_LABEL[b.source]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingStatusBadge, { status: b.status })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Actions, { booking: b })
							})
						]
					}, b.id)) })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-3 md:hidden",
				children: list.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl bg-card p-4 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: b.guestName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-muted-foreground",
								children: b.code
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingStatusBadge, { status: b.status })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: [
								"Phòng ",
								b.roomNumber,
								" · ",
								formatDateVN(b.checkIn),
								" → ",
								formatDateVN(b.checkOut)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm tabular-nums",
							children: [
								formatMoney(b.totalAmount),
								" · ",
								b.paid ? "Đã thu" : "Chưa thu"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Actions, { booking: b })
						})
					]
				}, b.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sr-only",
				children: BOOKING_STATUS_LABEL.confirmed
			})
		]
	});
}
//#endregion
export { BookingsPage as component };
