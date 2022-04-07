import React, { useEffect, useState } from 'react';
import './Navbar.css';
import bars from '../../images/bars-solid.svg';
import close from '../../images/xmark-solid.svg';
import linkedin from '../../images/linkedin-brands.svg';
import github from '../../images/github-brands.svg';
import email from '../../images/envelope-regular.svg';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <div className='Navbar'>
      <nav>
        <div className='logo'>
          <span className='logo__span'>Petrit</span>Nuredini
        </div>
        {(toggleMenu || screenWidth > 1024) && (
          <ul className='list'>
            <li className='links'>
              <a href='#about'>About</a>
            </li>
            <li className='links'>
              <a href='#projects'>Projects</a>
            </li>
            <li className='links'>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        )}
        <div className='menuIcons'>
          {toggleMenu ? (
            <img
              src={close}
              className='menu__icon'
              onClick={() => setToggleMenu(false)}
              alt=''
            />
          ) : (
            <img
              src={bars}
              className='menu__icon'
              onClick={() => setToggleMenu(true)}
              alt=''
            />
          )}
        </div>
        <div className='navbar__socials'>
          <div className='navbar__linkedinDiv'>
            <img src={linkedin} className='navbar__linkedin' alt='linkedin' />
            <a href='https://www.linkedin.com/in/petritnuredini/'>
              <p>Linkedin</p>
            </a>
          </div>
          <div className='navbar__githubDiv'>
            <img src={github} className='navbar__github' alt='github' />
            <a href='https://www.github.com/petritnuredini'>
              <p>Github</p>
            </a>
          </div>
          <a href='#contact'>
            <img src={email} className='navbar__email' alt='email' />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
