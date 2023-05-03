import { API_ENDPOINT, DEFAULT_HEADERS, Error, Response } from '@models/api'
import { Input, ServerResponse } from '@models/api/authentication/register'

export const register = async (
  input: Input,
  additionalHeaders: Record<string, string> = {},
): Promise<Response<ServerResponse>> => {
  const { username, email, phone } = input || {}

  if (!username) {
    return { success: false, response: null, message: 'Missing username' }
  }
  if (!email) {
    return { success: false, response: null, message: 'Missing email' }
  }
  if (!phone) {
    return { success: false, response: null, message: 'Missing phone' }
  }

  try {
    const registerResponse = await fetch(`${API_ENDPOINT}/api/v1/sign-up`, {
      method: 'POST',
      headers: {
        ...DEFAULT_HEADERS,
        ...additionalHeaders,
      },
      body: JSON.stringify({ username, email, phone }),
    })

    if (registerResponse.ok) {
      const registerRawResponse = (await registerResponse.json()) as Response<ServerResponse>

      if (registerRawResponse.success) {
        return { success: registerRawResponse.success, response: registerRawResponse.response }
      } else {
        return { success: false, response: null, message: registerRawResponse.message }
      }
    } else {
      const registerRawResponse = (await registerResponse.json()) as { error: Error }
      return { success: false, response: null, message: registerRawResponse.error.message }
    }
  } catch (error) {
    console.error('[register]: ', error)
    return { success: false, response: null, message: 'Internal server error' }
  }
}
