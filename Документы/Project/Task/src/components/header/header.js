import css from "./header.module.css"
import {NavLink} from "react-router-dom"

function Header () {
    return (
        <div className={css.header_section}>
            <NavLink to="/">About Us</NavLink>
            <NavLink to="posts">Posts</NavLink>
            <NavLink to="contact">Contact</NavLink>
        </div>
    )
}

export default Header