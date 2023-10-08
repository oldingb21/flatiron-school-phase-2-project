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

  const handleNewBookSubmit = (newBook) => {
    setBooks([...books, newBook])
  }

  const handleBooksUpdate = (updatedBook) => {
    const updatedBooksList = books.map((book)=>{
      return book.id !== updatedBook.id ? book : updatedBook}
      )
    setBooks(updatedBooksList)
  }

  const handleBookDelete = (id) => {
    const updatedBookList = books.filter((book)=> book.id !== id)
    setBooks(updatedBookList)
  }

  const finishedBooksFilterList = books.filter((book) => book.status === "Finished Reading")
  
  const finishedBooksDisplay = finishedBooksFilterList.map((book) => {
    const {id, title, author, image, status} = book
    return <Book key={id} title={title} author={author} image={image} status={status} id={id} updateBookList={handleBooksUpdate} handleBookDelete={handleBookDelete}/>
  })

  const activelyReadingFilterList = books.filter((book)=> book.status === "Actively Reading")
  
  const activelyReadingDisplay = activelyReadingFilterList.map((book)=> {
    const {id, title, author, image, status} = book
    return <Book key={id} title={title} author={author} image={image} status={status} id={id} updateBookList={handleBooksUpdate} handleBookDelete={handleBookDelete}/>
  })

  const readingWishListFilter = books.filter((book)=> book.status === "Reading Wishlist")

  const readingWishListDisplay = readingWishListFilter.map((book) => {
    const {id, title, author, image, status} = book
    return <Book key={id} title={title} author={author} image={image} status={status} id={id} updateBookList={handleBooksUpdate} handleBookDelete={handleBookDelete}/>
  })
  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route path="/book-lists" element={
          <BookLists>
            <h2 className='book-list' id='finished-list'>Finished Books
              {finishedBooksDisplay}
            </h2>
            <h2 className='book-list' id='active-list'>Actively Reading
              {activelyReadingDisplay}
            </h2>
            <h2 className='book-list' id='wishlist'>Reading Wishlist
              {readingWishListDisplay}
            </h2>
          </BookLists>} />
        <Route path="/add-book" element={<AddBookForm onNewBookSubmit={handleNewBookSubmit} />} />
      </Routes>
    </div>
  );
}

export default App;
