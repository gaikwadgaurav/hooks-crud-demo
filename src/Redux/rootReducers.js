import { combineReducers } from 'redux';
import UserReducer from './reducers/UserReducer';
const rootReducer = combineReducers({
    User: UserReducer
})
export default rootReducer