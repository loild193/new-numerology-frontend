import { Pagination } from '..'

export type Input = {
  id: string // id of user record
  startPage: number
  limit: number
  accessToken: string
}

export type SearchNumerologyRecord = {
  id: string // id of search numerology record
  userId: string
  name: string
  birthday: string
  phone?: string
  company?: string
  createdAt: string
}

export type ServerResponse = {
  success: boolean
  response: {
    searchRecords: SearchNumerologyRecord[]
    pagination: Pagination
  }
}

const DEFAULT_START_PAGE = 1
const DEFAULT_ITEM_PER_PAGE = 10

const DEFAULT_ERROR_MESSAGE = 'Có lỗi xảy ra. Vui lòng liên hệ với admin để biết thêm chi tiết'

const ERROR_MAPPING = new Map<string, string>()
ERROR_MAPPING.set('Invalid parameters', 'Dữ liệu gửi lên không hợp lệ')
ERROR_MAPPING.set('Invalid user', 'Tài khoản không hợp lệ')
ERROR_MAPPING.set('User not existed', 'Người dùng không tồn tại')
ERROR_MAPPING.set('Permission denied', 'Bạn không có quyền truy cập trang này')
ERROR_MAPPING.set('Internal Server Error', 'Có lỗi xảy ra. Vui lòng liên hệ với admin để biết thêm chi tiết')
ERROR_MAPPING.set('', 'Có lỗi xảy ra. Vui lòng liên hệ với admin để biết thêm chi tiết')

export { DEFAULT_START_PAGE, DEFAULT_ITEM_PER_PAGE, DEFAULT_ERROR_MESSAGE, ERROR_MAPPING }
