import { ReactNode, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext"

interface props{
    children:ReactNode
}

const AutoLogin= ({children}: props) =>{

    const{setUser, getUser, user}= useContext(UserContext)
    const navigate= useNavigate()
    
    useEffect(()=> {
        const token= localStorage.getItem("@COMPILE:token")
        const id= localStorage.getItem("@COMPILE:id")

       console.log("token", token)
       console.log("id", id)

        async function testToken(){
            if(!id){
                return 
            }
          const user= await getUser(+id)
          if(user){
            setUser(user)
            console.log("USER",user)
        }
        else{
            return navigate("/login")
        }
        }
        testToken()
       
    },[])
    return(
        <>
        {children}
        </>
    )
}

export default AutoLogin