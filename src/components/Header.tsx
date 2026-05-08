import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const { pathname } = useLocation()

  const navLinks = [
    { to: '/artworks', label: 'ARTWORKS' },
    { to: '/links', label: 'LINKS' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5">
      <Link
        to="/"
        className="font-dubtronic text-2xl tracking-widest text-ndm-primary hover:text-ndm-secondary transition-colors"
      >
        NDM
      </Link>
      <nav className="flex items-center gap-10">
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`font-mono text-[0.65rem] tracking-[0.25em] uppercase transition-colors ${
              pathname === to
                ? 'text-ndm-primary'
                : 'text-ndm-muted hover:text-white'
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header
