

import type { ConversionsHistory } from "../Redux/ConversionHistory"
import HistoryCard from "./HistoryCard"
import { useSelector } from "react-redux";


function History()
{
    const conversionHistories:ConversionsHistory[] = useSelector((state: any) => state.historyReducer.history)

    console.log(conversionHistories);
    

  return (
    <div>
        <div className=" flex justify-center font-bold text-fuchsia-600 underline text-3xl ">
            <div>Your Conversion History </div>
        </div>
        <br /><br />
        {
            conversionHistories.length > 0 ?
            <div>

                <div className="flex justify-start">
                    <div className="font-bold text-2xl pl-3 italic text-purple-700">
                        Total-Conversions: &nbsp;&nbsp; <span>{conversionHistories.length}</span>
                    </div>
                </div>
                <br /><br />
                <div className="p-2.5">
                    
                <HistoryCard histories={conversionHistories} />

                </div>
            </div>  :

            <div>
                <div className="text-3xl italic font-bold flex justify-center">
                    <div>
                        There is no history available
                    </div>
                </div>
            </div>
        }

    </div>

  )
}

export default History



