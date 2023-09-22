import { NavLink } from "react-router-dom";


export default function Navbar () {

    return (
        <section>
            <NavLink exact="true" to="/">Home</NavLink>
            <NavLink to="/add-book">Add Book</NavLink>
            <NavLink to="/book-lists">Book Lists</NavLink>
        </section>
    )
}