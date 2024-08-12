import { useState } from "react"
import { UserContext } from "./UserContext"
/*
const user={
    name:'Jhon',
    email: "john@mail.com",
    color: "red",
    pet:'Perro'
}
*/

export const UserProvider = ({children}) => {
  const [user, setUser] = useState({})
  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}
