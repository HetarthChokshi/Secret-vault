import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface Account {
  id: string
  service_id: string
  name: string
  data: Record<string, string>
  created_at?: string
  updated_at?: string
}

interface AccountsState {
  items: Account[]
  selectedAccountId: string | null
  loading: boolean
  error: string | null
}

const initialState: AccountsState = {
  items: [],
  selectedAccountId: null,
  loading: false,
  error: null,
}

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setAccountsLoading: (state) => {
      state.loading = true
      state.error = null
    },
    setAccountsSuccess: (state, action: PayloadAction<Account[]>) => {
      state.items = action.payload
      state.loading = false
      state.error = null
    },
    setAccountsError: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    addAccount: (state, action: PayloadAction<Account>) => {
      state.items.push(action.payload)
    },
    updateAccount: (state, action: PayloadAction<Account>) => {
      const index = state.items.findIndex((acc) => acc.id === action.payload.id)
      if (index !== -1) {
        state.items[index] = action.payload
      }
    },
    deleteAccount: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((acc) => acc.id !== action.payload)
    },
    selectAccount: (state, action: PayloadAction<string | null>) => {
      state.selectedAccountId = action.payload
    },
  },
})

export const {
  setAccountsLoading,
  setAccountsSuccess,
  setAccountsError,
  addAccount,
  updateAccount,
  deleteAccount,
  selectAccount,
} = accountsSlice.actions

export default accountsSlice.reducer
