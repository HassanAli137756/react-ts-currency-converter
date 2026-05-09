

import { type UseFormRegister, type FieldValues } from 'react-hook-form';


interface InputProps
{
    label?: string
    placeholder?: string
    name?: string
    type?: string
    classes?: string
    register?: UseFormRegister<FieldValues>
}


function Input({classes, label, type,  name, placeholder, register}:InputProps)
{
  return (
    <div>
        {label && label.length > 0 &&
        <div>
            <div className='flex justify-start text-black font-bold text-2xl'>

                <label htmlFor={label}>{label}</label>

            </div>
        </div>
        }
        <input 
        
        type={type ? type : 'text'}
        placeholder={placeholder ? placeholder : undefined}
        id={label ? label : undefined}
        {...(register ? register(name ? name : '', {required: 'This field is required'}) : console.log('No register provided'))}
        className={`font-bold rounded-2xl w-full p-2 pl-1 text-xl bg-white text-black ${classes}`}

        />
    </div>
  )
}

export default Input

