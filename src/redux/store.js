import { createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';
import thnuk from 'redux-thunk';


import rootReducer from './root-reducer'

const middlewares = [thnuk];

if(process.env.NODE_ENV==='development'){
    // middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))