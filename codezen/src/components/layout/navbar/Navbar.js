import { useTranslation } from 'react-i18next';
import Langs from '../langs/langs';
import "./Navbar.scss";
import { useState } from 'react';
const Navbar = () => {
  const {t} = useTranslation();
  const [navFix, SetNavFix] = useState(false)
  window.onscroll = () => {
    if (window.scrollY >= 102.5) {
      SetNavFix(true)
    }else{
      SetNavFix(false)
    }
  }
     /*  "navbar navbar-expand-lg navbar-light " */
  return (
<nav className={navFix ? "navbar navbar-expand-lg navbar-light active" : "navbar navbar-expand-lg navbar-light"}>
  <div className="container">
    <a className="navbar-brand" href="#"> <img className='logo' src='../images/pro-logo.png' alt='name' /> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{t('navbar.home')}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">{t('navbar.about')}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/our-work">{t('navbar.our_work')}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/contact'>{t('navbar.contact')}</a>
        </li>
      </ul>
      <div className='langs'>
        <Langs/>
      </div>
  </div>
  </div>
</nav>
  )
}

export default Navbar