import { createStore, applyMiddleware } from "redux";
import chatReducer from "../reducers/chatReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(initialState = {}){
    const store = createStore(chatReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
    return store;
}