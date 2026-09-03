import { o as __toESM } from "../_runtime.mjs";
import { c as formatMoney, l as formatMoneyCompact, o as formatDateVN } from "./format-w534KtO6.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { b as ArrowUpRight, i as Plus, o as LogOut, s as LogIn } from "../_libs/lucide-react.mjs";
import { s as Shell, t as Button } from "./shell-BFYCjhug.mjs";
import { c as useDashboard, i as useBookingAction, t as Skeleton } from "./skeleton-B-Mlmikd.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-hMW4k6ac.mjs";
import { t as BookingStatusBadge } from "./status-badge-D2WTDjP7.mjs";
import { t as BookingDialog } from "./booking-dialog-HxZGuw93.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dzlk23GS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Kpi({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "rounded-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
			className: "pb-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground",
				children: label
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-3xl tabular-nums tracking-tight",
			children: value
		}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-muted-foreground",
			children: hint
		}) : null] })]
	});
}
function BookingRow({ booking, action }) {
	const mutate = useBookingAction();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex items-center gap-3 border-b border-border py-3 last:border-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-10 shrink-0 items-center justify-center rounded-md bg-muted font-display text-sm",
				children: booking.roomNumber
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-sm font-medium",
					children: booking.guestName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "truncate text-xs text-muted-foreground",
					children: [
						booking.code,
						" · ",
						formatDateVN(booking.checkIn),
						"–",
						formatDateVN(booking.checkOut)
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingStatusBadge, { status: booking.status }),
			action ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: action === "check_out" ? "outline" : "default",
				disabled: mutate.isPending,
				onClick: () => mutate.mutate({
					id: booking.id,
					action
				}),
				children: action === "check_in" ? "Nhận" : "Trả"
			}) : null
		]
	});
}
function Home() {
	const { data, isLoading } = useDashboard();
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		title: "Tổng quan ngày",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			onClick: () => setOpen(true),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden sm:inline",
				children: "Đặt phòng"
			})]
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingDialog, {
			open,
			onOpenChange: setOpen
		}), isLoading || !data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-28 rounded-xl" }, i))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "rounded-xl sm:col-span-2 xl:col-span-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
								className: "pb-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground",
									children: "Công suất đêm nay"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative size-20 shrink-0 rounded-full",
									style: { background: `conic-gradient(var(--color-primary) ${data.occupancy}%, var(--color-muted) 0)` },
									"aria-hidden": true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-1.5 flex items-center justify-center rounded-full bg-card",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-display text-lg tabular-nums",
											children: [data.occupancy, "%"]
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										data.occupied,
										" đang ở · ",
										data.available,
										" trống"
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										data.cleaning,
										" dọn · ",
										data.maintenance,
										" bảo trì"
									] })]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
							label: "Nhận phòng hôm nay",
							value: String(data.arrivals.length),
							hint: formatDateVN(data.today)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
							label: "Trả phòng hôm nay",
							value: String(data.departures.length),
							hint: "Checkout trước 12:00"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
							label: "Doanh thu tháng",
							value: formatMoneyCompact(data.monthRevenue),
							hint: `Đêm nay ~ ${formatMoneyCompact(data.todayRevenue)}`
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "rounded-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
							className: "flex-row items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
								className: "flex items-center gap-2 text-base",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "size-4" }), "Đến hôm nay"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/don",
									children: ["Tất cả ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: data.arrivals.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "py-6 text-sm text-muted-foreground",
							children: "Không có lượt nhận phòng."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: data.arrivals.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingRow, {
							booking: b,
							action: b.status === "confirmed" ? "check_in" : void 0
						}, b.id)) }) })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "rounded-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
							className: "flex-row items-center justify-between",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
								className: "flex items-center gap-2 text-base",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), "Đi hôm nay"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: data.departures.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "py-6 text-sm text-muted-foreground",
							children: "Không có lượt trả phòng."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: data.departures.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingRow, {
							booking: b,
							action: b.status === "checked_in" ? "check_out" : void 0
						}, b.id)) }) })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "rounded-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-base",
						children: "Đơn gần đây"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[36rem] text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-2 font-medium",
										children: "Mã"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-2 font-medium",
										children: "Khách"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-2 font-medium",
										children: "Phòng"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-2 font-medium",
										children: "Ngày"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-2 font-medium",
										children: "Tiền"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-2 font-medium",
										children: "Trạng thái"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: data.recent.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2.5 font-mono text-xs",
										children: b.code
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2.5",
										children: b.guestName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2.5 tabular-nums",
										children: b.roomNumber
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "py-2.5 text-muted-foreground",
										children: [
											formatDateVN(b.checkIn),
											" → ",
											formatDateVN(b.checkOut)
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2.5 tabular-nums",
										children: formatMoney(b.totalAmount)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingStatusBadge, { status: b.status })
									})
								]
							}, b.id)) })]
						})
					})]
				})
			]
		})]
	});
}
//#endregion
export { Home as component };
