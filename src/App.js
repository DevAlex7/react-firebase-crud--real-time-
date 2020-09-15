import React, { useState, useEffect } from 'react';
import Input from './components/input'
import List from './components/list'
import { db } from './services/firebase'

function App() {

    useEffect(()=> {

    })    

    const [state, setState] = useState({
        title: '',
        error : ''
    })

    const handleTitle = (value) => {
        
        if (!value) {
            setState({
                error : 'Ingrese un titulo'
            })
        } else {
            setState({
                title : value
            })
        }
        
    }

    const createItemList = () => {
        try {
            const item = {
                title : state.title,
                complete : false
            }
            
            db.push(item)
        } catch (error) {
            console.log(error)
            setState({
                error : error
            })
        }
    }

    return (
        <div className="w-full h-full p-10">
            <div className="flex flex-wrap">
                
                <div className="w-full md:w-1/2">
                    <Input
                    value={state.title}
                    label="Agregue un item a su lista"
                    handleAction={handleTitle}
                    placeholder="Item"
                    error={state.error} 
                    />
                    <button onClick={createItemList} className="my-2 bg-red-500 px-3 py-2 rounded-md text-white"> Ingresar </button>
                </div>

                <div className="w-full md:w-1/2">
                    <List />
                </div>
            </div>
        </div>
    );
}

export default App;
