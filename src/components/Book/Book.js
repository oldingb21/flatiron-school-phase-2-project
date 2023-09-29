
const Book = ({title, author, image, status, id, updateBookList}) => {
    
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

    return (
        <section className="book">
            <h4><u>{title}</u></h4>
            <p>by: {author}</p>
            <img src={image} alt={title}/>
            <form>  
                <label>Change Book List
                    <select name="status" defaultValue={status} onChange={handleListChange}>
                        <option value="Finished Reading">Finished Reading</option>
                        <option value="Actively Reading">Actively Reading</option>
                        <option value="Reading Wishlist">Reading Wishlist</option>
                    </select>
                </label>
            </form>     
        </section>
    )
}

export default Book;