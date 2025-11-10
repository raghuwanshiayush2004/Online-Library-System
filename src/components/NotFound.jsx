import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  const location = useLocation()

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p className="invalid-route">
          The route <strong>"{location.pathname}"</strong> does not exist.
        </p>
        <p className="not-found-message">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="home-link">
          Return to Home Page
        </Link>
      </div>
    </div>
  )
}

export default NotFound