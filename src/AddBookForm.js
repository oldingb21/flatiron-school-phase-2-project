import { useState } from "react";

const AddBookForm = () => {
    const [newBook, setNewBook] = useState({
        "title": "",
        "author": "",
        "image": "",
        "status":{
            "hasRead": false,
            "isReading": false,
            "readingWishList": false}
    })

    const handleFormChange = (e) => {
        console.log(e.target.value)
        setNewBook({...newBook, [e.target.name]:e.target.value})
        console.log(newBook)
    }

    return(
        <form>
            <label>Book Title
                <input name="title" type="text" value={newBook.title} onChange={handleFormChange} required></input>
            </label>
            <label>Author
                <input name="author" type="text" value={newBook.author} onChange={handleFormChange} required></input>
            </label>
            <label>Image URL
                <input name="image" type="text" value={newBook.image} onChange={handleFormChange} required></input>
            </label>
            <label>Book List
                <select name="status" required>
                    <option value="">--Select Book List--</option>
                    <option value={true}>Finished Reading</option>
                    <option value={true}>Actively Reading</option>
                    <option value={true}>Reading Wishlist</option>
                </select>
            </label>
            <input type="submit" value="Add Book"></input>
        </form>
    )
}

export default AddBookForm;