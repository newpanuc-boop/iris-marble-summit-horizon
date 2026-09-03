//#region node_modules/.nitro/vite/services/ssr/assets/format-w534KtO6.js
function todayVN() {
	return new Intl.DateTimeFormat("en-CA", {
		timeZone: "Asia/Ho_Chi_Minh",
		year: "numeric",
		month: "2-digit",
		day: "2-digit"
	}).format(/* @__PURE__ */ new Date());
}
function parseISODate(iso) {
	const [y, m, d] = iso.split("-").map(Number);
	return new Date(y, m - 1, d);
}
function formatISODate(date) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function addDays(iso, days) {
	const date = parseISODate(iso);
	date.setDate(date.getDate() + days);
	return formatISODate(date);
}
function nightsBetween(checkIn, checkOut) {
	const a = parseISODate(checkIn).getTime();
	const b = parseISODate(checkOut).getTime();
	return Math.round((b - a) / 864e5);
}
function formatDateVN(iso) {
	return parseISODate(iso).toLocaleDateString("vi-VN", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric"
	});
}
function formatMoney(amount) {
	return new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
		maximumFractionDigits: 0
	}).format(amount);
}
function formatMoneyCompact(amount) {
	if (amount >= 1e6) return `${(amount / 1e6).toLocaleString("vi-VN", { maximumFractionDigits: 1 })} tr`;
	return formatMoney(amount);
}
var ROOM_STATUS_LABEL = {
	available: "Trống",
	occupied: "Đang ở",
	cleaning: "Dọn phòng",
	maintenance: "Bảo trì"
};
var BOOKING_STATUS_LABEL = {
	confirmed: "Đã xác nhận",
	checked_in: "Đang nhận phòng",
	checked_out: "Đã trả phòng",
	cancelled: "Đã hủy"
};
var SOURCE_LABEL = {
	walk_in: "Tại quầy",
	online: "Trực tuyến"
};
function coversDate(checkIn, checkOut, date) {
	return checkIn <= date && date < checkOut;
}
//#endregion
export { coversDate as a, formatMoney as c, parseISODate as d, todayVN as f, addDays as i, formatMoneyCompact as l, ROOM_STATUS_LABEL as n, formatDateVN as o, SOURCE_LABEL as r, formatISODate as s, BOOKING_STATUS_LABEL as t, nightsBetween as u };
