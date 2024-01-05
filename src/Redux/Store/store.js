import { configureStore } from "@reduxjs/toolkit";
import carSliceReducer from "../Reducer/CarSliceReducer";
import CreateNewFormReducer from "../Reducer/CreateNewFormReducer";
import formSlice from "../Reducer/formSlice";
import formSlice2 from "../Reducer/formSlice2";
import CreateUpdateFormReducer from "../Reducer/CreateUpdateFormReducer";

export const store = configureStore({
  reducer: {
    carReducer: carSliceReducer,
    formSlice: CreateNewFormReducer,
    formUpdateSlice: CreateUpdateFormReducer,
    formReducer: formSlice,
    formSlice2: formSlice2,
  },
});
