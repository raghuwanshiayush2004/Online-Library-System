import React from 'react'
import { Link } from 'react-router-dom'
import './BookCard.css'

const BookCard = ({ book }) => {
  // Function to truncate title to specific character length


  // Function to render stars with better visual


    return (
      <>
        {'★'.repeat(fullStars)}
        {hasHalfStar && '⭐'}
        {'☆'.repeat(emptyStars)}
      </>
    )
  }

  return (
    <div className="book-card">
      <div className="book-image">
        <img 
          src={book.coverImage} 
          alt={`${book.title} cover`}
          className="book-cover-img"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <div className="book-cover-fallback">
          <span className="book-emoji">📖</span>
        </div>
      </div>
      <div className="book-info">
        <h3 className="book-title" title={book.title}>
          {truncateTitle(book.title)}
        </h3>
        
        <p className="book-author" title={`by ${book.author}`}>
          {book.author}
        </p>
        
        {/* FIXED: Category and Year with data attribute for specific styling */}
        <div className="book-meta">
          <span 
            className="book-category" 
            data-category={book.category}
            title={book.category}
          >
            {book.category}
          </span>
          <span className="book-year">{book.year}</span>
        </div>
        
        <div className="book-rating">
          <span className="stars">
            {renderStars(book.rating)}
          </span>
          <span className="rating-text">{book.rating}/5</span>
        </div>
        
        <Link to={`/book/${book.id}`} className="view-details-btn">
          View Details
        </Link>
      </div>
    </div>
  )
}

export default BookCard