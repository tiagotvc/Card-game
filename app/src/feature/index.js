import serviceCardsReducer from './cardsService/cardsService';
import serviceNameReducer from './nameService/nameService';
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
      serviceCards: serviceCardsReducer,
      serviceName: serviceNameReducer
    },
});