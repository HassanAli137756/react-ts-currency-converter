
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export interface loginStructure
{
    name: string
    email: string
    password: string
}

let rawData = localStorage.getItem('userLoginInfor')
let userData:loginStructure = {name: '', email: '', password: ''} 

if(rawData && rawData.length > 0)
{
    userData = JSON.parse(rawData) as loginStructure
}

const storeUserInfo = (data:loginStructure) =>
{
    localStorage.setItem('userLoginInfor', JSON.stringify(data ))
}



export const authSlice = createSlice(
{
    name: 'authSlice',
    initialState:
    {
        loginData: userData
    },
    reducers:
    {
        login: (state, action:PayloadAction<loginStructure>) =>
        {
            state.loginData = action.payload
           storeUserInfo(state.loginData)
        },

        logout: (state) =>
        {
            state.loginData = {email: '', name: '', password: ''}
            storeUserInfo(state.loginData)


        }
    }
}
)




export const {login, logout}  = authSlice.actions
export const authReducer = authSlice.reducer

