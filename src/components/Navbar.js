import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


export default function Navbar () {

    return (
        <section>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/add-book">Add Book</NavLink>
            <NavLink to="/book-lists">Book Lists</NavLink>
        </section>
    )
}