
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

export interface ConversionsHistory
{
    fromCountry: string
    toCountry: string
    date: string
    valueToConvert: number
    convertedValue: number
    priceOfFrom: number
    id: string
}

let history:ConversionsHistory[] = []
const rawHistory = localStorage.getItem('conversions')

if(rawHistory && rawHistory.length > 0)
{
    history = JSON.parse(rawHistory)
}

const updateStorage = (histories:ConversionsHistory[]) =>
{
    localStorage.setItem('conversions', JSON.stringify(histories))
}



const ConversionHistory = createSlice(
{
    name: 'conversionHistory',
    initialState:
    {
        history: history
    },
    reducers:
    {
        addConversion: (state, action:PayloadAction<{fromCountry: string, toCountry: string ,valueToConvert: number ,convertedValue: number ,priceOfFrom: number}>) =>
        {
            state.history.push({...action.payload, date: new Date().toLocaleDateString(), id: nanoid()})
            updateStorage(state.history)
        },

        deleteConversion: (state, action:PayloadAction<string>) =>
        {
            state.history = state.history.filter(conversion => conversion.id !== action.payload)
            updateStorage(state.history)
        }
    }
}
)


export const {addConversion, deleteConversion} = ConversionHistory.actions
export const conversionReducer = ConversionHistory.reducer


