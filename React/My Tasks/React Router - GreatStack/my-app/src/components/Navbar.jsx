import React from "react";
// import { Link } from "react-router-dom";
import { NavLink,useNavigate } from "react-router-dom"; 


const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className="navbar">
      <h1>My App</h1>
      <ul >
       <NavLink to="/"><li>Home</li></NavLink>
       <NavLink to="/about"><li>About</li></NavLink>
       <NavLink to="/contact"><li>Contact</li></NavLink>
       <NavLink to="/product"><li>Product</li></NavLink>
       <NavLink to="/jobs"><li>Jobs</li></NavLink>


       {/* 
       <Link to='/'><li>Home</li></Link>
       <Link to='/about'><li>About</li></Link>
       <Link to='/contact'><li>Contact</li></Link>
       <Link to='/product'><li>Product</li></Link>
       
       */}
      </ul>
      <button onClick={() => navigate("/about", { replace: true })}>Get Started</button>
    </div>
  );
};

export default Navbar;
