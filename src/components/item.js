import React from 'react'

const Item = ({checkAction, list ,index}) => {

    
    
    return <>

        <div className="bg-red-300 px-2 py-3 rounded-md mb-2" key={index}> 
            <div className="flex items-center">
                <div className="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                    <input onClick={()=>checkAction(list.id)} type="checkbox" class="opacity-0 absolute"/>
                    <svg className={`fill-current ${list.complete ? 'block' : 'hidden'} w-4 h-4 text-green-500 pointer-events-none`} viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                </div>
                <p className="ml-1 font-bold text-white">{list.title}</p>
            </div>
        </div>
    </>
}

export default Item