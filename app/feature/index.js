import serviceCardsReducer from './api/cardData'
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
      serviceCards: serviceCardsReducer,
    },
});