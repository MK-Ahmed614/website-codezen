import Fade from '../fade/Fade';
import './Header.scss';
import Navbar from '../navbar/Navbar';


const Header = () => {
  return (
    <>
    <Navbar/>
    <header className='header'>
      <Fade/>
    </header>
    </>
  )
 }

export default Header