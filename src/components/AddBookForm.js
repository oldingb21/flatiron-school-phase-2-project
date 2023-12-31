import { useState } from "react";

const AddBookForm = ({onNewBookSubmit}) => {
    const [newBook, setNewBook] = useState({
        "title": "",
        "author": "",
        "image": "",
        "status": ""
    })

    const onFormSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/books', {
            'method' : 'POST',
            'headers' : {
                'Content-Type' : 'application/json'
            },
            'body' : JSON.stringify(newBook)
        }).then(r=>r.json())
        .then((newBookPostData)=> onNewBookSubmit(newBookPostData))
    }

    const handleFormChange = (e) => {
        setNewBook({...newBook, [e.target.name]:e.target.value})
    }

    return(
        <section className="form-component">
            <form onSubmit={onFormSubmit} className="new-book-form" > Add a New Book!
                <label className="form-item">Book Title
                    <input name="title" type="text" value={newBook.title} onChange={handleFormChange} required></input>
                </label>
                <label className="form-item">Author
                    <input name="author" type="text" value={newBook.author} onChange={handleFormChange} required></input>
                </label>
                <label className="form-item">Image URL
                    <input name="image" type="text" value={newBook.image} onChange={handleFormChange} required></input>
                </label>
                <label className="form-item">Book List
                    <select name="status" value={newBook.status} onChange={handleFormChange} required>
                        <option value="" disabled>--Select Book List--</option>
                        <option value="Finished Reading">Finished Reading</option>
                        <option value="Actively Reading">Actively Reading</option>
                        <option value="Reading Wishlist">Reading Wishlist</option>
                    </select>
                </label>
                <input type="submit" value="Add Book" className="form-item"></input>
            </form>
            <img src='https://wallpaperaccess.com/full/3133075.jpg' alt='Cozy Library Drawing' id='form-image'/>
        </section>
    )
}

export default AddBookForm;