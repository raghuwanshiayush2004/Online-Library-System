import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const location = useLocation()

  // Don't show header on 404 page
  if (location.pathname === '/404') {
    return null
  }

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">📚 Online Library</h1>
        <nav className="nav">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            🏠 Home
          </Link>
          <Link
            to="/books/all"
            className={location.pathname.includes('/books') ? 'active' : ''}
          >
            📖 Browse Books
          </Link>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
          >
            ℹ️ About
          </Link>
          <Link
            to="/add-book"
            className={location.pathname === '/add-book' ? 'active' : ''}
          >
            ➕ Add Book
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header