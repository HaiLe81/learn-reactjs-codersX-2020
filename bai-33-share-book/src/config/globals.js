export const env = {
	NODE_ENV: process.env.NODE_ENV,
	SERVER_URL: process.env.REACT_APP_SERVER_URL ||  'http://localhost:3100/api/v1/',
	COOKIE_KEY: process.env.REACT_APP_COOKIE_KEY || ''
};

export const status = {
	error: 'error',
	success: 'success',
	warning: 'warning'
};

export const messages = {
	action: {
		failed: 'Hành động thất bại!'
	},
	register: {
		success: 'Đăng ký tài khoản thành công',
		failed: 'Đăng ký tài khoản thất bại'
	},
	login: {
		success: 'Đăng nhập thành công',
		failed: 'Tên người dùng hoặc mật khẩu không chính xác'
	},
	users: {
		get: {
			success: "Tải danh sách người dùng thành công!",
			failed: "Tải danh sách người dùng thất bại!"
		}
	},
	user: {
		get: {
			success: "Tải thông tin người dùng thành công!",
			failed: "Tải thông tin người dùng thất bại!"
		}
	},
	books: {
		get: {
			success: "Tải danh sách sách thành công!",
			failed: "Tải danh sách sách thất bại"
		},
		create: {
			success: "Tạo sách thành công!",
			failed: "Tạo sách thất bại!"
		}
	},
	number: {
		create: {
			success: "Đăng ký thành công. Số may mắn của bạn: ",
			failed: "Đăng ký số may mắn thất bại!"
		}
	},
	randomLucky: {
		create: {
			success: "Số mắn là: ",
			failed: "Oop~ Đã xảy ra lỗi trong quá trình quay số!"
		}
	}
}
export default {
	env,
	status
};