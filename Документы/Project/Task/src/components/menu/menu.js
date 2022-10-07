import css from "./menu.module.css"
import {Routes, Route} from "react-router-dom"
import AboutUs from "../pages/about Us/aboutUs"
import Contact from "../pages/contact/contact"
import Posts from "../pages/posts/posts"

function Menu () {
    return (
        <div className={css.menu_section}>
            <Routes>
                <Route path="/" element={<AboutUs/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/posts" element={<Posts/>}/>
            </Routes>
        </div>
    )
}

export default Menu