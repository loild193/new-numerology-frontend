export enum ROLE {
  ADMIN = 1000,
  USER = 1,
}

export type Input = {
  userId: string
  password: string
}

export type ServerResponse = {
  userId: string
  username: string
  email: string
  role: ROLE
  accessToken: string
}

const DEFAULT_ERROR_MESSAGE = 'Có lỗi xảy ra. Vui lòng liên hệ với admin để biết thêm chi tiết'

const ERROR_MAPPING = new Map<string, string>()
ERROR_MAPPING.set('Missing userId', 'Thiếu tên đăng nhập')
ERROR_MAPPING.set('Missing password', 'Thiếu mật khẩu')
ERROR_MAPPING.set('Invalid parameters', 'Dữ liệu gửi lên không hợp lệ')
ERROR_MAPPING.set('User not existed', 'Tài khoản không tồn tại')
ERROR_MAPPING.set('Password does not match', 'Sai mật khẩu')
ERROR_MAPPING.set('Internal Server Error', 'Có lỗi xảy ra. Vui lòng liên hệ với admin để biết thêm chi tiết')
ERROR_MAPPING.set('', 'Có lỗi xảy ra. Vui lòng liên hệ với admin để biết thêm chi tiết')

export { DEFAULT_ERROR_MESSAGE, ERROR_MAPPING }
