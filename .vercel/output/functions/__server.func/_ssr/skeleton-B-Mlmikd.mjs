import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { c as cn } from "./shell-BFYCjhug.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as object, i as number, n as boolean, o as string, t as _enum } from "../_libs/zod.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skeleton-B-Mlmikd.js
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var dateStr = string().regex(/^\d{4}-\d{2}-\d{2}$/);
var listRoomTypes = createServerFn({ method: "GET" }).handler(createSsrRpc("f13037bb5c3851031a0d4038b4fb69858f8c70f568feb701682c8046cc513fc4"));
var listRooms = createServerFn({ method: "GET" }).handler(createSsrRpc("53f980e7b514cdf019e68722ce12be0eb6fa80a8fede76a0c0c2186bdd6f153f"));
var listBookings = createServerFn({ method: "GET" }).handler(createSsrRpc("73232b0d7dfc654509570ebe6b309d9e2045d9d9d34770854438da1946f28fb7"));
var getDashboard = createServerFn({ method: "GET" }).handler(createSsrRpc("08431f70631fdbdcaecdf97250efa414d51de66ea5ded224d32a80f888d9d734"));
var getAvailability = createServerFn({ method: "GET" }).validator(object({
	checkIn: dateStr,
	checkOut: dateStr,
	guests: number().int().min(1).max(8).optional()
})).handler(createSsrRpc("7d30319223954a041c6faa4749a734611bb1c7aa8c2036300bb7c2c8d9f5485c"));
var lookupBooking = createServerFn({ method: "GET" }).validator(object({ code: string().min(4).max(16) })).handler(createSsrRpc("9b8410c4a1ea1319475bd8a06cabb43f741f20e8a8b23c824f2d9ac8a4191e15"));
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
})).handler(createSsrRpc("5e16c1d270f4de8c5a9ead5f3a4cbbaf143d64ee273e238f469b88206d7d06b0"));
var updateBookingStatus = createServerFn({ method: "POST" }).validator(object({
	id: number().int(),
	action: _enum([
		"check_in",
		"check_out",
		"cancel",
		"mark_paid"
	])
})).handler(createSsrRpc("44ce17bc0d88262ac3ceda27d1d606c8641fb975ba5ab458c713acd24e7daaf5"));
var updateRoomStatus = createServerFn({ method: "POST" }).validator(object({
	id: number().int(),
	status: _enum([
		"available",
		"occupied",
		"cleaning",
		"maintenance"
	]),
	notes: string().max(200).optional()
})).handler(createSsrRpc("5e14cf775ad9937c68d03d704a6aba99e150eed02a9f8809022f97cf45747efa"));
var createRoom = createServerFn({ method: "POST" }).validator(object({
	number: string().trim().min(1).max(8),
	floor: number().int().min(1).max(12),
	typeId: number().int()
})).handler(createSsrRpc("c67fc8a05aa3c6e6632d974ce96925a5b49baf5030f43dc24e67ed5b2e4cc5f7"));
var getCalendar = createServerFn({ method: "GET" }).validator(object({ start: dateStr.optional() })).handler(createSsrRpc("026909af9bd915360c3a6f071988df1972ccaf00b0afae06af73bafc0ed32fd1"));
var getReports = createServerFn({ method: "GET" }).handler(createSsrRpc("6b6e39dc33462c001698a8d980dfa96a969940d568a437898d0b45c4f91265a7"));
var hotelKeys = {
	all: ["hotel"],
	dashboard: ["hotel", "dashboard"],
	rooms: ["hotel", "rooms"],
	types: ["hotel", "types"],
	bookings: ["hotel", "bookings"],
	reports: ["hotel", "reports"],
	calendar: (start) => [
		"hotel",
		"calendar",
		start ?? "today"
	],
	availability: (checkIn, checkOut, guests) => [
		"hotel",
		"availability",
		checkIn,
		checkOut,
		guests
	]
};
function useInvalidateHotel() {
	const qc = useQueryClient();
	return () => qc.invalidateQueries({ queryKey: hotelKeys.all });
}
function useDashboard() {
	return useQuery({
		queryKey: hotelKeys.dashboard,
		queryFn: () => getDashboard()
	});
}
function useRooms() {
	return useQuery({
		queryKey: hotelKeys.rooms,
		queryFn: () => listRooms()
	});
}
function useRoomTypes() {
	return useQuery({
		queryKey: hotelKeys.types,
		queryFn: () => listRoomTypes()
	});
}
function useBookings() {
	return useQuery({
		queryKey: hotelKeys.bookings,
		queryFn: () => listBookings()
	});
}
function useReports() {
	return useQuery({
		queryKey: hotelKeys.reports,
		queryFn: () => getReports()
	});
}
function useCalendar(start) {
	return useQuery({
		queryKey: hotelKeys.calendar(start),
		queryFn: () => getCalendar({ data: { start } })
	});
}
function useAvailability(checkIn, checkOut, guests, enabled) {
	return useQuery({
		queryKey: hotelKeys.availability(checkIn, checkOut, guests),
		queryFn: () => getAvailability({ data: {
			checkIn,
			checkOut,
			guests
		} }),
		enabled
	});
}
function useLookup(code, enabled) {
	return useQuery({
		queryKey: [
			"hotel",
			"lookup",
			code
		],
		queryFn: () => lookupBooking({ data: { code } }),
		enabled
	});
}
function useBookingAction() {
	const invalidate = useInvalidateHotel();
	return useMutation({
		mutationFn: (input) => updateBookingStatus({ data: input }),
		onSuccess: () => {
			invalidate();
		},
		onError: (err) => toast.error(err.message)
	});
}
function useCreateBooking() {
	const invalidate = useInvalidateHotel();
	return useMutation({
		mutationFn: (input) => createBooking({ data: input }),
		onSuccess: () => invalidate(),
		onError: (err) => toast.error(err.message)
	});
}
function useRoomAction() {
	const invalidate = useInvalidateHotel();
	return useMutation({
		mutationFn: (input) => updateRoomStatus({ data: input }),
		onSuccess: () => {
			invalidate();
			toast.success("Đã cập nhật phòng");
		},
		onError: (err) => toast.error(err.message)
	});
}
function useAddRoom() {
	const invalidate = useInvalidateHotel();
	return useMutation({
		mutationFn: (input) => createRoom({ data: input }),
		onSuccess: () => {
			invalidate();
			toast.success("Đã thêm phòng");
		},
		onError: (err) => toast.error(err.message)
	});
}
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("animate-pulse rounded-md bg-muted", className),
		...props
	});
}
//#endregion
export { useBookings as a, useDashboard as c, useRoomAction as d, useRoomTypes as f, useBookingAction as i, useLookup as l, useAddRoom as n, useCalendar as o, useRooms as p, useAvailability as r, useCreateBooking as s, Skeleton as t, useReports as u };
