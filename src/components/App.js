import React, {useState, useEffect} from 'react';

import {Route, Routes} from 'react-router-dom';
import Header from './Header';
import BookLists from './BookLists';
import Book from './Book/Book';
import Home from './Home';
import AddBookForm from './AddBookForm';


function App() {
  const [books, setBooks] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/books').then(r=>r.json())
    .then((booksData)=>setBooks(booksData))
  }, [])

  const booksFirstDisplay = books.map((book)=>{
    const {id, title, author, image} = book
    return <Book key={id} title={title} author={author} image={image}/>
  })

  const finishedBooksFilterList = books.filter((book) => book.status === "Finished Reading")
  
  const finishedBooksDisplay = finishedBooksFilterList.map((book) => {
    const {id, title, author, image} = book
    return <Book key={id} title={title} author={author} image={image} />
  })

  const activelyReadingFilterList = books.filter((book)=> book.status === "Actively Reading")
  
  const activelyReadingDisplay = activelyReadingFilterList.map((book)=> {
    const {id, title, author, image} = book
    return <Book key={id} title={title} author={author} image={image} />
  })

  const readingWishListFilter = books.filter((book)=> book.status === "Reading Wishlist")

  const readingWishListDisplay = readingWishListFilter.map((book) => {
    const {id, title, author, image} = book
    return <Book key={id} title={title} author={author} image={image} />
  })

  const handleNewBookSubmit = (newBook) => {
    setBooks([...books, newBook])
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route path="/book-lists" element={
          <BookLists>
            <h2>Finished Books</h2>
            {finishedBooksDisplay}
            <h2>Actively Reading</h2>
            {activelyReadingDisplay}
            <h2>Reading Wishlist</h2>
            {readingWishListDisplay}
          </BookLists>} />
        <Route path="/add-book" element={<AddBookForm onNewBookSubmit={handleNewBookSubmit} />} />
      </Routes>
    </div>
  );
}

export default App;
