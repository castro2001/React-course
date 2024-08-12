import { Navigate, Route, Routes } from "react-router-dom"
import { NavigateComponent } from "./components/NavigateComponent"
import { HomeScreen } from "./routes/HomeScreen"
import { AboutScreen } from "./routes/AboutScreen"
import { ContactScreen } from "./routes/ContactScreen"
import { UserProvider } from "./context/UserProvider"
import { LoginScreen } from "./routes/LoginScreen"

export const App = () => {
  return (
   <UserProvider>

    <NavigateComponent/>
    {/* Definiendo llass rutaass  */}
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="/About" element={<AboutScreen></AboutScreen>}></Route>
        <Route path="/Contact"element={<ContactScreen></ContactScreen>}></Route>
        <Route path="/Login"element={<LoginScreen></LoginScreen>}></Route>
        <Route path="/*" element={<Navigate to='/' />}></Route>

      </Routes>
   </UserProvider>
  )
}

