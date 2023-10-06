import { NavLink } from "react-router-dom";


const Navbar = () => {

    return (
        <section id="navbar">
            <NavLink exact="true" to="/" className='navlink'>Home</NavLink>
            <NavLink to="/add-book" className='navlink'>Add Book</NavLink>
            <NavLink to="/book-lists" className='navlink'>Book Lists</NavLink>
        </section>
    )
}
export default Navbar;