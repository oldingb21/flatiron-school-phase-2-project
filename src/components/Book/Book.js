
const Book = ({title, author, image}) => {
    return (
        <section className="book">
            <h4><u>{title}</u></h4>
            <p>by: {author}</p>
            <img src={image} alt={title}/>    
        </section>
    )
}

export default Book;