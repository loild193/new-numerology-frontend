import { Pagination } from '..'
import { ROLE } from '../authentication/login'

export enum LIST_USER_FILTER {
  ALL = 'all',
  HAS_ACCOUNT = 'has_account',
  NOT_HAVE_ACCOUNT = 'not_have_account',
}

export type Input = {
  keyword?: string
  filter?: LIST_USER_FILTER
  startPage: number
  limit: number
  accessToken: string
}

export type User = {
  id: string
  userId: string | null
  username: string
  phone: string
  email: string
  searchAmountLeft: number
  role: ROLE
}

export type ServerResponse = {
  success: boolean
  response: {
    users: User[]
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
