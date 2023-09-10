import React, {useState, useEffect, Children} from 'react';
import Navbar from './Navbar';
import BookLists from './BookLists';

function App() {
  const [books, setBooks] = useState()

  useEffect(()=>{
    fetch('http://localhost:4000/books').then(r=>r.json())
    .then((booksData)=>setBooks(booksData))
  }, [])

  

  return (
    <div className="App">
      <header>
        <h1>Phase 2 Project Start</h1>
        <Navbar />
        <BookLists />
      </header>
    </div>
  );
}

export default App;
