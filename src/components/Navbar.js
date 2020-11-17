import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [pageScrolled, setPageScrolled] = useState(false)


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setPageScrolled(true)
      } else {
        setPageScrolled(false)
      }
    })
  })
  return (
    <header className={`header ${pageScrolled ? 'header__fixed': ''}`}>
      <nav className='header__nav'>
        <a className='header__logo' href="/">
          <img className='header__logo_img' src="images/logo.png" alt="e-vote logo"/>
        </a>

        <div className="header__auth_links">
          <a className='btn' id='signUpBtn' href="/">Sign Up</a>
          <a className='btn' id='loginBtn' href="/">Login</a>
        </div>
      </nav>
    </header>
  )
}
