import { useState } from "react";

const Book = ({title, author, image, status, id}) => {
    const [newStatus, setNewStatus] = useState(status)
    
    const handleListChange = (e) => {
        console.log(e.target.name ,e.target.value)
    }

    return (
        <section className="book">
            <h4><u>{title}</u></h4>
            <p>by: {author}</p>
            <img src={image} alt={title}/>
            <form>  
                <label>Change Book List
                    <select name="status" defaultValue={newStatus} onChange={handleListChange}>
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