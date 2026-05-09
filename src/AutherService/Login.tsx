import { useState } from "react"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { login } from "../Redux/AuthSlice"
import Input from "../components/Input"

import { useForm } from 'react-hook-form'


function Login()
{

  const [error, setError] = useState<string>('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()

  const createAccount = (data: any) =>
  {
    if(data.email.length > 0 && data.name.length > 0 && data.password.length > 0)
    {
        dispatch(login(data))
        navigate('/')
    }
    else
    {
      setError('There is an unknown error please try later')
    }
  }

  return(
    <div>
        <div className="flex  justify-center">
        
        <div className="rounded-2xl p-10 w-1/2 bg-white/50 ">    
        <form onSubmit={handleSubmit(createAccount)}>
            <Input
            label="Name"
            name="name"
            register={register}
            placeholder="Enter Name..."

            />
            <br />

            <Input
            label="Email"
            name="email"
            type="email"
            register={register}
            placeholder="Enter Email..."
             />
            <br />

            <Input
            label="Password"
            name="password"
            type="password"
            register={register}
            placeholder="Enter Password..."
             />
             <br /><br />

            {error.length > 0 && <div>{error}</div>}

             <div className="flex justify-center">
                <button
                type="submit"
                className="font-bold w-1/2 text-white text-2xl rounded-2xl p-2 bg-green-600"
                >
                    LOGIN
                </button>
            </div>
        </form>
    </div>
    
          </div>
        </div>
  )
}

export default Login


