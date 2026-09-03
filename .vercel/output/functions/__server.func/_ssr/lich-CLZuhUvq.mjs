import { o as __toESM } from "../_runtime.mjs";
import { f as todayVN, i as addDays, o as formatDateVN } from "./format-w534KtO6.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { d as ChevronRight, f as ChevronLeft } from "../_libs/lucide-react.mjs";
import { c as cn, s as Shell, t as Button } from "./shell-BFYCjhug.mjs";
import { o as useCalendar, t as Skeleton } from "./skeleton-B-Mlmikd.mjs";
import { n as RoomStatusBadge } from "./status-badge-D2WTDjP7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lich-CLZuhUvq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CalendarPage() {
	const [start, setStart] = (0, import_react.useState)(todayVN());
	const { data, isLoading } = useCalendar(start);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		title: "Lịch phòng",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "icon",
					"aria-label": "Lùi 7 ngày",
					onClick: () => setStart(addDays(start, -7)),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => setStart(todayVN()),
					children: "Hôm nay"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "icon",
					"aria-label": "Tới 7 ngày",
					onClick: () => setStart(addDays(start, 7)),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
				})
			]
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-4 text-sm text-muted-foreground",
			children: [
				"14 đêm từ ",
				formatDateVN(start),
				". Thanh màu thông phòng đang giữ hoặc đang ở."
			]
		}), isLoading || !data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-96 rounded-xl" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-xl bg-card shadow-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "min-w-[56rem] border-collapse text-left text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "sticky left-0 z-10 w-28 bg-card px-3 py-3 font-medium",
						children: "Phòng"
					}), data.days.map((d) => {
						const isToday = d === todayVN();
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
							className: cn("px-1 py-3 text-center font-medium", isToday && "text-primary"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[10px] uppercase tracking-wide text-muted-foreground",
								children: (/* @__PURE__ */ new Date(d + "T00:00:00")).toLocaleDateString("vi-VN", { weekday: "narrow" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: d.slice(8)
							})]
						}, d);
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: data.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border last:border-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						className: "sticky left-0 z-10 bg-card px-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm",
							children: row.room.number
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomStatusBadge, { status: row.room.status })]
					}), row.cells.map((cell, i) => {
						if (cell.booking && !cell.booking.isStart) return null;
						if (cell.booking?.isStart) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: cell.booking.span,
							className: "px-0.5 py-1.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("truncate rounded-md px-2 py-1.5 text-[11px] text-primary-foreground", cell.booking.status === "checked_in" ? "bg-ink" : "bg-primary"),
								title: `${cell.booking.code} · ${cell.booking.guestName}`,
								children: cell.booking.guestName
							})
						}, cell.date);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { className: cn("h-10 border-l border-border/60", i === 0 && "border-l-0") }, cell.date);
					})]
				}, row.room.id)) })]
			})
		})]
	});
}
//#endregion
export { CalendarPage as component };
