type User = {
  userId: string
  id: string
  role: number
  username: string
  searchAmountLeft: number
}

export type Input = {
  id: string
  searchAmountLeft: number
  accessToken: string
}

export type ServerResponse = {
  success: boolean
  response: User
}

const DEFAULT_ERROR_MESSAGE = 'Có lỗi xảy ra. Vui lòng liên hệ với admin để biết thêm chi tiết'

const ERROR_MAPPING = new Map<string, string>()
ERROR_MAPPING.set('Missing Invalid searchAmountLeft', 'Thiếu số lần tra cứu')
ERROR_MAPPING.set('Invalid parameters', 'Dữ liệu gửi lên không hợp lệ')
ERROR_MAPPING.set('Invalid user', 'Tài khoản không hợp lệ')
ERROR_MAPPING.set('User is existed', 'Người dùng đã tồn tại')
ERROR_MAPPING.set('Permission denied', 'Bạn không có quyền truy cập trang này')
ERROR_MAPPING.set('Cannot update user record', 'Có lỗi xảy ra. Vui lòng liên hệ với admin để biết thêm chi tiết')
ERROR_MAPPING.set('Internal Server Error', 'Có lỗi xảy ra. Vui lòng liên hệ với admin để biết thêm chi tiết')
ERROR_MAPPING.set('', 'Có lỗi xảy ra. Vui lòng liên hệ với admin để biết thêm chi tiết')

export { DEFAULT_ERROR_MESSAGE, ERROR_MAPPING }
