import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import BrowseBooks from './pages/BrowseBooks'
import BookDetails from './pages/BookDetails'
import AddBook from './pages/AddBook'
import About from './pages/About'
import NotFound from './components/NotFound'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books/:category" element={<BrowseBooks />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App