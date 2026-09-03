import { o as __toESM } from "../_runtime.mjs";
import { c as formatMoney, o as formatDateVN, u as nightsBetween } from "./format-w534KtO6.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as Search } from "../_libs/lucide-react.mjs";
import { n as GuestChrome, t as Button } from "./shell-BFYCjhug.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as useRoomTypes, l as useLookup, r as useAvailability, s as useCreateBooking, t as Skeleton } from "./skeleton-B-Mlmikd.mjs";
import { n as CardContent, t as Card } from "./card-hMW4k6ac.mjs";
import { n as Input, r as Label, t as DateRangeField } from "./label-lbzozH-M.mjs";
import { t as BookingStatusBadge } from "./status-badge-D2WTDjP7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dat-phong-ShV2ph_S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GuestPage() {
	const types = useRoomTypes();
	const [checkIn, setCheckIn] = (0, import_react.useState)("");
	const [checkOut, setCheckOut] = (0, import_react.useState)("");
	const [guests, setGuests] = (0, import_react.useState)(2);
	const [searched, setSearched] = (0, import_react.useState)(false);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [code, setCode] = (0, import_react.useState)("");
	const ready = Boolean(checkIn && checkOut && nightsBetween(checkIn, checkOut) >= 1);
	const avail = useAvailability(checkIn, checkOut, guests, searched && ready);
	const create = useCreateBooking();
	const nights = ready ? nightsBetween(checkIn, checkOut) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GuestChrome, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/hotel/courtyard.jpg",
				alt: "Sân trong khách sạn An Viên",
				className: "h-[min(72vw,28rem)] w-full object-cover md:h-[32rem]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/25 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 px-4 pb-8 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.22em] text-primary-foreground/80",
					children: "Hội An · Boutique hotel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 max-w-xl font-display text-4xl font-medium tracking-tight text-primary-foreground md:text-5xl",
					children: "Ở chậm, trong một sân vườn."
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-4 py-8 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-3 rounded-xl bg-card p-4 shadow-border md:grid-cols-12 md:items-end",
				onSubmit: (e) => {
					e.preventDefault();
					if (!ready) {
						toast.error("Chọn ngày nhận và trả phòng.");
						return;
					}
					setSearched(true);
					setPicked(null);
					setCode("");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 md:col-span-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Ngày ở" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateRangeField, {
							checkIn,
							checkOut: checkOut || void 0,
							onChange: (range) => {
								setCheckIn(range?.checkIn ?? "");
								setCheckOut(range?.checkOut ?? "");
								setSearched(false);
							}
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 md:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "g",
							children: "Số khách"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "g",
							type: "number",
							min: 1,
							max: 8,
							value: guests,
							onChange: (e) => setGuests(Number(e.target.value))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						className: "md:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }), "Tìm phòng"]
					})
				]
			}),
			code ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "mt-8 rounded-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "p-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
							children: "Đặt phòng thành công"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-4xl tracking-tight",
							children: code
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Lưu mã này để tra cứu hoặc xuất trình khi nhận phòng."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4",
							variant: "outline",
							onClick: () => setCode(""),
							children: "Đặt thêm"
						})
					]
				})
			}) : picked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 grid gap-6 rounded-xl bg-card p-5 shadow-border md:grid-cols-2",
				onSubmit: async (e) => {
					e.preventDefault();
					try {
						const booking = await create.mutateAsync({
							guestName: name,
							guestPhone: phone,
							guestCount: guests,
							roomId: picked.id,
							checkIn,
							checkOut,
							source: "online"
						});
						setCode(booking.code);
						setPicked(null);
					} catch {}
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: picked.type.image,
					alt: picked.type.name,
					className: "aspect-[3/2] w-full rounded-lg object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-2xl",
							children: [
								picked.type.name,
								" · ",
								picked.number
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: picked.type.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl tabular-nums",
							children: formatMoney(nights * picked.type.pricePerNight)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								nights,
								" đêm · ",
								formatMoney(picked.type.pricePerNight),
								"/đêm"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "n",
								children: "Họ tên"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "n",
								required: true,
								minLength: 2,
								value: name,
								onChange: (e) => setName(e.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "p",
								children: "Điện thoại"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "p",
								required: true,
								minLength: 8,
								value: phone,
								onChange: (e) => setPhone(e.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								onClick: () => setPicked(null),
								children: "Quay lại"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								disabled: create.isPending,
								children: create.isPending ? "Đang giữ phòng…" : "Xác nhận đặt"
							})]
						})
					]
				})]
			}) : searched ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Phòng còn trống"
				}), avail.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-4 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-56 rounded-xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-56 rounded-xl" })]
				}) : (avail.data ?? []).length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "Không còn phòng phù hợp. Thử đổi ngày hoặc giảm số khách."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-4 md:grid-cols-2",
					children: (avail.data ?? []).map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setPicked(room),
						className: "overflow-hidden rounded-xl bg-card text-left shadow-border transition-colors duration-150 hover:bg-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: room.type.image,
							alt: "",
							className: "aspect-[3/2] w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-lg",
									children: [
										room.type.name,
										" · ",
										room.number
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 line-clamp-2 text-sm text-muted-foreground",
									children: room.type.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 font-display text-xl tabular-nums",
									children: [formatMoney(room.type.pricePerNight), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-1 text-sm font-sans text-muted-foreground",
										children: "/ đêm"
									})]
								})
							]
						})]
					}, room.id))
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Hạng phòng"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-4 md:grid-cols-2",
					children: (types.data ?? []).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "overflow-hidden rounded-xl bg-card shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: t.image,
							alt: t.name,
							className: "aspect-[3/2] w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl",
									children: t.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: t.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-sm",
									children: [
										t.capacity,
										" khách · ",
										formatMoney(t.pricePerNight),
										"/đêm"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: t.amenities.join(" · ")
								})
							]
						})]
					}, t.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LookupSection, {})
		]
	})] });
}
function LookupSection() {
	const [value, setValue] = (0, import_react.useState)("");
	const [code, setCode] = (0, import_react.useState)("");
	const lookup = useLookup(code, code.length >= 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-14 border-t border-border pt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Tra cứu đơn"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Nhập mã nhận được khi đặt (ví dụ AV-2403)."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-4 flex gap-2",
				onSubmit: (e) => {
					e.preventDefault();
					setCode(value.trim().toUpperCase());
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value,
					onChange: (e) => setValue(e.target.value.toUpperCase()),
					placeholder: "AV-2403",
					className: "max-w-xs font-mono"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					variant: "outline",
					children: "Tra cứu"
				})]
			}),
			code && lookup.isFetched ? lookup.data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "mt-4 rounded-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "flex flex-col gap-2 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono",
								children: lookup.data.code
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingStatusBadge, { status: lookup.data.status })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm",
							children: [
								"Phòng ",
								lookup.data.roomNumber,
								" · ",
								lookup.data.roomTypeName
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								formatDateVN(lookup.data.checkIn),
								" → ",
								formatDateVN(lookup.data.checkOut),
								" · ",
								lookup.data.nights,
								" đêm"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "tabular-nums text-sm",
							children: formatMoney(lookup.data.totalAmount)
						})
					]
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "Không tìm thấy mã này."
			}) : null
		]
	});
}
//#endregion
export { GuestPage as component };
