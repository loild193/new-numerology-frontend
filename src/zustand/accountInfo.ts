import { StateCreator } from 'zustand'

export interface AccountInfo {
  email: string
  username: string
  userId: string
  accessToken: string
}

export interface AccountInfoSlice {
  accountInfo: AccountInfo
  saveAccountInfo: (payload: AccountInfo) => void
  removeAccountInfo: () => void
}

export const createAccountInfoSlice: StateCreator<AccountInfoSlice, [], [], AccountInfoSlice> = (set) => ({
  accountInfo: {
    email: '',
    username: '',
    userId: '',
    accessToken: '',
  },
  saveAccountInfo: (payload: AccountInfo) =>
    set(() => ({
      accountInfo: payload,
    })),
  removeAccountInfo: () => set(() => ({ accountInfo: { email: '', username: '', userId: '', accessToken: '' } })),
})
