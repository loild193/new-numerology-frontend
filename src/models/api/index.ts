export const DEFAULT_HEADERS = {
  'X-Application': 'New Numerology App',
  'Content-Type': 'application/json',
}

export const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT ?? 'http://localhost:9090'

export enum ERROR_CODE {
  UNAUTHORIZED = 'Unauthorized',
  BAD_REQUEST = 'BadRequest',
  INVALID_PARAMETER = 'InvalidParameter',
  SERVER_ERROR = 'ServerError',
  NOT_FOUND = 'NotFound',
  ALREADY_EXIST = 'AlreadyExist',
}

export type Error = {
  code: ERROR_CODE
  message: string
  target: string[]
  innererror: object
}

export type Response<TData> = {
  success: boolean
  response: TData | null
  error?: Error
  message?: string
}

export type Pagination = {
  startPage: number
  limit: number
  totalPages: number
  totalRecords: number
}
