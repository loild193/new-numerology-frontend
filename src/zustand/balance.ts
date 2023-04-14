import { StateCreator } from 'zustand'

export interface BalanceSlice {
  balance: string
  saveBalance: (payload: string) => void
  resetBalance: () => void
}

export const createBalanceSlice: StateCreator<BalanceSlice, [], [], BalanceSlice> = (set) => ({
  balance: '0',
  saveBalance: (payload: string) =>
    set(() => ({
      balance: payload,
    })),
  resetBalance: () => set(() => ({ balance: '' })),
})
