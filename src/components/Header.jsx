import logo from '../assets/logo-header.svg'

export default function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="/" aria-label="T Shop Online Store">
        <img src={logo} alt="T Shop Online Store" width="194" height="60" />
      </a>
      <a className="header__cta" href="#">
        START NOW
      </a>
    </header>
  )
}
