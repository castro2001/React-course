import { Link, NavLink } from "react-router-dom"


export const NavigateComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link  to='/' className="navbar-brand" >Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Login">Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
