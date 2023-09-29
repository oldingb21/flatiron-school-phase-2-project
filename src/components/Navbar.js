import { NavLink } from "react-router-dom";


const Navbar = () => {

    return (
        <section className="navbar">
            <NavLink exact="true" to="/">Home</NavLink>
            <NavLink to="/add-book">Add Book</NavLink>
            <NavLink to="/book-lists">Book Lists</NavLink>
        </section>
    )
}
export default Navbar;