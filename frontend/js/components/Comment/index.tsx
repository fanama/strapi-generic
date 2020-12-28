import * as React from 'react'

const {useEffect,useContext,useState} = React

import {postier} from './Postier'
import {Login} from '../Login'

import { MainContext } from '../../context/MainContext'

import "./comments.scss"

export function Comment(){

    const {api,token,setToken,username,id_user} = useContext(MainContext)
    const [comentaires, setComentaires] = useState([])
    const [commentaire, setCommentaire] = useState("")
    const [send, setSend] = useState(false)

    useEffect(() => {
        postier.getComments(api,setComentaires)
    }, [api,send])

    const newComment = ()=>{
        postier.createComment(api,commentaire,token,id_user)
        setSend(!send)
    }

    return (
        <div className="comments">

            {(token==""||!token)?<div className="post">
                <h2>Utilisateur</h2>

                <Login />
                
                
            </div>:<div className="post" >
                <h2>{username}</h2>

                <button onClick={()=>setToken("")}>deconnexion</button>
            </div>}

            <div className="list">
                <h2>commentaires</h2>
                <ul>
                    {comentaires.map(com=><div className="element" key={Math.random()}>
                        {com.users_permissions_user?com.users_permissions_user.username:"no user"} : {com.text}
                    </div>)}
                </ul>

                {(token==""||!token)?null:<div className="Form">
                    <textarea id= "comment" value={commentaire} onChange={e=>setCommentaire(e.target.value)}/>
                    <button onClick={newComment} >poster</button>
                </div>}

                

            </div>

            
            
        </div>
    )
}
