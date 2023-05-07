export type Input = {
  name: string
  birthday: string
  phone?: string
  company?: string
  accessToken: string
}

export type ServerResponse = {
  success: boolean
  response: any
}

const DEFAULT_ERROR_MESSAGE = 'Có lỗi xảy ra. Vui lòng liên hệ với admin để biết thêm chi tiết'

const ERROR_MAPPING = new Map<string, string>()
ERROR_MAPPING.set('Missing name', 'Nhập thiếu tên')
ERROR_MAPPING.set('Missing birthday', 'Nhập ngày tháng năm sinh không hợp lệ')
ERROR_MAPPING.set('Missing password', 'Thiếu id của người dùng')
ERROR_MAPPING.set('Invalid parameters', 'Dữ liệu gửi lên không hợp lệ')
ERROR_MAPPING.set('Invalid user', 'Tài khoản không hợp lệ')
ERROR_MAPPING.set('User not existed', 'Người dùng không tồn tại')
ERROR_MAPPING.set('Permission denied', 'Bạn không có quyền truy cập trang này')
ERROR_MAPPING.set('Cannot update user record', 'Có lỗi xảy ra. Vui lòng liên hệ với admin để biết thêm chi tiết')
ERROR_MAPPING.set('Internal Server Error', 'Có lỗi xảy ra. Vui lòng liên hệ với admin để biết thêm chi tiết')
ERROR_MAPPING.set('', 'Có lỗi xảy ra. Vui lòng liên hệ với admin để biết thêm chi tiết')

export { DEFAULT_ERROR_MESSAGE, ERROR_MAPPING }
