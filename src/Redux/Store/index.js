import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CardsReducer from "../Reducer";

const combine = combineReducers({
  songsData: CardsReducer,
});

export const store = configureStore({
  reducer: combine,
});
