import { n as ROOM_STATUS_LABEL, t as BOOKING_STATUS_LABEL } from "./format-w534KtO6.mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { c as cn } from "./shell-BFYCjhug.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/status-badge-D2WTDjP7.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground",
		secondary: "bg-secondary text-secondary-foreground",
		outline: "border border-border text-foreground",
		available: "bg-primary/10 text-primary",
		occupied: "bg-ink/10 text-ink",
		cleaning: "bg-clay/15 text-clay",
		maintenance: "bg-destructive/10 text-destructive",
		confirmed: "bg-primary/10 text-primary",
		checked_in: "bg-ink/10 text-ink",
		checked_out: "bg-muted text-muted-foreground",
		cancelled: "bg-muted text-muted-foreground line-through decoration-from-font"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function RoomStatusBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: status,
		children: ROOM_STATUS_LABEL[status]
	});
}
function BookingStatusBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: status,
		children: BOOKING_STATUS_LABEL[status]
	});
}
//#endregion
export { RoomStatusBadge as n, BookingStatusBadge as t };
