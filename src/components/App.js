import React, {useState, useEffect, Children} from 'react';
import Navbar from './Navbar';
import BookLists from './BookLists';
import Book from './Book/Book';

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
        <h1>Phase 2 Project Start</h1>
        <Navbar />
        <BookLists>
          {booksFirstDisplay}
        </BookLists>
      </header>
    </div>
  );
}

export default App;
