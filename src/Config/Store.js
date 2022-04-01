import {createStore,applyMiddleware} from "redux";
import rootReducers from "../Reducers";
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middleware = [ thunk ]
middleware.push(createLogger())


const store = createStore(rootReducers,composeWithDevTools( 
    applyMiddleware(...middleware)
))

export default store;