import * as React from 'react'

const {useState,useContext} = React

import { MainContext } from '../../context/MainContext'
import {postier} from './Postier'

export function Login() {

    const {api,setToken,username, setUsername, setId_user} = useContext(MainContext)
    const [password, setPassword] = useState("")

    const login = ()=>{
        postier.login(api,username,password,setToken,setId_user)
    }

    return (
        <div className="Form">
            <input type="text" value={username} onChange={e=>{setUsername(e.target.value)}}/>
            <input type="password" value={password} onChange={e=>{setPassword(e.target.value)}}/>
            <button onClick={login}>connexion</button>
        </div>
    )
}
