export const env = {
	NODE_ENV: process.env.NODE_ENV,
	SERVER_URL: process.env.REACT_APP_SERVER_URL || 'https://crud-list-book.glitch.me/api/v1/',
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
	transactions: {
		get: {
			success: "Tải danh sách dao dịch thành công!",
			failed: "Tải danh sách dao dịch thất bại!"
		},
		create: {
			success: "Tạo dao dịch thành công!",
			failed: "Tạo dao dịch thất bại"
		}
	}
}
export default {
	env,
	status
};