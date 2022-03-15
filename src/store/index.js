import { createStore, applyMiddleware } from 'redux'
import allReducers from './reducers'
import ReduxThunk from 'redux-thunk'
import { loggerMiddleware } from './middleware'

const middlewares = [ReduxThunk]



if (process.env.NODE_ENV === 'development') {
  console.log(process.env.NODE_ENV, 'env')
  middlewares.push(loggerMiddleware)
}



export default createStore(allReducers, applyMiddleware(...middlewares))
