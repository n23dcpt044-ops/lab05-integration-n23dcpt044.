document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Ngăn chặn form submit (tải lại trang) mặc định
    event.preventDefault();

    // 1. Lấy giá trị từ các trường input
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const messageArea = document.getElementById('message');

    // Xóa thông báo cũ
    messageArea.textContent = '';
    messageArea.className = 'message-area';

    // 2. Thực hiện kiểm tra dữ liệu cơ bản (Validation)
    
    // Kiểm tra độ dài Tên đăng nhập
    if (username.length < 5) {
        messageArea.textContent = 'Lỗi: Tên đăng nhập phải có ít nhất 5 ký tự.';
        messageArea.classList.add('error');
        return; // Dừng xử lý nếu có lỗi
    }

    // Kiểm tra độ dài Mật khẩu
    if (password.length < 6) {
        messageArea.textContent = 'Lỗi: Mật khẩu phải có ít nhất 6 ký tự.';
        messageArea.classList.add('error');
        return;
    }

    // Kiểm tra mật khẩu phải chứa cả chữ và số (ví dụ đơn giản)
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    
    if (!hasLetter || !hasNumber) {
        messageArea.textContent = 'Lỗi: Mật khẩu phải chứa cả chữ cái và số.';
        messageArea.classList.add('error');
        return;
    }

    // 3. Xử lý thành công (Giả lập)
    
    // Nếu tất cả kiểm tra đều thành công, thông báo đăng nhập thành công
    messageArea.textContent = `Đăng nhập thành công với Username: ${username}!`;
    messageArea.classList.add('success');

    // Ở môi trường thực tế, tại đây sẽ gửi dữ liệu đến server.
    // console.log('Đang gửi dữ liệu đến server...');
});

// Xử lý nút Cancel (Reset)
document.getElementById('cancelBtn').addEventListener('click', function() {
    // Xóa thông báo khi nhấn Cancel
    const messageArea = document.getElementById('message');
    messageArea.textContent = '';
    messageArea.className = 'message-area';
});