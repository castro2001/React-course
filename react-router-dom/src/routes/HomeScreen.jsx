import { useContext } from "react"
import { UserContext } from "../context/UserContext";

export const HomeScreen = () => {
  const {user} = useContext(UserContext);

  return (
    <>
    <div className="container">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Color</th>
      <th scope="col">Pet</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td> {user.username}</td>
      <td>{user.email}</td>
      <td>{user.color}</td>
      <td>{user.pet}</td>
    </tr>

  </tbody>
</table>
    </div>
    </>
  )
}
