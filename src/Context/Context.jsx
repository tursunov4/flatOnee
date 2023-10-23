import { createContext ,  useContext,  useState } from "react";

const Context = createContext()

const  ContextProvider = ({children}) =>{
    const [aboutside , setAboutSide] = useState(false)
    const [lan ,setLan] = useState( localStorage.getItem("lang") || "ru" )
    const [refi , setRefi] = useState(false)
    return(
        <Context.Provider value={{lan , setLan , refi ,setRefi , aboutside , setAboutSide}} >
            {children}
        </Context.Provider>
    )
}

export {Context , ContextProvider}