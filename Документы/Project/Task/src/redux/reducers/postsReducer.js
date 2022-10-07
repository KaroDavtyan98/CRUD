import { ADD_POST, DEL_POST, EDIT_POST, GET_POSTS, OPEN_MODAL, POST_ID } from "../actionCreator"

const initialState = {
    posts: [],
    openModal: false,
    id: 0
}


export function postsReducer (state=initialState, action) {
     switch(action.type){
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            } 
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts,action.payload]
            }
        case DEL_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => {
                    return post.id !== action.payload
                })
            }
        case OPEN_MODAL:
            return {
                ...state,
                openModal: action.payload
            }
        case POST_ID:
              return{
                ...state,
                id: action.payload
              }
        case EDIT_POST:
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if(post.id === action.payload.id.id){
                        post.title = action.payload.editTitle;
                        post.body = action.payload.editBody;
                    }
                    return post
                })
            }
        default:
            return state
     }
}