import create from 'zustand'
import { BalanceSlice, createBalanceSlice } from './balance'

type StoreSlice = BalanceSlice

export const useBoundStore = create<StoreSlice>()((...a) => ({
  ...createBalanceSlice(...a),
}))
