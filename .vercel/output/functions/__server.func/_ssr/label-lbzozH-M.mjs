import { o as __toESM } from "../_runtime.mjs";
import { d as parseISODate, f as todayVN, s as formatISODate } from "./format-w534KtO6.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { g as CalendarRange } from "../_libs/lucide-react.mjs";
import { c as cn, t as Button } from "./shell-BFYCjhug.mjs";
import { t as vi, u as format } from "../_libs/date-fns.mjs";
import { n as vi$1, t as DayPicker } from "../_libs/react-day-picker.mjs";
import { i as Trigger, n as Portal, r as Root2, t as Content2 } from "../_libs/@radix-ui/react-popover+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/label-lbzozH-M.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayPicker, {
		locale: vi$1,
		showOutsideDays,
		className: cn("p-1", className),
		classNames: {
			months: "flex flex-col sm:flex-row gap-4",
			month: "space-y-3",
			month_caption: "flex justify-center pt-1 relative items-center",
			caption_label: "text-sm font-medium font-display",
			nav: "flex items-center gap-1",
			button_previous: "absolute left-1 size-8 rounded-md hover:bg-accent inline-flex items-center justify-center",
			button_next: "absolute right-1 size-8 rounded-md hover:bg-accent inline-flex items-center justify-center",
			month_grid: "w-full border-collapse",
			weekdays: "flex",
			weekday: "text-muted-foreground w-9 font-normal text-xs text-center",
			week: "flex w-full mt-1",
			day: "size-9 text-center text-sm p-0 relative",
			day_button: "size-9 rounded-md p-0 font-normal hover:bg-accent aria-selected:opacity-100",
			selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
			today: "bg-accent text-accent-foreground",
			outside: "text-muted-foreground opacity-40",
			disabled: "text-muted-foreground opacity-40",
			range_middle: "aria-selected:bg-primary/15 aria-selected:text-foreground rounded-none",
			range_start: "rounded-l-md",
			range_end: "rounded-r-md",
			hidden: "invisible",
			...classNames
		},
		...props
	});
}
var Popover = Root2;
var PopoverTrigger = Trigger;
function PopoverContent({ className, align = "center", sideOffset = 6, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		align,
		sideOffset,
		className: cn("z-50 w-auto rounded-xl border border-border bg-popover p-3 text-popover-foreground shadow-border outline-none", className),
		...props
	}) });
}
function DateRangeField({ checkIn, checkOut, onChange, minDate }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const selected = checkIn && checkOut ? {
		from: parseISODate(checkIn),
		to: parseISODate(checkOut)
	} : checkIn ? {
		from: parseISODate(checkIn),
		to: void 0
	} : void 0;
	const min = parseISODate(minDate ?? todayVN());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				className: cn("h-11 w-full justify-start font-normal", !checkIn && "text-muted-foreground"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarRange, { className: "size-4" }), checkIn && checkOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					format(parseISODate(checkIn), "dd MMM yyyy", { locale: vi }),
					" → ",
					format(parseISODate(checkOut), "dd MMM yyyy", { locale: vi })
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Chọn ngày nhận / trả phòng" })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
			className: "w-auto p-3",
			align: "start",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
				mode: "range",
				selected,
				onSelect: (range) => {
					if (range?.from && range?.to && range.from.getTime() !== range.to.getTime()) {
						onChange({
							checkIn: formatISODate(range.from),
							checkOut: formatISODate(range.to)
						});
						setOpen(false);
					} else if (range?.from) onChange({
						checkIn: formatISODate(range.from),
						checkOut: ""
					});
					else onChange(null);
				},
				disabled: { before: min },
				numberOfMonths: 1,
				defaultMonth: selected?.from ?? min
			})
		})]
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-input bg-card px-3 text-sm transition-colors duration-150", "placeholder:text-muted-foreground", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		className: cn("text-sm font-medium leading-none", className),
		...props
	});
}
//#endregion
export { Input as n, Label as r, DateRangeField as t };
