import { useState } from "react"
import { UserList } from "./UserList";


export const UsersComponent = () => {
    const [endpoint,setEndpoint]= useState('users');

const handleFetch = ()=>{
    setEndpoint('comments')
}
    return (
        <>
             <h1>Este capitulo vamos a hablar sobre el useEfectt</h1>
            <p>comunicar a un api y usaremos usestate para controlar 
            el endpoint dependiendo se muestre la inforrmacionn</p>

                <UserList endpoints={endpoint} />
            
                <br /><br />
                <button onClick={handleFetch}>show commentari api</button>
        </>
    )
}
