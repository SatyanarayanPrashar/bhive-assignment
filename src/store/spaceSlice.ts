import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Workspace } from "../lib/datatypes";

interface SpaceRedux {
  value: Workspace;
}

const initialState: SpaceRedux = {
  value: {
    id: "",
    name: "",
    address: "",
    latitude: 0,
    longitude: 0,
    google_maps_url: "",
    city: "",
    state: "",
    country: "",
    postal_code: "",
    description: "",
    rules: "",
    amenities: [],
    images: [],
    working_hours_start: "",
    working_hours_end: "",
    contact_person_name: "",
    facilities: "",
    is_active: false,
    is_day_pass_enabled: false,
    day_pass_price: 0,
    day_pass_discounts_percentage: null,
    manager_id: "",
  }
};

const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {
    setSpace: (state, action: PayloadAction<Workspace>) => {
      state.value = action.payload;
    },
  },
});

export const { setSpace } = spaceSlice.actions;
export const getSpace = (state: RootState) => state.space.value;
export default spaceSlice.reducer;