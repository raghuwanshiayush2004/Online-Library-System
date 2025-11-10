import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BookCard from '../components/BookCard'
import './Home.css'

const Home = () => {
  const { books, categories } = useSelector(state => state.books)

  // Get popular books (first 6 books)
  const popularBooks = books.slice(0, 6)

  // Function to get category icon
  const getCategoryIcon = (category) => {
    const icons = {
      'Fiction': '📚',
      'Non-Fiction': '📖',
      'Sci-Fi': '🚀',
      'Fantasy': '🐉',
      'Mystery': '🕵️',
      'Biography': '👤',
      'Horror': '👻'
    }
    return icons[category] || '📁'
  }

  // Function to count books in each category
  const getBookCount = (category) => {
    return books.filter(book => book.category === category).length
  }

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Welcome to Our Online Library</h1>
          <p>Discover thousands of books across various genres and categories</p>
          <Link to="/books/all" className="cta-button">
            Start Exploring
          </Link>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <h2>Book Categories</h2>
          <div className="categories-grid">
            {categories.map(category => (
              <Link
                key={category}
                to={`/books/${category.toLowerCase()}`}
                className="category-card"
                data-category={category}
              >
                <span className="category-icon">
                  {getCategoryIcon(category)}
                </span>
                <h3>{category}</h3>
                <span className="category-count">
                  {getBookCount(category)} books
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section className="popular-books">
        <div className="container">
          <h2>Popular Books</h2>
          <div className="books-grid">
            {popularBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <div className="view-all">
            <Link to="/books/all" className="view-all-btn">
              View All Books
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home