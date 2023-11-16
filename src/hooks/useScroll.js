import { useEffect } from "react"

const userScroll = ()=>{
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
    },[])
}



export default userScroll