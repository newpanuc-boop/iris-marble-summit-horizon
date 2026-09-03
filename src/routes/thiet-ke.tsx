import { createFileRoute, Link } from "@tanstack/react-router";
import { GuestChrome } from "@/components/hotel/shell";

export const Route = createFileRoute("/thiet-ke")({ component: DesignPage });

function DesignPage() {
  return (
    <GuestChrome>
      <article className="mx-auto max-w-3xl px-4 py-10 md:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Công nghệ phần mềm · CNTT
        </p>
        <h1 className="mt-2 font-display text-4xl font-medium tracking-tight">
          Thiết kế phần mềm Quản lý đặt phòng khách sạn
        </h1>
        <p className="mt-3 text-muted-foreground">
          Đồ án minh họa cho khách sạn boutique An Viên: hai cổng (khách và lễ tân),
          một mô hình dữ liệu, các ràng buộc nghiệp vụ nhận/trả phòng.
        </p>

        <section className="mt-10">
          <h2 className="font-display text-2xl">1. Mục tiêu</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed">
            <li>Ghi nhận đặt phòng trực tuyến và walk-in, tránh chồng lịch cùng phòng.</li>
            <li>Hỗ trợ lễ tân nhận phòng, trả phòng, chuyển trạng thái buồng (dọn / bảo trì).</li>
            <li>Cho quản lý nhìn công suất, doanh thu tháng, lịch 14 ngày.</li>
            <li>Khách tự tìm phòng trống, giữ chỗ, nhận mã đơn để tra cứu.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl">2. Tác nhân</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              ["Khách", "Tìm phòng, đặt, tra cứu mã."],
              ["Lễ tân", "Sơ đồ phòng, đơn, nhận/trả, walk-in."],
              ["Quản lý", "Tổng quan, báo cáo, thêm phòng."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-xl bg-card p-4 shadow-border">
                <p className="font-display text-lg">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl">3. Phân hệ chức năng</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
            <li>
              <span className="font-medium">Danh mục phòng</span> — hạng phòng, số phòng, tầng, trạng thái
              buồng phòng (trống / đang ở / dọn / bảo trì).
            </li>
            <li>
              <span className="font-medium">Đặt phòng</span> — online và tại quầy; sinh mã AV-xxxx; tính tiền
              theo đêm × đơn giá hạng.
            </li>
            <li>
              <span className="font-medium">Nhận / trả phòng</span> — đổi trạng thái đơn và phòng; trả phòng
              chuyển sang dọn.
            </li>
            <li>
              <span className="font-medium">Lịch phòng</span> — sơ đồ Gantt 14 ngày, thanh đơn chồng lên đêm.
            </li>
            <li>
              <span className="font-medium">Báo cáo</span> — công suất, doanh thu tháng, tỷ lệ hủy, lưu trú TB.
            </li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl">4. Use case</h2>
          <pre className="mt-4 overflow-x-auto rounded-xl bg-card p-4 text-xs leading-relaxed shadow-border">{`Khách
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
  └─ UC21 Thêm phòng vào danh mục`}</pre>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl">5. Mô hình dữ liệu</h2>
          <div className="mt-4 overflow-x-auto rounded-xl bg-card p-4 shadow-border">
            <pre className="text-xs leading-relaxed">{`room_types 1 ──< rooms 1 ──< bookings

room_types (id, code, name, capacity, price_per_night, amenities…)
rooms      (id, number, floor, type_id, status, notes)
bookings   (id, code, guest_name, guest_phone, guest_count,
            room_id, check_in, check_out, status,
            total_amount, paid, source, notes, created_at)

status phòng:   available | occupied | cleaning | maintenance
status đơn:     confirmed | checked_in | checked_out | cancelled
source:         walk_in | online`}</pre>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl">6. Quy trình nghiệp vụ</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
            <li>Khách chọn khoảng ngày (check-out không tính đêm cuối). Hệ thống lọc phòng không bảo trì và không chồng lịch với đơn confirmed / checked_in.</li>
            <li>Tạo đơn → status = confirmed, tính total = số đêm × đơn giá hạng.</li>
            <li>Nhận phòng (từ ngày check-in): đơn → checked_in, phòng → occupied, đánh dấu đã thu.</li>
            <li>Trả phòng: đơn → checked_out, phòng → cleaning. Buồng phòng bấm «Đã dọn xong» → available.</li>
            <li>Hủy chỉ khi đơn còn confirmed.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl">7. Ràng buộc</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed">
            <li>
              Hai đơn blocking không được giao nhau trên cùng room_id: check_in_A trước check_out_B
              và check_in_B trước check_out_A.
            </li>
            <li>Số khách ≤ capacity của hạng phòng.</li>
            <li>Không đặt ngày trong quá khứ; số đêm ≥ 1.</li>
            <li>Không nhận phòng nếu phòng đang bảo trì hoặc chưa tới ngày nhận.</li>
            <li>Mã đơn duy nhất (AV- + 4 số).</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl">8. Bản đồ màn hình</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed">
            <li>
              <Link to="/" className="underline underline-offset-4">
                Tổng quan
              </Link>{" "}
              — KPI, đến/đi hôm nay, thao tác nhận/trả nhanh.
            </li>
            <li>
              <Link to="/phong" className="underline underline-offset-4">
                Sơ đồ phòng
              </Link>{" "}
              — theo tầng, màu trạng thái.
            </li>
            <li>
              <Link to="/don" className="underline underline-offset-4">
                Đơn đặt
              </Link>{" "}
              — lọc, tìm, walk-in.
            </li>
            <li>
              <Link to="/lich" className="underline underline-offset-4">
                Lịch phòng
              </Link>{" "}
              — 14 đêm.
            </li>
            <li>
              <Link to="/bao-cao" className="underline underline-offset-4">
                Báo cáo
              </Link>{" "}
              — biểu đồ công suất.
            </li>
            <li>
              <Link to="/dat-phong" className="underline underline-offset-4">
                Cổng khách
              </Link>{" "}
              — tìm, đặt, tra cứu mã.
            </li>
          </ul>
        </section>

        <section className="mt-10 mb-8">
          <h2 className="font-display text-2xl">9. Phi chức năng</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed">
            <li>Giao diện tiếng Việt, tiền VND, múi giờ Asia/Ho_Chi_Minh.</li>
            <li>Bố cục dùng được trên điện thoại (thanh điều hướng dưới).</li>
            <li>Dữ liệu demo dùng tên giả lập cho bài tập — không dùng cho vận hành thật.</li>
          </ul>
        </section>
      </article>
    </GuestChrome>
  );
}
