# Landing Page CodeGym Career — Material Design

Bài thực hành thiết kế lại landing page bằng HTML/CSS/JavaScript và MDB UI Kit (Bootstrap Material Design).

## Chạy bài
1. Giải nén toàn bộ ZIP.
2. Mở thư mục `codegym-career`.
3. Nhấp đúp `index.html` để mở bằng Chrome hoặc Edge. Không cần cài Node.js.
4. Cần mạng để tải MDB UI Kit 6.4.2 qua CDN. CSS và JavaScript riêng có phần dự phòng khi không tải được CDN.

## Các tệp
- index.html: nội dung và cấu trúc trang.
- style.css: tùy chỉnh màu sắc, khoảng cách, minh họa và responsive.
- script.js: menu điện thoại, chọn khóa học, kiểm tra biểu mẫu, ripple dự phòng.
- README.md: cách mở bài, phân tích thiết kế và hướng dẫn nộp.

## Phân tích trang nguồn
Nguồn nội dung: https://codegym.vn/codegym-career/ (đọc ngày 19/10/2026).
Trang nguồn có giới thiệu chương trình Coding Bootcamp, tổng quan, lợi ích, lộ trình, khóa Java/PHP, hỗ trợ nghề nghiệp và phần liên hệ. Bài này tóm lược nội dung đó, tổ chức lại theo phong cách Material Design. Không sao chép giao diện trang gốc.
Thông tin chương trình là nội dung tham khảo tại thời điểm đọc, không thay thế thông tin tư vấn chính thức. Không sử dụng số liệu tỷ lệ việc làm, mức lương hoặc lời chứng thực chưa được kiểm chứng.

## Ánh xạ component
| Phần | Component / cách thể hiện |
|---|---|
| Header | Navbar, nút menu có aria-expanded, điều hướng trên di động |
| Hero | Bố cục hai cột, CTA có ripple, minh họa cửa sổ code bằng HTML/CSS |
| Lợi ích | Card, card-body, bóng đổ nhẹ |
| Lộ trình | Bốn bước, hai cột trên di động |
| Khóa học | Card, badge, button, chọn sẵn Java/PHP khi bấm |
| Nghề nghiệp | Danh sách có thứ tự, nút dẫn tới trang chính thức |
| Hỏi đáp | details/summary có thể mở bằng bàn phím |
| Tư vấn | Form control, kiểm tra tên/email/khóa học, phản hồi aria-live |
| Footer | Nhóm liên kết và nguồn nội dung |

Màu chính #244DCC, chữ #172642, nền phụ #F1F5FB. Các bề mặt dùng bo góc, bóng đổ và nút phản hồi khi tương tác để thể hiện Material Design. MDB UI Kit 6.4.2 được nhúng bằng CSS/JS CDN; mã riêng giúp menu và form hoạt động khi CDN không tải được.
Tài liệu MDB: https://mdbootstrap.com/docs/standard/getting-started/installation/

## Kiểm tra trước khi nộp
- Bấm từng liên kết menu: cuộn tới đúng phần.
- Bấm khóa Java/PHP: khóa học trong form được chọn tương ứng.
- Bỏ trống form hoặc nhập sai email: trình duyệt yêu cầu sửa.
- Nhập hợp lệ: hiển thị thông báo thử nghiệm, không gửi dữ liệu lên máy chủ.
- Nhấn F12 → Ctrl+Shift+M → chọn chiều rộng 390px: kiểm tra menu ☰ và nội dung một cột.
- Nút mở website chính thức hoạt động khi có Internet.

## Nộp bài
1. Tạo repository MỚI tên `codegym-career-material` trên GitHub; giữ bài newsletter trong repository cũ.
2. Chọn uploading an existing file / tải lên tệp hiện có.
3. Tải 4 tệp trong thư mục này lên trực tiếp ở gốc repository.
4. Commit changes, sao chép URL repository, dán vào ô Link của bài mới và bấm Nộp bài.
5. Có thể bật GitHub Pages qua Settings → Pages → Deploy from a branch → chọn nhánh chính và /(root) → Save để xem online.

## Ảnh nên chụp gửi thầy
1. Đầu trang trên máy tính: logo, menu, hero và nút CTA.
2. Phần lợi ích, lộ trình và khóa học.
3. Giao diện điện thoại có menu mở.
4. Biểu mẫu hiển thị phản hồi sau khi nhập hợp lệ (dùng dữ liệu ví dụ).
5. GitHub có đủ 4 tệp và trang xác nhận đã nộp bài.

Đây là bản thực hành, không phải website chính thức của CodeGym. Form chỉ minh họa phía trình duyệt, chưa có backend và không gửi thông tin tới CodeGym. Chưa đưa mã nguồn lên GitHub, chưa nộp trên hệ thống khóa học.
