

import { useSelector } from "react-redux"
import LayOut from "./Layout"
import type { loginStructure } from "../Redux/AuthSlice"
import Login from "../AutherService/Login"




function ProtectedLayout() 
{
    const userData:loginStructure = useSelector((state:any) => state.authReducer.loginData)
    
    if(!window.navigator.onLine)
    {
        
        return(
        <div className="flex justify-center text-3xl text-red-600 italic font-bold">
            <div>Please Make Sure Your Internet Connection</div>
        </div>
        )
    }
    else if(userData.email.length > 0 && userData.name.length > 0)
    {
        return(
        <div>
            <LayOut />
        </div>
        )
    }
    else
    {
        
        return(
        <div >
            <div className="flex justify-center">
            <div
            className=" w-full text-3xl text-red-600 italic font-bold">
                Please Login To Use Service
            </div>
            </div>
            <br /><br />
            <Login />
        </div>
        )
    }
}

export default ProtectedLayout

