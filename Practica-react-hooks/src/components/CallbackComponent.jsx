import { Incrementar } from "./Incrementar"
import { useCallback, useState } from "react"

export const CallbackComponent = () => {
    const [count,setCount]=  useState(0)
    const incrementarPadre = useCallback(
        (valor)=>{
            setCount(contador => contador +valor)
        },[]
    )//memmorzar funciones
     
       
  
    return (
   <>
   <h1>{count}</h1>
   <Incrementar increment={incrementarPadre}></Incrementar>
   </>
  )
}
