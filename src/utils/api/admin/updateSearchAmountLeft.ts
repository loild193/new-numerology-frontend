import { API_ENDPOINT, DEFAULT_HEADERS, Error, Response } from '@models/api'
import { Input, ServerResponse } from '@models/api/admin/updateSearchAmountLeft'

export const updateSearchAmountLeft = async (
  input: Input,
  additionalHeaders: Record<string, string> = {},
): Promise<Response<ServerResponse>> => {
  const { id, searchAmountLeft, accessToken } = input ?? {}

  if (!id) {
    return { success: false, response: null, message: 'Missing id' }
  }
  if (!searchAmountLeft) {
    return { success: false, response: null, message: 'Missing search amount left' }
  }

  try {
    const updateBody: Record<string, string | number> = { searchAmountLeft }
    const updateSearchAmountLeftResponse = await fetch(`${API_ENDPOINT}/api/v1/users/${id}/search-amount-left`, {
      method: 'PUT',
      headers: {
        ...DEFAULT_HEADERS,
        ...additionalHeaders,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(updateBody),
    })
    if (updateSearchAmountLeftResponse.ok) {
      const updateSearchAmountLeftRawResponse =
        (await updateSearchAmountLeftResponse.json()) as Response<ServerResponse>
      if (updateSearchAmountLeftRawResponse.success) {
        return {
          success: updateSearchAmountLeftRawResponse.success,
          response: updateSearchAmountLeftRawResponse.response,
        }
      } else {
        return { success: false, response: null, message: updateSearchAmountLeftRawResponse.message }
      }
    } else {
      const updateSearchAmountLeftRawResponse = (await updateSearchAmountLeftResponse.json()) as { error: Error }
      return { success: false, response: null, error: updateSearchAmountLeftRawResponse.error }
    }
  } catch (error) {
    console.error('[updateSearchAmountLeft]: ', error)
    return { success: false, response: null, message: 'Internal server error' }
  }
}
