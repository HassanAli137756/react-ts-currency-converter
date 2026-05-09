
import { useDispatch } from "react-redux"
import { deleteConversion, type ConversionsHistory } from "../Redux/ConversionHistory"


interface HistoryProps
{
    histories: ConversionsHistory[]
}


function HistoryCard({histories}:HistoryProps) 
{
    const dispatch  = useDispatch()

  return(
    <div>
        <div  className="grid grid-cols-3 gap-4">
        {
            histories.map(history =>
            {
                return(
                <div key={history.id}>
                    <div  className=" rounded-2xl pl-2 bg-black p-6 flex justify-center ">
                    <div>

                        <div>
                            <div className="font-bold text-2xl italic underline text-green-500">
                                Date: &nbsp; <span>{history.date}</span>
                            </div>
                        </div>
                        <br />

                        <div className="font text-white/50 font-semibold text-xl  ">
                            <div>From-Country: &nbsp;&nbsp; <span>{history.fromCountry}</span></div> <br />
                            <div>To-Country: &nbsp;&nbsp; <span>{history.toCountry}</span></div> <br />
                            <div>Input-Currency: &nbsp;&nbsp; <span>{history.valueToConvert}</span></div> <br />
                            <div className="font-bold text-indigo-500 italic">Result: &nbsp;&nbsp; <span>{history.convertedValue}</span></div> <br />
                        </div>
                        <br />
                        <div className="flex justify-center">
                            <button 
                            onClick={() => dispatch(deleteConversion(history.id))}
                            className="font-bold bg-red-600 rounded-2xl p-3 w-1/2 ">
                                Delete
                            </button>
                        </div>

                    </div>
                </div>
                </div>
                )
            }
            )
        }
    </div>
    </div>
  )
}

export default HistoryCard


