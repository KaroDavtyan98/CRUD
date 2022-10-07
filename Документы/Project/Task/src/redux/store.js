import {createStore, combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { postsReducer } from "./reducers/postsReducer"

export const store = createStore(combineReducers({
     postsReducer
}),applyMiddleware(thunk))