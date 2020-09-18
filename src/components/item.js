import React from 'react'

const Item = ({deleteItem, checkAction, list ,index}) => {

    
    
    return <>
        <div className="bg-custom-pink-level-3 divide-y text-white px-4 py-3 rounded-md mb-2" key={index}> 
            <div className="flex justify-between items-center py-2">
                <div>
                    <label className="inline-flex items-center">
                        <input type="checkbox" onClick={()=>checkAction(list)} className="form-checkbox text-green-500 h-5 w-5" checked={list.complete}/>
                        <span className="ml-2 font-bold text-xl">{list.title}</span>
                    </label>
                </div>
                <div>
                    <button onClick={()=>deleteItem(list)} className="bg-custom-red focus:outline-none px-2 rounded">-</button>
                </div>
            </div>
            <div className="py-2">
                <h1>alguna descripción</h1>
            </div>
        </div>
    </>
}

export default Item