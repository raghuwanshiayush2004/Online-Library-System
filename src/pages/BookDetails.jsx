import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom'
import './BookDetails.css'

const BookDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { books } = useSelector(state => state.books)
  
  const book = books.find(b => b.id === parseInt(id))

  // Function to render stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)


    return (
      <>
        {'★'.repeat(fullStars)}
        {hasHalfStar && '⭐'}
        {'☆'.repeat(emptyStars)}
      </>
    )
  }

  if (!book) {
    return (
      <div className="book-details">
        <div className="container">
          <div className="book-not-found">
            <h2>Book Not Found</h2>
            <p>The book you're looking for doesn't exist.</p>
            <button onClick={() => navigate('/books/all')} className="back-btn">
              Back to Browse
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="book-details">
      <div className="container">
        <div className="book-details-content">
          <div className="book-cover">
            <div className="book-cover-placeholder">
              <img 
                src={book.coverImage} 
                alt={`${book.title} cover`}
                className="book-cover-large"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="book-cover-large-fallback">
                <span className="book-emoji-large">📖</span>
              </div>
            </div>
          </div>
          
          <div className="book-info">
            <h1 className="book-title">{book.title}</h1>
            <p className="book-author">by {book.author}</p>
            
            <div className="book-meta">
              <span className="category-badge">{book.category}</span>
              <div className="rating">
                {renderStars(book.rating)}
                <span className="rating-value">({book.rating}/5)</span>
              </div>
            </div>

            {/* Book Stats Section */}

            
            {/* Enhanced Description Section */}
            <div className="book-description">
              <div className="description-header">
                <h3>📖 Book Description</h3>
                <div className="description-meta">
                  <span className="reading-time">
                    ⏱️ Reading time: {Math.ceil(book.pages / 200)} hours
                  </span>
                </div>
              </div>
              <div className="description-content">
                <p>{book.description}</p>
                <div className="book-highlights">
                  <div className="highlight">
                    <span className="highlight-icon">🎯</span>
                    <span className="highlight-text">{book.category} Masterpiece</span>
                  </div>
                  <div className="highlight">
                    <span className="highlight-icon">⭐</span>
                    <span className="highlight-text">Rated {book.rating}/5 by readers</span>
                  </div>
                  <div className="highlight">
                    <span className="highlight-icon">📚</span>
                    <span className="highlight-text">{book.pages} pages of engaging content</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="book-isbn">
              <strong>📋 ISBN:</strong> {book.isbn}
            </div>
            
            <div className="action-buttons">
              <button onClick={() => navigate('/books/all')} className="back-btn">
                ← Back to Browse
              </button>
              <Link to={`/books/${book.category.toLowerCase()}`} className="category-link">
                More {book.category} Books
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetails