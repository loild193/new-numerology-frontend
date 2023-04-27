import { API_ENDPOINT, DEFAULT_HEADERS, Error, Response } from '@models/api'
import { Input, ServerResponse } from '@models/api/authentication/login'

export const login = async (
  input: Input,
  additionalHeaders: Record<string, string> = {},
): Promise<Response<ServerResponse>> => {
  const { userId, password } = input || {}

  if (!userId) {
    return { success: false, response: null, message: 'Missing userId' }
  }
  if (!password) {
    return { success: false, response: null, message: 'Missing password' }
  }

  try {
    const loginResponse = await fetch(`${API_ENDPOINT}/api/v1/sign-in`, {
      method: 'POST',
      headers: {
        ...DEFAULT_HEADERS,
        ...additionalHeaders,
      },
      body: JSON.stringify({ userId, password }),
    })

    if (loginResponse.ok) {
      const loginRawResponse = (await loginResponse.json()) as Response<ServerResponse>

      if (loginRawResponse.success) {
        return { success: loginRawResponse.success, response: loginRawResponse.response }
      } else {
        return { success: false, response: null, message: loginRawResponse.message }
      }
    } else {
      const loginRawResponse = (await loginResponse.json()) as { error: Error }
      return { success: false, response: null, error: loginRawResponse.error }
    }
  } catch (error) {
    console.error('[login]: ', error)
    return { success: false, response: null, message: 'Internal server error' }
  }
}
