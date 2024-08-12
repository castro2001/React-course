import { useForm } from "../hooks/useForm";
import { useContext } from "react"
import { UserContext } from "../context/UserContext";
export const LoginScreen = () => {
    const initialForm = {
        username:'',
        email: '',
        color:'',
        pet:''
    }

    const {setUser} = useContext(UserContext);

const {username,email,color,pet,onInputChange,formState}=useForm(initialForm);

    const handleLogin = (event)=>{
        event.preventDefault()
        console.log(formState);
        setUser(formState)
    }

  return (
    <>
    
    <form className="container" onSubmit={handleLogin} >

        <div className="mb-3">
            <label htmlFor="labelUsername" className="form-label">Nombre</label>
            <input
                type="text"
                className="form-control"
                id="labelUsername"
                name="username"
                autoComplete="true"
                value={username}
                onChange={onInputChange}
                
            />
        </div>

        <div className="mb-3">
            <label 
                htmlFor="labelEmail" 
                className="form-label">Email </label>
            <input 
                type="email" 
                className="form-control" 
                id="labelEmail"
                name="email" 
                placeholder="Enter email"
                autoComplete="true"
                value={email}
                onChange={onInputChange}
            />
        </div>

        <div className="mb-3">
            <label htmlFor="labelcolor" className="form-label">Color Favorito</label>
            <input
                type="text"
                className="form-control"
                id="labelcolor"
                name="color"
                autoComplete="true"
                value={color}
                onChange={onInputChange}
            />
        </div>   
        
         <div className="mb-3">
            <label htmlFor="labelpet" className="form-label">Mascota </label>
            <input
                type="text"
                className="form-control"
                id="labelpet"
                name="pet"
                autoComplete="true"
                value={pet}
                onChange={onInputChange}
            />
        </div>


       

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    
    </>

  )
}
