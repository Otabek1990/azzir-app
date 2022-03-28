import React,{useState} from 'react';
import './Navbar.css';
import Logo from '../../assets/images/azzirLogo.png'
import { Link } from 'react-router-dom';
function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  function Scroll() {
    if (window !== "undefined") {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else setScrolled(false);
    }
  }
  window !== "undefined" && window.addEventListener("scroll", Scroll);
  return (
    <nav className={scrolled ? "scrolled_nav":""}>
      <div className="nav_left">
        <Link to="/"><img src={Logo} alt="azzirLogo" /></Link>
      </div>
      <div className="nav_right">
        <Link className='link' to ="/azzir-app"> Home</Link>
        <Link className='link'  to ="/about"> About</Link>
        <Link className='link'  to ="/contact"> Contacts</Link>
      </div>
    </nav>
  )
}

export default Navbar;