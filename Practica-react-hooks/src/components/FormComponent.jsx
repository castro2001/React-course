import { useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";


export const FormComponent = () => {
    // hook useRef guarddar una refernciaa del emelemento del dom gguardarlo a una var para usarlo paara algo
    const focusRef = useRef()
    
    const initialForm = {
        username:'',
        email: '',
        password:''
    }
    const {username, email,password,onInputChange,formState}=useForm(initialForm);

    const onSubmit = (e)=>{
        e.preventDefault();;
        console.log(formState);
        
    }

    useEffect(() => {
      focusRef.current.focus()
    
     
    }, [])
    
/*useMemo me permite no se repita cada componente , memorisar 
permite que no se vuelva a redibbujar el componente asi ayudammente aa no gaaste mmuchos reccursos
*/

  return (
    <form className="container" onSubmit={onSubmit} >

        <div className="mb-3">
            <label htmlFor="labelUsername" className="form-label">Name</label>
            <input
                ref={focusRef}
                type="text"
                className="form-control"
                id="labelUsername"
                name="username"
                value={username}
                  autoComplete="true"
                onChange={onInputChange}
             />

        </div>

        <div className="mb-3">
            <label 
                htmlFor="labelEmail" 
                className="form-label">Email address</label>
            <input 
                type="email" 
                className="form-control" 
                id="labelEmail"
                name="email" 
                placeholder="Enter email"
                value={email}
                autoComplete="true"
                onChange={onInputChange}
             />

        </div>

      

        <div className="mb-3">
            <label htmlFor="labelPassword" className="form-label">Password</label>
            <input 
                type="password"
                className="form-control" 
                id="labelPassword"
                name="password"
                value={password}
                onChange={onInputChange}
                />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    
    
  )
}
