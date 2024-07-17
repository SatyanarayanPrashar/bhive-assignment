import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface pageState {
  value: boolean
}

const initialState: pageState = {
  value: false,
}

export const pageSlice = createSlice({
  name: 'pageState',
  initialState,
  reducers: {
    pageOpened: (state, action: PayloadAction<boolean>)=>{
      state.value = action.payload
    }
  },
})

export const { pageOpened } = pageSlice.actions

export const selectPage = (state: RootState) => state.openpage.value

export default pageSlice.reducer