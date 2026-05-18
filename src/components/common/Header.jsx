import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        Janella&apos;s
        <span>Apparel Market</span>
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
    </header>
  )
}

export default Header