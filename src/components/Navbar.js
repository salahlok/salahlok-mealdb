import {Link} from 'react-router-dom'
import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';


const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <p className='logo'>
              <Link to='/'>RECIPE</Link>
          </p>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">ABOUT</Link>
            </li>
            <li>
                <Link to="/categories">Category</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>        
      </div>
    </nav>
  );
};

export default Navbar;
