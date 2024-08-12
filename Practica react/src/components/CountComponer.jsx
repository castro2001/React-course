import { useState } from "react";
import PropTypes from 'prop-types';

export const CountComponer = ({value}) => {
    // nombre de la constante || metodo de la constante
    const [count,setCount] = useState(value)
    const handleClick=()=>{
        setCount(count+1)
        
      }
    return (
    <>
    <div>
    <h1>Eventos de react</h1>
    <p>Uso de hooks en react uso de useState , eventos </p>
    
    <b>{count}</b>
    <br />
    <button type="button" onClick={handleClick} >Click</button>


    </div>
    </>
  )
}

CountComponer.propTypes={
    value: PropTypes.number
}