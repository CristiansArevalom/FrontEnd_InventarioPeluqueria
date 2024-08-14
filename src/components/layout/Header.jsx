import logo from '../../assets/react.svg';
import { NavLink } from "react-router-dom";
export const Header = () => {
    return(
        
       <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom text-light bg-dark ">
      <div className="col-md-3 mb-2 mb-md-0">
        <NavLink to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
        <img src={logo} alt="logo" className="logo-img" />
        </NavLink>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><NavLink to="" className="nav-link px-2 link-secondary">Home</NavLink></li>
        <li><NavLink to="/products" className="nav-link px-2">Productos</NavLink></li>
        <li><NavLink to="#" className="nav-link px-2">Pricing</NavLink></li>
        <li><NavLink to="#" className="nav-link px-2">FAQs</NavLink></li>
        <li><NavLink to="#" className="nav-link px-2">About</NavLink></li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <button type="button" className="btn btn-primary">Sign-up</button>
      </div>
    </header>

    )
}