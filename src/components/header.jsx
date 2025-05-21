
//component imports
import Logo from '../assets/react.svg'

//style import
import '../styles/header.css'

function Header() {

  return (
    <>
      <header className="header">
          <img src={Logo} alt='logo' className="logo"/>
          <p className='header_links'>Home</p>
          <p className='header_links'>About</p>
          <p className='header_links'>Services</p>
          <p>Contact</p>
      </header>
    </>
  )
}

export default Header