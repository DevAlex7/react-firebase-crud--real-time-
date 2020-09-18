import React from 'react'

const Input = ({value, label, handleAction, placeholder, error}) => {
    
    return <>
        <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    {label}
                </label>
                <input defaultValue={value} onChange={(event)=>handleAction(event.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder={placeholder}/>
                <p className="text-red-500 text-xs italic">{error ? error : value}</p>
            </div>
        </div>
    </>
}

export default Input