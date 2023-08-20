import './App.css'
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom';
import img4 from './images/gaming.jpg'
function Navbar(){
    const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
    return (
        <div>
        <nav className="  navbar navbar-expand-lg bg-body-tertiary">
  <div className="login container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className=" three collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto d-inline-flex p-3 text-light bg-dark">
        <li className="nav-item ">
        <a className=" ok nav-link active" aria-current="page" href="#"></a>
           <NavLink to="/home">Home</NavLink>
        </li>
        <li className=" god nav-item p-3">
          <a href="#"></a>
          <NavLink to="/Link">Stocks</NavLink>
        </li>
        <li className="nav-item dropdown p-2 badge bg-primary text-wrap">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu ">
            <li><a className="dropdown-item" href="#"></a></li>
          <NavLink to="/Action">Nify 50</NavLink>
            <li><a className="dropdown-item" href="#"></a></li>
          <NavLink to="/Anotheraction">Sensex</NavLink>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#"></a></li>
            <NavLink to="/Somethingelse">Something else</NavLink>
          </ul>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className=" loggo d-flex" role="search">
        {/* <input className="form-control me-2" type="logout" placeholder="logout" aria-label="logout"/> */}
        {/* <button className="btn btn-outline-success" type="submit">logout</button> */}
        {
  isAuthenticated && (
    <div className="foursome">
      <img src={user.picture} alt={user.name} />
      <div className="name">
        <h2>Welcome!!!!</h2>
      <h2>MR/MRS {user.name}</h2>
      </div>
      <div className="email">
      <p>{user.email}</p>
      </div>
    </div>
  )
}
{
    isAuthenticated ? (
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</button>
                ):  
                (
        <button onClick={() => loginWithRedirect()}>Log In</button>
        
                )
}
      </form>
      
    </div>
  </div>
</nav>
<div className="logo4">
  <div>
  <second className="clock">
    <div className="seconds">
      <div className="minutes">
        <div className="minute">
          <div className="hour">
          </div>
        </div>
      </div>
    </div>
  </second>
  </div>
  <div className="name2">
<h1> Hi!!!!! Experts </h1>
<h1>Myself Debajyoti Roy</h1>
</div>
</div>
</div>

    )
}
export default Navbar;