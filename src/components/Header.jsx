import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const today = new Intl.DateTimeFormat('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date())

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a className="skip" href="#tresc">
          Przejdź do treści
        </a>
        <NavLink to="/" className="logo" aria-label="Radio ZET, strona główna" end>
          ZET
        </NavLink>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-toggle-bars" aria-hidden="true" />
          Menu
        </button>
        <nav id="menu" className={open ? 'is-open' : undefined}>
          <NavLink to="/wiadomosci">Wiadomości</NavLink>
          <NavLink to="/wilga">Wilga</NavLink>
          <NavLink to="/obiekt">Obiekt</NavLink>
        </nav>
        <p className="topbar-date">{today}</p>
      </div>
    </header>
  )
}
