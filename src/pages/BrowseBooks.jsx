import React, { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import BookCard from '../components/BookCard'
import './BrowseBooks.css'

const BrowseBooks = () => {
  const { category } = useParams()
  const { books, categories } = useSelector(state => state.books)
  const [searchTerm, setSearchTerm] = useState('')

  // Filter books by category and search term
  const filteredBooks = useMemo(() => {
    let filtered = books

    // Filter by category
    if (category && category !== 'all') {
      filtered = filtered.filter(book =>
        book.category.toLowerCase() === category.toLowerCase()
      )
    }


    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term)
      )
    }

    return filtered
  }, [books, category, searchTerm])

  // Function to get category icon
  const getCategoryIcon = (cat) => {
    const icons = {
      'all': '📋',
      'fiction': '📚',
      'non-fiction': '📖',
      'sci-fi': '🚀',
      'fantasy': '🐉',
      'mystery': '🕵️',
      'biography': '👤',
      'horror': '👻'
    }
    return icons[cat.toLowerCase()] || '📁'
  }

  // Function to get display category name
  const getDisplayCategory = (cat) => {
    if (cat === 'all') return 'All Books'
    if (cat === 'sci-fi') return 'Sci-Fi'
    return cat
  }

  return (
    <div className="browse-books">
      <div className="container">
        <div className="browse-header">
          <h1>
            <span className="browse-header-text">
              {getDisplayCategory(category || 'all')}
            </span>
            <span className="book-count">({filteredBooks.length} books)</span>
          </h1>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="categories-nav">
          <Link
            to="/books/all"
            className={`category-link ${category === 'all' ? 'active' : ''}`}
          >
            <span className="category-icon">{getCategoryIcon('all')}</span>
            All Books
          </Link>
          {categories.map(cat => (
            <Link
              key={cat}
              to={`/books/${cat.toLowerCase()}`}
              className={`category-link ${category === cat.toLowerCase() ? 'active' : ''}`}
            >
              <span className="category-icon">{getCategoryIcon(cat)}</span>
              {cat}
            </Link>
          ))}
        </div>

        {filteredBooks.length === 0 ? (
          <div className="no-books">
            <h3>No books found</h3>
            <p>Try adjusting your search or browse a different category.</p>
          </div>
        ) : (
          <div className="books-grid">
            {filteredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default BrowseBooks