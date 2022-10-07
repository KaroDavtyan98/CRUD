import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editPostAC,  openModalAC } from "../../redux/actionCreator"
import css from "./modal.module.css"

function Modal () {

    const dispatch = useDispatch()
    const [editTitle, setEditTitle] = useState("")
    const [editBody, setEditBody] = useState("")

    const {id} = useSelector(state => state.postsReducer)

    function editPost (e) {
        e.preventDefault()
        if(editTitle !== "" || editBody !== ""){
            dispatch(editPostAC({editTitle,editBody,id}))
            dispatch(openModalAC(false))
        }
    }

    return (
        <div className={css.modal} onClick={() => {
            dispatch(openModalAC(false))
        }}>
            <div className={css.mask} onClick={(e) => {e.stopPropagation()}}> 
                 <form className={css.mask_form} onSubmit={editPost}>
                     <h2>Edit Post</h2>
                     <input type="text" placeholder="Title" onChange={(e) => {
                         setEditTitle(e.target.value)
                     }}/>
                     <input type="text" placeholder="Body" onChange={(e) => {
                        setEditBody(e.target.value)
                     }}/>
                     <input type="submit" value="Save Post" className={css.btn}/>
                </form> 
            </div>
        </div>
    )
}


export default Modal