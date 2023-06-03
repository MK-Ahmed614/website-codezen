import Fade from '../fade/Fade';
import './Header.scss';
import Navbar from '../navbar/Navbar';


const Header = () => {
  return (
    <>
    <Navbar/>
    <header className='header'>
      <div className='container'>
      <Fade/>
      </div>
    </header>
    </>
  )
 }

export default Header