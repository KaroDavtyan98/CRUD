import css from "./posts.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card ,CardHeader, ListGroup, ListGroupItem, Button} from "reactstrap"
import {useDispatch, useSelector} from "react-redux"
import { useEffect} from "react"
import { getPostsAPI } from "../../../redux/API"
import { addPostAC, delPostAC, openModalAC, postIdAC } from "../../../redux/actionCreator"
import { useForm } from "react-hook-form"

function Posts () {

    const dispatch = useDispatch()
    const {posts} = useSelector(state => state.postsReducer)  
    const {register,handleSubmit,reset, formState:{errors}} = useForm()

    useEffect(() => {
       dispatch(getPostsAPI())  
    },[])

    function addNewPost (data) {
        const newPost = {
            id: Math.random(),
            title: data.title,
            body: data.body
        }
        dispatch(addPostAC(newPost))
        reset()
    }

    function deletePost (id) {
        dispatch(delPostAC(id))
    }

    if(posts.length === 0){
        return (
            <h1>Loading ...</h1>
        )
    }else{
        return (
           <div className={css.parent_posts_section}>
                <form onSubmit={handleSubmit(addNewPost)}>
                    <h2>New Post</h2>
                    <input type="text" {...register("title", {
                           required: "Enter Title"
                    })}/>
                    <span>{errors?.title?.message}</span>
                    <input type="text" {...register("body", {
                      required: "Enter Body"
                    })}/>
                    <span>{errors?.body?.message}</span>
                    <input type="submit" value="ADD NEW POST" className={css.addBtn}/>
                </form>
             <div className={css.posts_section}>
               {posts.map(({id, title, body})=> {
                 return(
                    <Card key={id} style={{width: '25rem'}}>
                      <CardHeader>
                        <h3>TITLE</h3>
                        {title}
                      </CardHeader>
                      <ListGroup flush >
                         <ListGroupItem >
                           <h3>BODY</h3>
                           {body}
                          </ListGroupItem>
                      <div className={css.del_edit_section}>
                        <Button color="primary" outline onClick={() => deletePost(id)}>DELETE</Button>
                        <Button color="primary"outline onClick={() => {
                          dispatch(openModalAC(true))
                          dispatch(postIdAC({id}))
                          }}>EDIT</Button>                      
                      </div>
                    </ListGroup>
                  </Card>
                 )
              
               })}
             </div>

            </div>
        )
            
           
    }

    
}

export default Posts