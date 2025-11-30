import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface Category {
  id: string
  name: string
  created_at?: string
  updated_at?: string
}

interface CategoriesState {
  items: Category[]
  loading: boolean
  error: string | null
}

const initialState: CategoriesState = {
  items: [],
  loading: false,
  error: null,
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategoriesLoading: (state) => {
      state.loading = true
      state.error = null
    },
    setCategoriesSuccess: (state, action: PayloadAction<Category[]>) => {
      state.items = action.payload
      state.loading = false
      state.error = null
    },
    setCategoriesError: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    addCategory: (state, action: PayloadAction<Category>) => {
      state.items.push(action.payload)
    },
    updateCategory: (state, action: PayloadAction<Category>) => {
      const index = state.items.findIndex((cat) => cat.id === action.payload.id)
      if (index !== -1) {
        state.items[index] = action.payload
      }
    },
    deleteCategory: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((cat) => cat.id !== action.payload)
    },
  },
})

export const {
  setCategoriesLoading,
  setCategoriesSuccess,
  setCategoriesError,
  addCategory,
  updateCategory,
  deleteCategory,
} = categoriesSlice.actions

export default categoriesSlice.reducer
