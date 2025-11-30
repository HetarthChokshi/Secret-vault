import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface UIState {
  modalOpen: boolean
  modalType: "category" | "service" | "account" | null
  editingId: string | null
  contextId: string | null // For passing context like categoryId or serviceId
  expandedCategories: string[]
  expandedServices: string[]
}

const initialState: UIState = {
  modalOpen: false,
  modalType: null,
  editingId: null,
  contextId: null,
  expandedCategories: [],
  expandedServices: [],
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ type: "category" | "service" | "account"; editingId?: string; contextId?: string }>,
    ) => {
      state.modalOpen = true
      state.modalType = action.payload.type
      state.editingId = action.payload.editingId || null
      state.contextId = action.payload.contextId || null
    },
    closeModal: (state) => {
      state.modalOpen = false
      state.modalType = null
      state.editingId = null
      state.contextId = null
    },
    toggleCategory: (state, action: PayloadAction<string>) => {
      const index = state.expandedCategories.indexOf(action.payload)
      if (index > -1) {
        state.expandedCategories.splice(index, 1)
      } else {
        state.expandedCategories.push(action.payload)
      }
    },
    toggleService: (state, action: PayloadAction<string>) => {
      const index = state.expandedServices.indexOf(action.payload)
      if (index > -1) {
        state.expandedServices.splice(index, 1)
      } else {
        state.expandedServices.push(action.payload)
      }
    },
  },
})

export const { openModal, closeModal, toggleCategory, toggleService } = uiSlice.actions
export default uiSlice.reducer
