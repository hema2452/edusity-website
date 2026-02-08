import React, { useEffect, useState} from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom'
import menu from "../../assets/menu-icon.png"

const Navbar = () => {

  const navigate = useNavigate();
  const[showNavbar, setShowNavabar] = useState(false)
  const[showMenu, setShowMenu]  = useState(false)
  
  function  handleMenu(){
    setShowMenu(prev => !prev)
  }
  
  useEffect(()=>{
   window.addEventListener('scroll',()=>{
      window.scrollY >500 ? setShowNavabar(true) : setShowNavabar(false);
   }) 
   },[])
   const handleForm  = () => {
      navigate("/contact")
    }

  return (
    <>
    <header>
        <nav className={`nav-container container  ${showNavbar ? 'navbar' :' '}`}>
            <Link to="/"><img src={logo} alt="icon" /></Link>
            <img src={menu} alt="menu-image" className="menu-icon" onClick={handleMenu}/>
            <ul className={showMenu ?`hide-li` : ""}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/program">Program</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/campus">Capmus</Link></li>
                <li><Link to="testimonial">Testimonial</Link></li>
                <li><button onClick={handleForm} className='btn'>Contact Us</button></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar