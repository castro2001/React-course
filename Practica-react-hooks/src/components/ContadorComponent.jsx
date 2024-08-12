import { useCounter } from "../hooks/useCounter"

export const ContadorComponent = () => {

   const { count,increment,decrement,reset}=  useCounter(0);


  return (
   <>
   <h1>Contador: {count}</h1>
   <div className="btn-group">
   <button className="btn btn-success"  onClick={()=> increment()} >+1</button>
   <button className="btn btn-warning"  onClick={()=> reset(false)} >Reset</button>
   <button className="btn btn-danger"  onClick={()=> decrement() } >-1</button>   
   </div>
    
   </>
  )
}
