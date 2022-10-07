export const GET_POSTS = "GET_POSTS";

export const getPostsAC = (data) => {
    return {
        type: GET_POSTS,
        payload: data
    }
}


export const ADD_POST = "ADD_POST"

export const addPostAC = (newPost) => {
    return {
        type: ADD_POST,
        payload: newPost
    }
}


export const DEL_POST = "DEL_POST"

export const delPostAC = (id) => {
    return {
        type: DEL_POST,
        payload: id
    }
}


export const OPEN_MODAL = "OPEN__MODAL"

export const openModalAC = (bool) => {
    return {
        type: OPEN_MODAL,
        payload: bool
    }
}


export const EDIT_POST = "EDIT_POST"

export const editPostAC = (editData) => {
    return {
        type: EDIT_POST,
        payload: editData
    }
}


export const POST_ID = "POST_ID"

export const postIdAC = (id) => {
    return {
        type: POST_ID,
        payload: id
    }
}