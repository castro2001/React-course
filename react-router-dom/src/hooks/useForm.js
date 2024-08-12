import { useState } from "react"

export const useForm = (initialForm = {}) => {
    const [formState, setformState] = useState(initialForm)
    
    const onInputChange =({target})=>{
        const {value, name} = target
        setformState({
            ...formState,
            [name]:value
        })
        
    
    }
  
    return{
        ...formState,
        formState,
        onInputChange
    } 
}
