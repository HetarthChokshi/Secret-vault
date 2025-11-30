import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface Service {
  id: string
  category_id: string
  name: string
  created_at?: string
  updated_at?: string
}

interface ServicesState {
  items: Service[]
  loading: boolean
  error: string | null
}

const initialState: ServicesState = {
  items: [],
  loading: false,
  error: null,
}

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServicesLoading: (state) => {
      state.loading = true
      state.error = null
    },
    setServicesSuccess: (state, action: PayloadAction<Service[]>) => {
      state.items = action.payload
      state.loading = false
      state.error = null
    },
    setServicesError: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    addService: (state, action: PayloadAction<Service>) => {
      state.items.push(action.payload)
    },
    updateService: (state, action: PayloadAction<Service>) => {
      const index = state.items.findIndex((svc) => svc.id === action.payload.id)
      if (index !== -1) {
        state.items[index] = action.payload
      }
    },
    deleteService: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((svc) => svc.id !== action.payload)
    },
  },
})

export const { setServicesLoading, setServicesSuccess, setServicesError, addService, updateService, deleteService } =
  servicesSlice.actions

export default servicesSlice.reducer
