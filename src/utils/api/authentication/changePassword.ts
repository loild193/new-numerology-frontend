import { API_ENDPOINT, DEFAULT_HEADERS, Error, Response } from '@models/api'
import { Input, ServerResponse } from '@models/api/authentication/changePassword'

export const changePassword = async (
  input: Input,
  additionalHeaders: Record<string, string> = {},
): Promise<Response<ServerResponse>> => {
  const { email, newPassword, accessToken } = input || {}

  if (!email) {
    return { success: false, response: null, message: 'Missing email' }
  }
  if (!newPassword) {
    return { success: false, response: null, message: 'Missing newPassword' }
  }

  try {
    const changePasswordResponse = await fetch(`${API_ENDPOINT}/api/v1/change-password`, {
      method: 'POST',
      headers: {
        ...DEFAULT_HEADERS,
        ...additionalHeaders,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ email, newPassword }),
    })

    if (changePasswordResponse.ok) {
      const changePasswordRawResponse = (await changePasswordResponse.json()) as Response<ServerResponse>

      if (changePasswordRawResponse.success) {
        return { success: changePasswordRawResponse.success, response: changePasswordRawResponse.response }
      } else {
        return { success: false, response: null, message: changePasswordRawResponse.message }
      }
    } else {
      const changePasswordRawResponse = (await changePasswordResponse.json()) as { error: Error }
      return { success: false, response: null, error: changePasswordRawResponse.error }
    }
  } catch (error) {
    console.error('[changePassword]: ', error)
    return { success: false, response: null, message: 'Internal server error' }
  }
}
