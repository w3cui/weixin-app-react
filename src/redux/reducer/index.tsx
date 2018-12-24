// src/reducers/index.js
import { combineReducers } from 'redux'
import counter from './counter'
import userInfo from './user'

export default combineReducers({
    counter,
    userInfo,
}) 