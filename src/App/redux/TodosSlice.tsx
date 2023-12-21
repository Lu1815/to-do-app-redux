import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ITodoState {
  id: number,
  name: string,
}

const initialState: ITodoState[] = []

export const counterSlice = createSlice({
  name: 'todos-list',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<ITodoState>) => {
      state.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { create } = counterSlice.actions

export default counterSlice.reducer