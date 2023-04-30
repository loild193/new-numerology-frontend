export type Input = {
  email: string
  newPassword: string
  accessToken: string
}

export type ServerResponse = {
  success: boolean
  response: { id: string; userId: string; phone: string; email: string }
}

const DEFAULT_ERROR_MESSAGE = 'Có lỗi xảy ra. Vui lòng liên hệ với admin để biết thêm chi tiết'

const ERROR_MAPPING = new Map<string, string>()
ERROR_MAPPING.set('Missing email', 'Thiếu email')
ERROR_MAPPING.set('Missing newPassword', 'Thiếu số điện thoại')
ERROR_MAPPING.set('Invalid parameters', 'Dữ liệu gửi lên không hợp lệ')
ERROR_MAPPING.set('Invalid user', 'Dữ liệu gửi lên không hợp lệ')
ERROR_MAPPING.set('User existed', 'Tài khoản đã tồn tại')
ERROR_MAPPING.set('Cannot update user record', 'Có lỗi xảy ra. Vui lòng liên hệ với admin để biết thêm chi tiết')
ERROR_MAPPING.set('Internal Server Error', 'Có lỗi xảy ra. Vui lòng liên hệ với admin để biết thêm chi tiết')
ERROR_MAPPING.set('', 'Có lỗi xảy ra. Vui lòng liên hệ với admin để biết thêm chi tiết')

export { DEFAULT_ERROR_MESSAGE, ERROR_MAPPING }
