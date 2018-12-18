import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunks from "redux-thunk";

import store from "./reducers";

export default createStore(store, composeWithDevTools(applyMiddleware(thunks)));