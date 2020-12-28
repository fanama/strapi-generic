import * as React from 'react'  

const {createContext,useEffect,useState} = React

export const MainContext = createContext(null)

export function MainProvider({children}) {

    const [token, setToken] = useState("")
    const [username, setUsername] = useState("")
    const [id_user, setId_user] = useState()

    const api = "http://localhost:1337"

    return(<MainContext.Provider value={{
        api,
        token,setToken,
        username, setUsername,
        id_user, setId_user
    }}>
        {children}
    </MainContext.Provider>)
}