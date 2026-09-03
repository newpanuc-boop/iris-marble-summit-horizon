create table if not exists room_types (
  id               serial primary key,
  code             text not null unique,
  name             text not null,
  description      text not null,
  capacity         int not null,
  price_per_night  numeric(12, 0) not null,
  image            text not null,
  amenities        text not null
);

create table if not exists rooms (
  id         serial primary key,
  number     text not null unique,
  floor      int not null,
  type_id    int not null references room_types(id),
  status     text not null default 'available',
  notes      text not null default ''
);

create table if not exists bookings (
  id            serial primary key,
  code          text not null unique,
  guest_name    text not null,
  guest_phone   text not null,
  guest_count   int not null,
  room_id       int not null references rooms(id),
  check_in      date not null,
  check_out     date not null,
  status        text not null default 'confirmed',
  total_amount  numeric(12, 0) not null,
  paid          boolean not null default false,
  source        text not null default 'walk_in',
  notes         text not null default '',
  created_at    timestamptz not null default now()
);

create index if not exists bookings_room_dates_idx on bookings (room_id, check_in, check_out);
create index if not exists bookings_status_idx on bookings (status);
create index if not exists bookings_check_in_idx on bookings (check_in);
create index if not exists rooms_floor_idx on rooms (floor);

insert into room_types (id, code, name, description, capacity, price_per_night, image, amenities)
values
  (1, 'standard', 'Phòng Tiêu chuẩn',
   'Hai giường đơn, cửa sổ chớp thông thoáng, phù hợp khách công tác hoặc bạn đồng hành.',
   2, 1290000, '/hotel/standard.jpg',
   'Wifi, Điều hòa, Nước khoáng, Máy sấy'),
  (2, 'deluxe', 'Phòng Deluxe',
   'Giường đôi king, bàn viết, cửa sổ nhìn ra sân trong — ánh sáng chiều vàng.',
   2, 1890000, '/hotel/deluxe.jpg',
   'Wifi, Điều hòa, Mini bar, Bồn tắm đứng, Áo choàng'),
  (3, 'family', 'Phòng Gia đình',
   'Giường lớn kèm daybed, bàn tròn, cửa sổ ra cây xanh — đủ chỗ cho bốn người.',
   4, 2490000, '/hotel/family.jpg',
   'Wifi, Điều hòa, Mini bar, Nôi trẻ em theo yêu cầu'),
  (4, 'suite', 'Suite Hướng vườn',
   'Phòng rộng mở ra sân riêng, ghế mây, chậu đá — ở chậm vài ngày.',
   3, 2890000, '/hotel/suite.jpg',
   'Wifi, Điều hòa, Bồn tắm, Sân riêng, Trà chiều')
on conflict (id) do nothing;

insert into rooms (id, number, floor, type_id, status, notes) values
  (1,  '101', 1, 1, 'occupied',    ''),
  (2,  '102', 1, 1, 'cleaning',    'Trả phòng sáng nay'),
  (3,  '103', 1, 1, 'available',   ''),
  (4,  '104', 1, 2, 'occupied',    ''),
  (5,  '105', 1, 2, 'available',   ''),
  (6,  '106', 1, 2, 'available',   ''),
  (7,  '201', 2, 1, 'available',   ''),
  (8,  '202', 2, 1, 'available',   ''),
  (9,  '203', 2, 2, 'available',   ''),
  (10, '204', 2, 2, 'available',   ''),
  (11, '205', 2, 3, 'available',   ''),
  (12, '206', 2, 3, 'maintenance', 'Hỏng điều hòa — chờ kỹ thuật'),
  (13, '301', 3, 2, 'available',   ''),
  (14, '302', 3, 2, 'available',   ''),
  (15, '303', 3, 4, 'occupied',    ''),
  (16, '304', 3, 4, 'occupied',    ''),
  (17, '401', 4, 4, 'available',   ''),
  (18, '402', 4, 4, 'available',   '')
on conflict (id) do nothing;

-- Seed around 2026-09-02 (today in the assignment window)
insert into bookings (
  id, code, guest_name, guest_phone, guest_count, room_id,
  check_in, check_out, status, total_amount, paid, source, notes, created_at
) values
  (1,  'AV-2401', 'Trần Minh Khang',  '0912 384 201', 1, 1,
   '2026-09-01', '2026-09-04', 'checked_in',  3870000, true,  'walk_in', 'Yêu cầu gối thấp',           '2026-08-28 09:12:00+07'),
  (2,  'AV-2402', 'Lê Hoàng Yến',     '0983 221 445', 2, 4,
   '2026-08-31', '2026-09-02', 'checked_in',  3780000, true,  'online',  'Checkout trước 11h',         '2026-08-20 14:03:00+07'),
  (3,  'AV-2403', 'Phạm Đức Anh',     '0906 118 773', 1, 7,
   '2026-09-02', '2026-09-05', 'confirmed',   3870000, false, 'online',  'Đến sau 20h',                '2026-08-30 11:40:00+07'),
  (4,  'AV-2404', 'Nguyễn Thu Hà',    '0934 667 812', 3, 11,
   '2026-09-02', '2026-09-06', 'confirmed',   9960000, true,  'walk_in', 'Có trẻ 5 tuổi',              '2026-09-01 16:22:00+07'),
  (5,  'AV-2405', 'Võ Nhật Nam',      '0971 550 309', 2, 15,
   '2026-09-01', '2026-09-05', 'checked_in', 11560000, true,  'online',  '',                           '2026-08-12 08:55:00+07'),
  (6,  'AV-2406', 'Đặng Phương Linh', '0888 214 660', 2, 17,
   '2026-09-04', '2026-09-07', 'confirmed',   8670000, false, 'online',  'Kỷ niệm cưới',               '2026-08-25 19:10:00+07'),
  (7,  'AV-2407', 'Bùi Quốc Huy',     '0945 003 128', 1, 2,
   '2026-08-29', '2026-09-01', 'cancelled',   3870000, false, 'online',  'Khách hủy vì đổi lịch bay',  '2026-08-18 10:00:00+07'),
  (8,  'AV-2408', 'Hoàng Mỹ An',      '0962 778 431', 2, 9,
   '2026-08-28', '2026-09-01', 'checked_out', 7560000, true,  'walk_in', '',                           '2026-08-27 13:45:00+07'),
  (9,  'AV-2409', 'Đỗ Thanh Tùng',    '0918 902 554', 2, 6,
   '2026-09-03', '2026-09-06', 'confirmed',   5670000, false, 'online',  '',                           '2026-08-31 21:18:00+07'),
  (10, 'AV-2410', 'Mai Ngọc Châu',    '0933 441 270', 2, 16,
   '2026-08-30', '2026-09-03', 'checked_in', 11560000, true,  'online',  'Dị ứng lông thú',            '2026-08-15 07:30:00+07'),
  (11, 'AV-2411', 'Lý Hải Đăng',      '0903 216 889', 1, 8,
   '2026-09-05', '2026-09-08', 'confirmed',   3870000, false, 'online',  '',                           '2026-09-01 09:05:00+07'),
  (12, 'AV-2412', 'Ngô Bảo Trâm',     '0987 654 012', 2, 5,
   '2026-09-06', '2026-09-09', 'confirmed',   5670000, true,  'walk_in', 'Xuất hóa đơn công ty',       '2026-09-02 10:40:00+07')
on conflict (id) do nothing;

select setval('room_types_id_seq', (select coalesce(max(id), 1) from room_types));
select setval('rooms_id_seq', (select coalesce(max(id), 1) from rooms));
select setval('bookings_id_seq', (select coalesce(max(id), 1) from bookings));
