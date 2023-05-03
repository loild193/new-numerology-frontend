import { API_ENDPOINT, DEFAULT_HEADERS, Error, Response } from '@models/api'
import { Input, ServerResponse } from '@models/api/admin/updateUser'

export const updateUser = async (
  input: Input,
  additionalHeaders: Record<string, string> = {},
): Promise<Response<ServerResponse>> => {
  const { id, userId, password, searchAmountLeft, accessToken } = input ?? {}

  if (!id) {
    return { success: false, response: null, message: 'Missing id' }
  }
  if (!userId) {
    return { success: false, response: null, message: 'Missing userId' }
  }
  if (!password) {
    return { success: false, response: null, message: 'Missing password' }
  }

  try {
    const updateBody: Record<string, string | number> = { userId, password }
    if (searchAmountLeft) {
      updateBody.searchAmountLeft = searchAmountLeft
    }
    const updateUserResponse = await fetch(`${API_ENDPOINT}/api/v1/users/${id}`, {
      method: 'PUT',
      headers: {
        ...DEFAULT_HEADERS,
        ...additionalHeaders,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(updateBody),
    })
    if (updateUserResponse.ok) {
      const updateUserRawResponse = (await updateUserResponse.json()) as Response<ServerResponse>
      if (updateUserRawResponse.success) {
        return { success: updateUserRawResponse.success, response: updateUserRawResponse.response }
      } else {
        return { success: false, response: null, message: updateUserRawResponse.message }
      }
    } else {
      const updateUserRawResponse = (await updateUserResponse.json()) as { error: Error }
      return { success: false, response: null, message: updateUserRawResponse.error.message }
    }
  } catch (error) {
    console.error('[updateUser]: ', error)
    return { success: false, response: null, message: 'Internal server error' }
  }
}
