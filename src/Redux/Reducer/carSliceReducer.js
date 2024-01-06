import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  DELETE_CAR,
  FETCH_CARS_LIST,
  UPDATE_CAR,
} from "../ActionType/actionType";
import { addNewCarAPI, getListCarAPI } from "../../API/CarAPI";
import { ADD_NEW_CAR } from "./../ActionType/actionType";
import { deleteCarAPI, updateCarAPI } from "./../../API/CarAPI";

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

// action : add new account api
export let actionAddCarAPI = createAsyncThunk(ADD_NEW_CAR, async (carNew) => {
  let carNew_API = await addNewCarAPI(carNew); //action api
  return carNew_API; //payload
});
// action : delete a car api
export let actionDeleteCarAPI = createAsyncThunk(
  DELETE_CAR,
  async (id_delete) => {
    let car_deleted = await deleteCarAPI(id_delete); //action api
    return car_deleted; //payload
  }
);
// action : update car
export let actionUpdateCarAPI = createAsyncThunk(
  UPDATE_CAR,
  async (carUpdate, { getState }) => {
    // get state
    const state = getState();
    console.log("listCart222 : ", state);
    const listCart = state.carReducer.listCar;
    // update car API
    let carUpdate_API = await updateCarAPI(carUpdate); //action api
    console.log("carUpdate_API : ", carUpdate_API);

    const _lst = listCart.map((car) => {
      if (car.id === carUpdate_API.id) {
        return carUpdate_API;
      }
      return car;
    });

    alert("Chỉnh sửa successfully !");

    return _lst; //payload
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
    builder.addCase(actionUpdateCarAPI.fulfilled, (state, action) => {
      state.listCar = action.payload;
    });
    builder.addCase(actionAddCarAPI.fulfilled, (state, action) => {
      state.listCar.push(action.payload);
    });
    builder.addCase(actionDeleteCarAPI.fulfilled, (state, action) => {
      state.listCar.splice(
        state.listCar.findIndex((car) => car.id === action.payload.id),
        1
      );
    });
  },
});

export default carSliceReducer.reducer;
