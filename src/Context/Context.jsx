import { createContext ,  useState } from "react";

const Context = createContext()

const  ContextProvider = ({children}) =>{
    const [lan ,setLan] = useState( localStorage.getItem("lang") || "ru" )
    return(
        <Context.Provider value={{lan , setLan}} >
            {children}
        </Context.Provider>
    )
}

export {Context , ContextProvider}