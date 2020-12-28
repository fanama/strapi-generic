import axios from 'axios'

class Postier {

    login(api,identifier,password,setToken,setIdUser){
        axios.post(api+"/auth/local",{identifier,password}).then(res=>{
            const {jwt,user} = res.data
            console.log({user})
            setToken(jwt)
            setIdUser(user.id)
        }).catch(err=>{
            alert("erreur")
        })
    }

}

export const postier = new Postier()