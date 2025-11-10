import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBook } from '../store/bookSlice'
import './AddBook.css'

const AddBook = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { categories } = useSelector(state => state.books)
  
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
    isbn: ''
  })
  
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.title.trim()) newErrors.title = 'Title is required'
    if (!formData.author.trim()) newErrors.author = 'Author is required'
    if (!formData.category) newErrors.category = 'Category is required'
    if (!formData.description.trim()) newErrors.description = 'Description is required'
    if (!formData.rating) newErrors.rating = 'Rating is required'
    if (!formData.isbn.trim()) newErrors.isbn = 'ISBN is required'
    
    if (formData.rating && (formData.rating < 1 || formData.rating > 5)) {
      newErrors.rating = 'Rating must be between 1 and 5'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      const bookData = {
        ...formData,
        rating: parseFloat(formData.rating)
      }
      
      dispatch(addBook(bookData))
      navigate('/books/all')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing


  return (
    <div className="add-book">
      <div className="container">
        <div className="add-book-header">
          <h1>Add New Book</h1>
          <p>Fill in the details below to add a new book to the library</p>
        </div>
        
        <form onSubmit={handleSubmit} className="add-book-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="title">Book Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={errors.title ? 'error' : ''}
                placeholder="Enter book title"
              />
              {errors.title && <span className="error-message">{errors.title}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="author">Author *</label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className={errors.author ? 'error' : ''}
                placeholder="Enter author name"
              />
              {errors.author && <span className="error-message">{errors.author}</span>}
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={errors.category ? 'error' : ''}
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && <span className="error-message">{errors.category}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="rating">Rating (1-5) *</label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                min="1"
                max="5"
                step="0.1"
                className={errors.rating ? 'error' : ''}
                placeholder="Enter rating"
              />
              {errors.rating && <span className="error-message">{errors.rating}</span>}
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="isbn">ISBN *</label>
            <input
              type="text"
              id="isbn"
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
              className={errors.isbn ? 'error' : ''}
              placeholder="Enter ISBN number"
            />
            {errors.isbn && <span className="error-message">{errors.isbn}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              className={errors.description ? 'error' : ''}
              placeholder="Enter book description"
            />
            {errors.description && <span className="error-message">{errors.description}</span>}
          </div>
          
          <div className="form-actions">
            <button type="button" onClick={() => navigate('/books/all')} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddBook