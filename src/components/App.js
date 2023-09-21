import React, {useState, useEffect, Children} from 'react';

import {Route} from 'react-router-dom';
import Navbar from './Navbar';
import BookLists from './BookLists';
import Book from './Book/Book';
import Home from './Home';
import AddBookForm from '../AddBookForm';

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
      <header>
        <h1><u>My Library Helper</u></h1>
        <Navbar />
      </header>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/book-lists">
        <BookLists>
          {booksFirstDisplay}
        </BookLists>
      </Route>
      <Route path="/add-book">
        <AddBookForm />
      </Route>
    </div>
  );
}

export default App;
