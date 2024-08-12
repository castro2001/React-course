import { useState } from "react"
import { AgregarTareaComponent } from "./AgregarTareaComponent"
//# Estte es el componente padre que recibe loss valores del hijo lo procesa la logica
 const Items = ({nombre, vista})=> {

    return (
      <li> {nombre} 
      
      {vista ? '✅' :'❌'}
      </li>
    )
  }

export  const ListComponent = ()=> {
    let customerList=[
        {id:1,  nombre:'Marco', vista:true},
        {id:2, nombre:'Sofía', vista:false},
        {id:3,nombre:'Santiago', vista:true},
        {id:4,nombre:'Valentina', vista:true},
        {id:5, nombre:'Mateo', vista:false},
        {id:6,  nombre:'Sebastián', vista:true},
        {id:7, nombre:'Regina', vista:true},
        {id:8,   nombre:'María José', vista:false},
        {id:9,  nombre:'Maria', vista:true},
        {id:10,  nombre:'Pérez', vista:false},
        {id:11, nombre:'Florcita ', vista:true},
        {id:12, nombre:'Elena ', vista:true},
    ]
    const [customer,setCustomer]= useState(customerList)
    
    const onAgregarTarea = (val)=>{
      let valor = val.trim()
      if(valor < 1  )return
      const envio = {
        id: customer.length +1,
        nombre : valor,
        vista:false
    }

    setCustomer([...customer,envio]
    )
      
    }

  return (
    <>
    <div>
        <h1>Listado de Temas Cursos</h1>
        <p>Este capittulo hablamos sobre lla comunicaacionnn de componente entre el hijo al padre, ambien usamos el usesstate</p>
            <AgregarTareaComponent agregarTarea={onAgregarTarea}/>
        <ol>
            {
                customer.map(item=>
                 <Items key={item.id}  nombre={item.nombre} vista={item.vista}  />
                )
            }
            </ol>
         
    </div>
    
    </>
  )
}
