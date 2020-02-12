import {
    ADD_USER,
    FETCH_USER,
    UPDATE_USER,
    DELETE_USER,
} from '../types/UserTypes.js';
import { addUser } from '../actions/UserAction';

const initialState = {
    list: [],
    selectedUser: {},
}
const UserReducer = ( state= initialState, action) => {
    let selectedUser;
    switch(action.type){
        case ADD_USER:
            // let list = state.list.slice();
            let list = [...state.list]
            let userData = action.payload;
            list.push({...userData, id: state.list.length + 1})
            return{
                ...state,
                list
            }
      
        case UPDATE_USER:
            selectedUser = state.selectedUser;
            const users = state.list.slice();
            let cloneIndex = users.findIndex(user=> user.id === selectedUser.id)
            if(cloneIndex > -1){
                users[cloneIndex] = action.payload
            }
            return{
                ...state,
                list: users,
            }

        case FETCH_USER:
        let userIndex = action.payload;
        selectedUser = state.selectedUser;
            if (userIndex > -1) {
                selectedUser = state.list[userIndex]
            }
            return{
                ...state,
                selectedUser
            }
       
        // case DELETE_USER:
        //    list.push(action.payload)
        //     localStorage.setItem('listEvents',JSON.stringfy(list))
        //     return{
        //         list, :state.currentIndex,
        //     }
        // case UPDATE_INDEX:
        //     return{

        //     }
        default:
        return state;
    }
}
export default UserReducer