import './Navbar.css'
import logo from './../../assets/react.svg'

const Navbar = ({ title }) => {
  return (
    <header className='Navbar'>
      <img src={logo} alt="React logo" />
      <h1>{title}</h1>
    </header>
  )
}

export default Navbar