
const BookLists = ({children}) => {
    return(
        <div id="book-lists">
            <h2>BOOK LISTS</h2>
            <div id='lists-div'>
                {children}
            </div>
        </div>
    )
}

export default BookLists;