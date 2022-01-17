import { createStore, combineReducers, applyMiddleware } from "redux";
import { cashReducer } from './cashReducer'
import { costumerReducer } from './costumerReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  cash: cashReducer,
  costumer: costumerReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
