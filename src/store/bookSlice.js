import { createSlice, configureStore } from '@reduxjs/toolkit'

// Enhanced Dummy book data with cover images
const initialBooks = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    description: "A gripping story of racial injustice and childhood innocence in the American South during the Great Depression.",
    rating: 4.3,
    isbn: "978-0061120084",
    pages: 324,
    year: 1960,
    coverImage: "https://images.pexels.com/photos/1926988/pexels-photo-1926988.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    category: "Sci-Fi",
    description: "A dystopian social science fiction novel about totalitarian control and surveillance society.",
    rating: 4.2,
    isbn: "978-0451524935",
    pages: 328,
    year: 1949,
    coverImage: "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Fiction",
    description: "A romantic novel of manners that depicts the emotional development of protagonist Elizabeth Bennet.",
    rating: 4.3,
    isbn: "978-0141439518",
    pages: 432,
    year: 1813,
    coverImage: "https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    description: "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
    rating: 3.9,
    isbn: "978-0743273565",
    pages: 180,
    year: 1925,
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwDNch5NQDwYrAOarN6xMCI2XZYrcsn8Xf9w&s"
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    description: "A fantasy novel about the adventures of hobbit Bilbo Baggins in Middle-earth.",
    rating: 4.3,
    isbn: "978-0547928227",
    pages: 310,
    year: 1937,
    coverImage: "https://images.pexels.com/photos/1275238/pexels-photo-1275238.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 6,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    category: "Fantasy",
    description: "The first novel in the Harry Potter series about a young wizard's journey at Hogwarts.",
    rating: 4.5,
    isbn: "978-0747532743",
    pages: 320,
    year: 1997,
    coverImage: "https://images.pexels.com/photos/1336981/pexels-photo-1336981.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 7,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    category: "Non-Fiction",
    description: "The writings from the Dutch-language diary kept by Anne Frank while she was in hiding during WWII.",
    rating: 4.2,
    isbn: "978-0553296983",
    pages: 283,
    year: 1947,
    coverImage: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 8,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    description: "An epic high fantasy adventure about the quest to destroy the One Ring in Middle-earth.",
    rating: 4.5,
    isbn: "978-0544003415",
    pages: 1178,
    year: 1954,
    coverImage: "https://images.pexels.com/photos/1370297/pexels-photo-1370297.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 9,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    description: "A philosophical book that follows a young Andalusian shepherd in his journey to Egypt.",
    rating: 3.9,
    isbn: "978-0061122415",
    pages: 208,
    year: 1988,
    coverImage: "https://images.pexels.com/photos/3760323/pexels-photo-3760323.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 10,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "Fiction",
    description: "A story about Holden Caulfield's experiences in New York City after being expelled from prep school.",
    rating: 3.8,
    isbn: "978-0316769174",
    pages: 234,
    year: 1951,
    coverImage: "https://images.pexels.com/photos/3760324/pexels-photo-3760324.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 11,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    description: "A science fiction novel set in the distant future amidst a feudal interstellar society.",
    rating: 4.3,
    isbn: "978-0441172719",
    pages: 412,
    year: 1965,
    coverImage: "https://m.media-amazon.com/images/I/81Ua99CURsL.jpg"
  },
  {
    id: 12,
    title: "The Shining",
    author: "Stephen King",
    category: "Horror",
    description: "A horror novel about a family's winter at an isolated hotel where supernatural forces influence the father.",
    rating: 4.2,
    isbn: "978-0307743657",
    pages: 447,
    year: 1977,
    coverImage: "https://images.pexels.com/photos/3760326/pexels-photo-3760326.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 13,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "Non-Fiction",
    description: "A book that summarizes research on cognitive biases and prospect theory.",
    rating: 4.2,
    isbn: "978-0374533557",
    pages: 499,
    year: 2011,
    coverImage: "https://m.media-amazon.com/images/I/71E4uCFxaGL.jpg"
  },
  {
    id: 14,
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    category: "Mystery",
    description: "A psychological thriller novel about a journalist's investigation of a wealthy family.",
    rating: 4.1,
    isbn: "978-0307454546",
    pages: 465,
    year: 2005,
    coverImage: "https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 15,
    title: "Educated",
    author: "Tara Westover",
    category: "Biography",
    description: "A memoir about a young woman who grows up in a survivalist family and eventually goes to university.",
    rating: 4.5,
    isbn: "978-0399590504",
    pages: 334,
    year: 2018,
    coverImage: "https://images.pexels.com/photos/3760329/pexels-photo-3760329.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 16,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Mystery",
    description: "A psychological thriller about a woman who shoots her husband and then stops speaking.",
    rating: 4.2,
    isbn: "978-1250301697",
    pages: 323,
    year: 2019,
    coverImage: "https://m.media-amazon.com/images/I/91lslnZ-btL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 17,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    description: "A book exploring the history and impact of Homo sapiens from the Stone Age to the 21st century.",
    rating: 4.4,
    isbn: "978-0062316097",
    pages: 443,
    year: 2014,
    coverImage: "https://cdnb.artstation.com/p/assets/images/images/060/840/091/large/munachiso-nweke-edited-text-final-sapiens.jpg?1679427786"
  },
  {
    id: 18,
    title: "The Night Circus",
    author: "Erin Morgenstern",
    category: "Fantasy",
    description: "A fantasy novel about a magical competition between two illusionists.",
    rating: 4.0,
    isbn: "978-0307744432",
    pages: 387,
    year: 2011,
    coverImage: "https://m.media-amazon.com/images/I/61Pqqc4muHL._AC_UF1000,1000_QL80_.jpg"
  }
]

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: initialBooks,
    categories: ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Mystery', 'Biography', 'Horror']
  },
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        ...action.payload,
        id: state.books.length + 1,
        coverImage: "https://images.pexels.com/photos/3760333/pexels-photo-3760333.jpeg?auto=compress&cs=tinysrgb&w=400" // Default cover for new books
      }
      state.books.unshift(newBook)
    }
  }
})

export const { addBook } = bookSlice.actions

export const store = configureStore({
  reducer: {
    books: bookSlice.reducer
  }
})