
const Book = ({title, author, image, status, id, updateBookList, handleBookDelete}) => {
    
    const handleListChange = (e) => {
        console.log(e.target.name ,e.target.value)
        fetch(`http://localhost:4000/books/${id}`, {
            'method' : 'PATCH',
            'headers' : {
                'Content-Type' : 'application/json'
            },
            'body': JSON.stringify({ [e.target.name] : e.target.value })
        }).then(r=>r.json())
        .then((updatedBook)=>updateBookList(updatedBook))
    }

    const onBookDelete = () => {
        fetch(`http://localhost:4000/books/${id}`, {
            'method' : 'DELETE'
        })
        .then(handleBookDelete(id))
    }

    return (
        <section className="book">
            <h4 className="book-title"><u>{title}</u></h4>
            <p>by: {author}</p>
            <img src={image} alt={title} className="book-img"/>
            <form>  
                <label>Change Book List
                    <select name="status" defaultValue={status} onChange={handleListChange}>
                        <option value="Finished Reading">Finished Reading</option>
                        <option value="Actively Reading">Actively Reading</option>
                        <option value="Reading Wishlist">Reading Wishlist</option>
                    </select>
                </label>
            </form>
            <button onClick={onBookDelete} className="delete-button">Remove <u>{title}</u></button>   
        </section>
    )
}

export default Book;