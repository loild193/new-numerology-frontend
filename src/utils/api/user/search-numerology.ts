import { API_ENDPOINT, DEFAULT_HEADERS, Error, Response } from '@models/api'
import { Input, ServerResponse } from '@models/api/user/search-numerology'

export const searchNumerology = async (
  input: Input,
  additionalHeaders: Record<string, string> = {},
): Promise<Response<ServerResponse>> => {
  const { name, phone, birthday, company, accessToken } = input ?? {}

  if (!name) {
    return { success: false, response: null, message: 'Missing name' }
  }
  if (!birthday) {
    return { success: false, response: null, message: 'Missing birthday' }
  }

  try {
    const updateBody: Record<string, string | number> = { name, phone, birthday, company }
    const searchNumerologyResponse = await fetch(`${API_ENDPOINT}/api/v1/users/search-numerology`, {
      method: 'POST',
      headers: {
        ...DEFAULT_HEADERS,
        ...additionalHeaders,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(updateBody),
    })
    if (searchNumerologyResponse.ok) {
      const searchNumerologyRawResponse = (await searchNumerologyResponse.json()) as Response<ServerResponse>
      if (searchNumerologyRawResponse.success) {
        return { success: searchNumerologyRawResponse.success, response: searchNumerologyRawResponse.response }
      } else {
        return { success: false, response: null, message: searchNumerologyRawResponse.message }
      }
    } else {
      const searchNumerologyRawResponse = (await searchNumerologyResponse.json()) as { error: Error }
      console.log('searchNumerologyRawResponse: ', searchNumerologyRawResponse)
      return { success: false, response: null, error: searchNumerologyRawResponse.error }
    }
  } catch (error) {
    console.error('[searchNumerology]: ', error)
    return { success: false, response: null, message: 'Internal server error' }
  }
}
