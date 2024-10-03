import { createContext, useState } from 'react'
import App from './App'
export const multiData = createContext()

const Store = () => {
    const [inputData, setinputData] = useState([])
    const [total, setTotal] = useState([])
    
    function handelSubmit() {
        setTotal([...total, inputData])
        alert("Form submited successfully")
        setinputData("")
     
    }
    return (
        <div>
            <multiData.Provider value={{ inputData, setinputData, total, setTotal, handelSubmit }}>
                <App />
            </multiData.Provider>
        </div>
    )
}

export default Store
