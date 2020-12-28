import axios from 'axios'

class Postier {
    getComments(api,setCommentaires){

        axios.get(api+"/commentaires").then( res=>{
                const result = res.data
                console.log({result})
                setCommentaires(result)
            }).catch(err=>{
                setCommentaires([])
                console.log({err,api})
            })

    }

    createComment(api,text,token,users_permissions_user){
        axios.post(api+"/commentaires",{text,users_permissions_user},{
            headers: { Authorization: `Bearer ${token}` }
        }).then(res=>{
            alert("success")
        }).catch(err=>{
            alert("erreur! "+token)
            console.log(err)
        })
    }
}

export const postier = new Postier()