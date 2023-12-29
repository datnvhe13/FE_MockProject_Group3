import { configureStore } from '@reduxjs/toolkit'
import carSliceReducer from '../Reducer/carSliceReducer'
import formSlice from '../Reducer/formSlice'
import formSlice2 from '../Reducer/formSlice2'

export const store = configureStore({
    reducer: {
        carReducer: carSliceReducer,
        formReducer: formSlice,
        formSlice2: formSlice2
    }
})

