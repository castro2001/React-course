import { useState,useMemo } from "react";


export const CalculosComponent = () => {
    const [listadoNumero, setListadoNumero] = useState([2,4,6,8,10,12,14]);
    const [show, setShow]= useState(true);


    const getCalculo = (listadoNumero) => useMemo(()=>{
        
        return listadoNumero.reduce((a,b)=> a*b) 
    },[listadoNumero]);



    const agregarNumero = () =>{
        setListadoNumero([...listadoNumero, listadoNumero[listadoNumero.length - 1]+1])
     }


  return (
    <>
    <h2>Calculo</h2>
    <p>{getCalculo(listadoNumero)}</p>

    <button className=  { show ? 'btn btn-warning':'btn btn-secondary'} onClick={()=> setShow(!show)}>{show ? 'Show':'Hide'}</button>
    <button className="btn btn-outline-success" onClick={()=> agregarNumero()}>Agregar Numero</button>
    </>
  )
}
