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

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route path="/book-lists" element={<BookLists>{booksFirstDisplay}</BookLists>} />
        <Route path="/add-book" element={<AddBookForm />} />
      </Routes>
    </div>
  );
}

export default App;
