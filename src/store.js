import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";

// reducers
import reducer from "./reducers/weatherReducer";

//--middleware
const middleware = applyMiddleware(thunk);
//--store
const store = createStore(reducer, middleware);
export default store;
