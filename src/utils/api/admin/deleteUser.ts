import { API_ENDPOINT, DEFAULT_HEADERS, Error, Response } from '@models/api'
import { Input, ServerResponse } from '@models/api/admin/deleteUser'

export const deleteUser = async (
  input: Input,
  additionalHeaders: Record<string, string> = {},
): Promise<Response<ServerResponse>> => {
  const { id, accessToken } = input ?? {}

  if (!id) {
    return { success: false, response: null, message: 'Missing id' }
  }

  try {
    const deleteUserResponse = await fetch(`${API_ENDPOINT}/api/v1/users/${id}`, {
      method: 'DELETE',
      headers: {
        ...DEFAULT_HEADERS,
        ...additionalHeaders,
        Authorization: `Bearer ${accessToken}`,
      },
    })
    if (deleteUserResponse.ok) {
      const deleteUserRawResponse = (await deleteUserResponse.json()) as Response<ServerResponse>
      if (deleteUserRawResponse.success) {
        console.log('deleteUserRawResponse.response: ', deleteUserRawResponse.response)
        return { success: deleteUserRawResponse.success, response: deleteUserRawResponse.response }
      } else {
        return { success: false, response: null, message: deleteUserRawResponse.message }
      }
    } else {
      const deleteUserRawResponse = (await deleteUserResponse.json()) as { error: Error }
      return { success: false, response: null, message: deleteUserRawResponse.error.message }
    }
  } catch (error) {
    console.error('[deleteUser]: ', error)
    return { success: false, response: null, message: 'Internal server error' }
  }
}
