import { getPostsAC } from "./actionCreator";

export const getPostsAPI = () => {
    return async (dispatch) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        dispatch(getPostsAC(data))
    }

}