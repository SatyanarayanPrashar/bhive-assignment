import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
interface pageState {
  value: boolean
}

// Define the initial state using that type
const initialState: pageState = {
  value: false,
}

export const pageSlice = createSlice({
  name: 'pageState',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    pageOpened: (state, action: PayloadAction<boolean>)=>{
      state.value = action.payload
    }
  },
})

export const { pageOpened } = pageSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPage = (state: RootState) => state.openpage.value

export default pageSlice.reducer