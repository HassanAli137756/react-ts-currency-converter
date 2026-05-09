
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { logout } from "../Redux/AuthSlice"
import Input from "../components/Input"




function Logout()
{
    const [error, setError] = useState<string>('')
    const [targetedCaptcha, setTargetedCaptcha] = useState<string>('')
    const dispatch = useDispatch()
    const {handleSubmit, register} = useForm()
    const navigate = useNavigate()


    useEffect(() =>
    {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
        let pendingCaptch = ''
        for(let a=1; a<9; a++)
        {
            const randomNumber = Math.floor(Math.random() * letters.length)
            pendingCaptch += letters.charAt(randomNumber)
        }

        setTargetedCaptcha(pendingCaptch)


    }, [])


    const deleteAccout = (data: any) =>
    {
        if(targetedCaptcha === data.captcha)
        {
            dispatch(logout())
            navigate('/login')
        }
        else
        {
            setError('There is an unknown error please try later')
        }
    }

  return (
    <div>
        <div className="flex justify-center">
        <div className="bg-black/50 rounded-2xl p-13">
                
        <div className="flex justify-center">

            <div className="font-bold text-3xl italic text-cyan-900">Enter Captcha To LogOut</div>

        </div>
        <br /><br />

        <div className="rounded-2xl p-15 ">
        <div className="font-bold text-2xl select-none bg-white text-black rounded-2xl p-2 ">
            {targetedCaptcha}
        </div>

        <br />

        <form onSubmit={handleSubmit(deleteAccout)}>
            <Input 
            name="captcha"
            register={register}
            placeholder="Type Captcha..."
            label="Captcha"   
            />
            <br />
            {error.length > 0 && <div className="font-semibold text-red-700 text-lg">{error}<br/></div>}
            <div className="flex justify-center">
                <button
                type="submit"
                className="font-bold w-1/2 text-2xl rounded-2xl p-2 text-black bg-red-600"
                >
                    LOGOUT
                </button>
            </div>
        </form>
        </div>
    </div>
    
            </div>
        </div>
  )
}

export default Logout




