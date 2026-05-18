import { Link } from 'react-router-dom'
import logoImage from '../../assets/jq-logo.svg'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img
          src={logoImage}
          alt="JQ Logo"
          className="logo-image"
        />
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
    </header>
  )
}

export default Header