//react imports
import { useNavigate } from 'react-router-dom';

//component imports
import Logo from '../assets/react.svg'

//style import
import '../styles/header.css'

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
          <img src={Logo} alt='logo' className="logo"/>
          <button className='header_button' onClick={() => navigate('/')}>Home</button>
          <button className='header_button' onClick={() => navigate('/about')}>About</button>
          <button className='header_button' onClick={() => navigate('/services')}>Services</button>
          <button className='header_button' onClick={() => navigate('/contact')}>Contact</button>
      </header>
    </>
  )
}

export default Header