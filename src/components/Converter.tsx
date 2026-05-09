
import { useEffect, useState } from "react"
import CustomOption from "./CustomOption"
import { useDispatch, useSelector } from "react-redux"
import { addConversion } from "../Redux/ConversionHistory"
import type { loginStructure } from "../Redux/AuthSlice"

interface APIResponse
{
  result: 'success' | 'Fail'
  base_code: string
  rates: {[key: string]: number}
  status: boolean
}


import {} from 'react-hook-form'


export function Converter()
{ 
    const userData: loginStructure = useSelector((state:any) => state.authReducer.loginData)
    const [apiData, setAPIData] = useState<APIResponse>({base_code: '', rates: {}, result: 'success', status: false})
    const [from , setFrom] = useState<string>('USD')
    const [error, setError] = useState<string>('')
    const [to, setTo] = useState<string>('PKR')
    const [loading, setLoading] = useState<boolean>(true)
    const [newConversion, setNewConversion] = useState<boolean>(false)
    const  [convertedValue, setConvertedValue] = useState<number>(0)
    const [valueToConvert, setValueToConvert] = useState<number>(0)
    const dispatch = useDispatch()


    useEffect(() => {
      const data = async() =>
    {
      try 
      {
        setError('')
        setLoading(true)
        const data = await fetch(`https://open.er-api.com/v6/latest/${from}`)

        if(data)
        {
            
            const jsondata = await data.json()

            if(jsondata['result'] == 'success')
            {
                setError('')
                setAPIData({base_code: jsondata['base_code'], rates: jsondata['rates'], result: 'success', status: true})
            }
            else
            {
                setError('There is an unknown error')
                setAPIData(prev => ({...prev, result:'Fail', status: false}))
            }
            
        }
        else
        {
            setError('There is an unknown error')
            setAPIData(prev => ({...prev, result:'Fail', status: false}))

        }


      }

      catch(error)
      {

        setError('There is an unknown error make sure your internet connection')
        setAPIData(prev => ({...prev, result:'Fail', status: false}))

           
      }
      finally
      {
        setLoading(false)
      }
                
    }

    data() 

    }, [from])


    const handleConversion = () =>
    {
        if(valueToConvert == undefined || valueToConvert == null)
        {
            setError('Please enter a valid number')
        }
        else if(loading)
        {
            setError('Please wait data is loading')
        }
        else if(apiData.result == 'Fail' || !apiData.status)
        {
            setError('There is an unknown error please make sure your internet connection')
        }
        else
        {
            setError('')
            const result = valueToConvert * apiData['rates'][to]
            setConvertedValue(result)
            if(newConversion)
            {
                dispatch(addConversion({convertedValue: result, fromCountry: apiData.base_code, priceOfFrom: apiData['rates'][to], toCountry: to, valueToConvert: valueToConvert}))
            }
            setNewConversion(false)

        }
    }


    
    

    return(
    <div>
        <div className="flex pl-3 justify-start">
            <div className="font-bold text-2xl ">
                WELL-COME <span className="italic text-pink-500">{userData.name}</span>
            </div>
        </div>
        <br /><br />
        <div className="flex justify-center">
            <div className=" font-bold text-3xl italic text-cyan-700 ">
                Convert Your Currency Into Other Currency
            </div>
        </div>
        <br /><br /><br />
        <div className="flex justify-center">

            <div className="flex justify-between w-1/2 ">
                <div>
                    <div className="font-bold text-2xl">From &nbsp;</div>
                    <select
                    className="rounded-2xl p-3 bg-black text-green-600 font-bold"
                    value={from}
                    onChange={(e) => (setFrom(e.target.value), !newConversion && valueToConvert > 0 ? setNewConversion(true) : null)}

                    >
                        {apiData['result'] == 'success' && apiData['status'] ? <CustomOption /* onChange={toSetter} */ selectedValue={from} options={Object.keys(apiData['rates'])} /> : loading ? <option>Loading...</option> : <option>Error</option>}
                    </select>
                </div>

                <div>
                    <div className="font-bold text-2xl">To &nbsp;</div>
                    <select
                    className="rounded-2xl p-3 bg-black text-green-600 font-bold"
                    value={to}
                    onChange={(e) => (setTo(e.target.value), !newConversion && valueToConvert > 0 ? setNewConversion(true) : null)}

                    >
                        {apiData['result'] == 'success' && apiData['status'] ? <CustomOption  selectedValue={to} options={Object.keys(apiData['rates'])} /> : loading ? <option>Loading...</option> : <option>Error</option>}
                    </select>
                </div>
            </div>
             </div>
            <br /><br />

            <div className="flex justify-center">
                <div>
                    <input
                    className=" font-bold text-2xl bg-gray-700 text-white rounded-2xl p-2 pl-3 "
                    value={valueToConvert}
                    onChange={(e) => (setValueToConvert(Number(e.target.value)), !newConversion ? setNewConversion(true) : null)}
                    type="number" />
                </div>
            </div>
            <br /><br />
            <div>
                <div className="flex justify-center">
                    <button 
                    onClick={() => handleConversion()}
                    className={`rounded-2xl font-bold bg-black p-2.5 text-white w-1/4 text-2xl ${loading ? 'bg-gray-500 text-black/50' : ''} `}
                    >
                        {loading ? 'Loading...' : apiData.result == 'success' ? 'Convert' : 'Error'}
                    </button>
                </div>
            </div>
            {error.length > 0 && <div className="font-bold italic text-2xl text-red-700">{error}</div>}
            <br />
            <div className="flex justify-center">
                <div className="font-bold text-2xl italic text-green-600">
                    ConvertedValue: <span>{convertedValue}</span>
                </div>
            </div>
            

        
    </div>
    )
    
}





