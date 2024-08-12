import React, { useState } from 'react'
//componentte hijo envia la informacion al componennte padre
export const AgregarTareaComponent = ({agregarTarea}) => {
    
    
    const [inputValue,setInputValue]=useState('');
    const handleInputChange = (event)=>{
        setInputValue(event.target.value)
    }

    const onSubmitForm = (e)=>{
        
        e.preventDefault()
    agregarTarea( inputValue);
}
 /* 
 fue communicaacion enttre componenttess donde al componente hijo es agregar tarea
 ccreaamos una props para poder ccapturar llla informmacion del padre 
 es LisTComponent 
 despuess buildamos 
 agggreg

 Info desde el hijo
 
 
 
 */       
  return (
  <>
    <form onSubmit={onSubmitForm} method="post">
        <input type="text" 
         placeholder="Nombre" 
         value={inputValue}
        onChange={handleInputChange}
         />
        
    </form>
    </>
  )
}
