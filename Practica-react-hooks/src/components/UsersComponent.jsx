import { useFetch } from "../hooks/useFetch"

export const UsersComponent = () => {
const {data,isLoading,errors} = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <>
    <h1>Lista de usuarios</h1>
    {
        isLoading ? <h4>Cargando...</h4> :
        errors ? <p className="text-danger">Ha Ocurrido un error {errors}</p>
        :         
        <table className="table table-hover table-striped table-light">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>

          {
            data.map( user=>{
            return(
              <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
            )
            })
          }
          

        </tbody>
      </table>

    }
  

    </>
  )
}
