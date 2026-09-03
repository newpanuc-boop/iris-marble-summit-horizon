import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as GuestChrome } from "./shell-BFYCjhug.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/thiet-ke-DNz2GMQX.js
var import_jsx_runtime = require_jsx_runtime();
function DesignPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuestChrome, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-10 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground",
				children: "Công nghệ phần mềm · CNTT"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-medium tracking-tight",
				children: "Thiết kế phần mềm Quản lý đặt phòng khách sạn"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground",
				children: "Đồ án minh họa cho khách sạn boutique An Viên: hai cổng (khách và lễ tân), một mô hình dữ liệu, các ràng buộc nghiệp vụ nhận/trả phòng."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "1. Mục tiêu"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Ghi nhận đặt phòng trực tuyến và walk-in, tránh chồng lịch cùng phòng." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Hỗ trợ lễ tân nhận phòng, trả phòng, chuyển trạng thái buồng (dọn / bảo trì)." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Cho quản lý nhìn công suất, doanh thu tháng, lịch 14 ngày." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Khách tự tìm phòng trống, giữ chỗ, nhận mã đơn để tra cứu." })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "2. Tác nhân"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3 sm:grid-cols-3",
					children: [
						["Khách", "Tìm phòng, đặt, tra cứu mã."],
						["Lễ tân", "Sơ đồ phòng, đơn, nhận/trả, walk-in."],
						["Quản lý", "Tổng quan, báo cáo, thêm phòng."]
					].map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-card p-4 shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: body
						})]
					}, title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "3. Phân hệ chức năng"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "Danh mục phòng"
						}), " — hạng phòng, số phòng, tầng, trạng thái buồng phòng (trống / đang ở / dọn / bảo trì)."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "Đặt phòng"
						}), " — online và tại quầy; sinh mã AV-xxxx; tính tiền theo đêm × đơn giá hạng."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "Nhận / trả phòng"
						}), " — đổi trạng thái đơn và phòng; trả phòng chuyển sang dọn."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "Lịch phòng"
						}), " — sơ đồ Gantt 14 ngày, thanh đơn chồng lên đêm."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "Báo cáo"
						}), " — công suất, doanh thu tháng, tỷ lệ hủy, lưu trú TB."] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "4. Use case"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-4 overflow-x-auto rounded-xl bg-card p-4 text-xs leading-relaxed shadow-border",
					children: `Khách
  ├─ UC01 Tìm phòng trống theo ngày
  ├─ UC02 Đặt phòng trực tuyến
  └─ UC03 Tra cứu đơn theo mã

Lễ tân
  ├─ UC10 Xem tổng quan ngày (đến / đi / công suất)
  ├─ UC11 Tạo đơn walk-in
  ├─ UC12 Nhận phòng
  ├─ UC13 Trả phòng
  ├─ UC14 Hủy đơn chưa nhận
  ├─ UC15 Đổi trạng thái phòng (dọn xong, bảo trì)
  └─ UC16 Xem lịch 14 ngày

Quản lý
  ├─ UC20 Xem báo cáo doanh thu / công suất
  └─ UC21 Thêm phòng vào danh mục`
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "5. Mô hình dữ liệu"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 overflow-x-auto rounded-xl bg-card p-4 shadow-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "text-xs leading-relaxed",
						children: `room_types 1 ──< rooms 1 ──< bookings

room_types (id, code, name, capacity, price_per_night, amenities…)
rooms      (id, number, floor, type_id, status, notes)
bookings   (id, code, guest_name, guest_phone, guest_count,
            room_id, check_in, check_out, status,
            total_amount, paid, source, notes, created_at)

status phòng:   available | occupied | cleaning | maintenance
status đơn:     confirmed | checked_in | checked_out | cancelled
source:         walk_in | online`
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "6. Quy trình nghiệp vụ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Khách chọn khoảng ngày (check-out không tính đêm cuối). Hệ thống lọc phòng không bảo trì và không chồng lịch với đơn confirmed / checked_in." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tạo đơn → status = confirmed, tính total = số đêm × đơn giá hạng." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Nhận phòng (từ ngày check-in): đơn → checked_in, phòng → occupied, đánh dấu đã thu." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Trả phòng: đơn → checked_out, phòng → cleaning. Buồng phòng bấm «Đã dọn xong» → available." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Hủy chỉ khi đơn còn confirmed." })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "7. Ràng buộc"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Hai đơn blocking không được giao nhau trên cùng room_id: check_in_A trước check_out_B và check_in_B trước check_out_A." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Số khách ≤ capacity của hạng phòng." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Không đặt ngày trong quá khứ; số đêm ≥ 1." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Không nhận phòng nếu phòng đang bảo trì hoặc chưa tới ngày nhận." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Mã đơn duy nhất (AV- + 4 số)." })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "8. Bản đồ màn hình"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "underline underline-offset-4",
								children: "Tổng quan"
							}),
							" ",
							"— KPI, đến/đi hôm nay, thao tác nhận/trả nhanh."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/phong",
								className: "underline underline-offset-4",
								children: "Sơ đồ phòng"
							}),
							" ",
							"— theo tầng, màu trạng thái."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/don",
								className: "underline underline-offset-4",
								children: "Đơn đặt"
							}),
							" ",
							"— lọc, tìm, walk-in."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/lich",
								className: "underline underline-offset-4",
								children: "Lịch phòng"
							}),
							" ",
							"— 14 đêm."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/bao-cao",
								className: "underline underline-offset-4",
								children: "Báo cáo"
							}),
							" ",
							"— biểu đồ công suất."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dat-phong",
								className: "underline underline-offset-4",
								children: "Cổng khách"
							}),
							" ",
							"— tìm, đặt, tra cứu mã."
						] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "9. Phi chức năng"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Giao diện tiếng Việt, tiền VND, múi giờ Asia/Ho_Chi_Minh." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Bố cục dùng được trên điện thoại (thanh điều hướng dưới)." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Dữ liệu demo dùng tên giả lập cho bài tập — không dùng cho vận hành thật." })
					]
				})]
			})
		]
	}) });
}
//#endregion
export { DesignPage as component };
