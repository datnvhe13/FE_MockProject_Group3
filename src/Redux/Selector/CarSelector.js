import { createSelector } from "@reduxjs/toolkit";


// get all state from redux
 let carSelector = (state) => state.carReducer;
 
 // get state
 let selectListCarSelector = createSelector(carSelector, (state) => state.listCar);

 export let selectListCar = (state) => {
        return selectListCarSelector(state);
 }
