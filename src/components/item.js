import React from 'react'

const Item = ({checkAction, list ,index}) => {

    
    
    return <>
        <div className="bg-custom-pink-level-3 text-white px-2 py-3 rounded-md mb-2" key={index}> 
            <div>
                <label className="inline-flex items-center">
                    <input type="checkbox" onClick={()=>checkAction(list)} className="form-checkbox text-green-500 h-5 w-5" checked={list.complete}/>
                    <span className="ml-2 font-bold text-xl">{list.title}</span>
                </label>
            </div>
        </div>
    </>
}

export default Item