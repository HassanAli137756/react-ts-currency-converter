
import { configureStore } from "@reduxjs/toolkit";
import { conversionReducer } from "./ConversionHistory";
import { authReducer } from "./AuthSlice";

export const store = configureStore(
{
    reducer:
    {
        historyReducer: conversionReducer,
        authReducer: authReducer
    }
}
)

