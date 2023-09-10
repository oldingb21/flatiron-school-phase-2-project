
const Book = ({title, author, image}) => {
    return (
        <div>
            <h4><u>{title}</u></h4>
            <p>{author}</p>
            <img src={image}/>    
        </div>
    )
}

export default Book;