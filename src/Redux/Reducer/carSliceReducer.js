import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FETCH_CARS_LIST } from "../ActionType/actionType";
import { getListCarAPI } from "../../API/CarAPI";

const initialState = {
  listCar: [],
};

// action
export let actionFetchListCarsAPI_MDW = createAsyncThunk(
  FETCH_CARS_LIST,
  async () => {
    let listCarAPI = await getListCarAPI();
    return listCarAPI;
  }
);

export const carSliceReducer = createSlice({
  name: "carSliceReducer",
  initialState,
  reducers: {
    // handle reducers not relate to middleware
  },
  //,
  extraReducers: (builder) => {
    builder.addCase(actionFetchListCarsAPI_MDW.fulfilled, (state, action) => {
      state.listCar = action.payload;
    });
  },
});

export default carSliceReducer.reducer;
