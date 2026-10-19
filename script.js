// Menu mobile: hoạt động cả khi không tải được thư viện CDN.
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('main-menu');
function closeMenu() { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if(e.key === 'Escape') { closeMenu(); } });
// Chọn sẵn khóa học theo nút được bấm.
document.querySelectorAll('[data-course]').forEach(link => link.addEventListener('click', () => {
  document.getElementById('course').value = link.dataset.course;
}));
// Không có backend: xác nhận rõ đây là thao tác kiểm tra thử.
const form = document.getElementById('consult-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  if(!form.reportValidity()) return;
  const name = document.getElementById('full-name');
  if(name.value.trim().length < 2) { name.setCustomValidity('Vui lòng nhập họ tên ít nhất 2 ký tự.'); name.reportValidity(); return; }
  document.getElementById('form-status').textContent = 'Thông tin hợp lệ. Đây là bản thực hành; chưa có đăng ký nào được gửi. Bạn có thể xem website CodeGym chính thức để liên hệ.';
});
document.getElementById('full-name').addEventListener('input', e => e.target.setCustomValidity(''));
// Hiệu ứng ripple dự phòng nếu MDB không tải được.
if(!window.mdb) document.querySelectorAll('.btn').forEach(btn => btn.addEventListener('click', e => {
  const rect=btn.getBoundingClientRect(); const circle=document.createElement('span');
  circle.className='ripple-circle';circle.style.left=(e.clientX-rect.left)+'px';circle.style.top=(e.clientY-rect.top)+'px';btn.appendChild(circle);setTimeout(()=>circle.remove(),650);
}));
