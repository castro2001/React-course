import { useReducer } from "react";
import { useForm } from "../hooks/useForm";


const initialState=[{
    id:new Date().getTime(),
    tarea:'Entender Reduce',
    finalizado: false
}]


//TTipo || Payload
const tareaReducer = (state = initialState,action = {})=>{
    // if(action.type === '[Tarea] Agregar Tarea'){
    //     return [...state,action.payload]
    // }
    switch (action.type) {
        case '[Tarea] Agregar Tarea':
            return [...state,action.payload]
            case '[Tarea] Finalizar Tarea':
            return state.map(tarea=>{
                
                if(tarea.id === action.payload)
                {
                    return{
                        ...tarea,
                        finalizado:!tarea.finalizado
                    }
                }
                return tarea;
            });
           
        case '[Tarea] Eliminar Tarea':
            console.log('Eliminar Tarea');
            return state.filter(tarea => tarea.id != action.payload)
        case '[Tarea] Borrar Tarea':
         
            return []
    
        default:
          return state;
    }
}

//console.log(tareaReducer(initialState,addTarea));

/* concepto generakkk seria manntenne mi logicaa separar de mmi componente */ 

export const ListaTarea = () => {

    const {tarea,formState,onInputChange}=useForm({tarea:''});

    const [state, dispatch] = useReducer(tareaReducer, initialState)

    const agregarTarea = (e)=>{
        e.preventDefault();
        if(formState.tarea === '') return
        const tarea={
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizado:false
        }

        const action = {
            type: '[Tarea] Agregar Tarea',
            payload: tarea

        }
        dispatch(action)  
    }

    const finalizarTarea = ({id})=>{

     
        const action = {
            type: '[Tarea] Finalizar Tarea',
            payload: id

        }
        dispatch(action)  
    }
    const eliminarTarea = ({id})=>{
        const action = {
            type: '[Tarea] Eliminar Tarea',
            payload: id

        }
        dispatch(action)  
    }

    const resizeTo = () =>{
        const action = {
            type: '[Tarea] Borrar Tarea',
            payload: ''

        }
        dispatch(action) 
    }

  return (
    <>
    <h1>Lista Tarea  <b>Reduce</b> </h1>
    
    <form onSubmit={agregarTarea} method="post">
      <div className="mb-3">
      <input 
            className="form-control" 
            type="text" 
            name='tarea'
            value={tarea}  
            placeholder="Agregar Tareaa"
            onChange={onInputChange}
            />
      </div>

      <div className="btn-group">
        <button type="submit" className="btn btn-primary">Enviar</button>
        <button type="button" className="btn btn-danger" onClick={resizeTo}>Borrar</button>

      </div>
    </form>
    
    <ul className="list-group mt-5">
        {
            state.map( item =>{
               return(
                   <li className="list-group-item d-flex justify-content-between" key={item.id}>
                     <div>
                     <span className="m-4"> {item.finalizado ? '✅' :'❌'}</span>
                     <span className="m-4"> {item.tarea}</span>

                     </div>
                    
                    <div>
                    <input 
                        className="form-check-input mt-0"
                         value={item.finalizado} 
                         type="checkbox" 
                         onChange={()=>finalizarTarea(item)} />
                    
                    <button type="button" className="btn " onClick={()=>eliminarTarea(item)}> 🗑</button>
                    </div>

                

                   </li>
               )
            })
        }

    </ul>
    </>
  )
}
