import { createContext ,  useState } from "react";

const Context = createContext()

const  ContextProvider = ({children}) =>{
    const [lan ,setLan] = useState( localStorage.getItem("lang") || "ru" )
    const [refi , setRefi] = useState(false)
    return(
        <Context.Provider value={{lan , setLan , refi ,setRefi}} >
            {children}
        </Context.Provider>
    )
}

export {Context , ContextProvider}