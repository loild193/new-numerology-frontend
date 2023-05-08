import { API_ENDPOINT, DEFAULT_HEADERS, Error, Response } from '@models/api'
import { Input, ServerResponse } from '@models/api/admin/updateUser'

export const createUser = async (
  input: Input,
  additionalHeaders: Record<string, string> = {},
): Promise<Response<ServerResponse>> => {
  const { userId, username, password, phone, email, searchAmountLeft, accessToken } = input ?? {}

  if (!userId) {
    return { success: false, response: null, message: 'Missing userId' }
  }
  if (!password) {
    return { success: false, response: null, message: 'Missing password' }
  }
  if (!phone) {
    return { success: false, response: null, message: 'Missing phone' }
  }
  if (!username) {
    return { success: false, response: null, message: 'Missing username' }
  }
  if (!email) {
    return { success: false, response: null, message: 'Missing email' }
  }

  try {
    const createBody: Record<string, string | number> = { userId, username, password, phone, email }
    if (searchAmountLeft) {
      createBody.searchAmountLeft = searchAmountLeft
    }
    const createUserResponse = await fetch(`${API_ENDPOINT}/api/v1/create-user`, {
      method: 'POST',
      headers: {
        ...DEFAULT_HEADERS,
        ...additionalHeaders,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(createBody),
    })
    if (createUserResponse.ok) {
      const createUserRawResponse = (await createUserResponse.json()) as Response<ServerResponse>
      if (createUserRawResponse.success) {
        return { success: createUserRawResponse.success, response: createUserRawResponse.response }
      } else {
        return { success: false, response: null, message: createUserRawResponse.message }
      }
    } else {
      const createUserRawResponse = (await createUserResponse.json()) as { error: Error }
      return { success: false, response: null, message: createUserRawResponse.error.message }
    }
  } catch (error) {
    console.error('[createUser]: ', error)
    return { success: false, response: null, message: 'Internal server error' }
  }
}
