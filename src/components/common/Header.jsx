import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        Janella&apos;s
        <span>Apparel Market</span>
      </div>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Products</a>
      </nav>
    </header>
  )
}

export default Header