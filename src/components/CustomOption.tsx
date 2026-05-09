
import { nanoid } from "@reduxjs/toolkit"

interface OptionProps
{
    options: string[]
    selectedValue: string


}



function CustomOption({options}:OptionProps)
{
    
            return(
            options.map(value =>
            {
                return(
                    <option 
                    // onChange={(e) => onChange(e.target.value)}
                    key={nanoid(8)} 
                    className="font-bold bg-black text-green-500 "
                    value={value}
                    
                    >
                        {value}
                    </option>
                )
            }
            ))
}


export default CustomOption


