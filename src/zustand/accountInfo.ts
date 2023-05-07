import { StateCreator } from 'zustand'

export interface AccountInfo {
  email: string
  username: string
  userId: string
  searchAmountLeft: number
  accessToken: string
}

export interface AccountInfoSlice {
  accountInfo: AccountInfo
  saveAccountInfo: (payload: AccountInfo) => void
  updateSearchAmountLeft: (payload: { searchAmountLeft: number }) => void
  removeAccountInfo: () => void
}

export const createAccountInfoSlice: StateCreator<AccountInfoSlice, [], [], AccountInfoSlice> = (set) => ({
  accountInfo: {
    email: '',
    username: '',
    userId: '',
    searchAmountLeft: -1,
    accessToken: '',
  },
  saveAccountInfo: (payload: AccountInfo) =>
    set(() => ({
      accountInfo: payload,
    })),
  updateSearchAmountLeft: (payload: { searchAmountLeft: number }) =>
    set((state) => ({
      accountInfo: { ...state.accountInfo, searchAmountLeft: payload.searchAmountLeft },
    })),
  removeAccountInfo: () =>
    set(() => ({ accountInfo: { email: '', username: '', userId: '', searchAmountLeft: -1, accessToken: '' } })),
})
