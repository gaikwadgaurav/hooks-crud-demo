import {
    ADD_USER,
    FETCH_USER,
    UPDATE_USER,
    DELETE_USER,
    FETCH_USERS_LIST,
    FILTER_USERS_LIST
} from '../types/UserTypes.js';
import { addUser } from '../actions/UserAction';

const initialState = {
    list: [],
    selectedUser: {},
    clonedUserList:[],
}
const UserReducer = ( state= initialState, action) => {
    let selectedUser;
    let list;
    let userIndex;
    let user;
    let clonedUserList;
    switch(action.type){
        case ADD_USER:
            // list = state.list.slice();
            list = [...state.list]
            let userData = action.payload;
            list.push({...userData, id: state.list.length + 1})
            localStorage.setItem("userList",JSON.stringify(list))
            return{
                ...state,
                list,
                clonedUserList: list,
            }
      
        case UPDATE_USER:
            selectedUser = state.selectedUser;
            const users = state.list.slice();
            let cloneIndex = users.findIndex(user => user.id === selectedUser.id)
            if(cloneIndex > -1){
                users[cloneIndex] = action.payload
                users[cloneIndex].id = selectedUser.id
                localStorage.setItem("userList", JSON.stringify(users))
            }
            return{
                ...state,
                list:users,
                selectedUser:{},
                clonedUserList: users,
            }

        case FETCH_USER:
            userIndex = action.payload;
            selectedUser = state.selectedUser;
            if (userIndex > -1) {
                selectedUser = state.list[userIndex]
            }
            return{
                ...state,
                selectedUser
            }
        
        case FETCH_USERS_LIST:
        list = state.list.slice();
        list = JSON.parse(localStorage.getItem('userList'));
        return{
            ...state,
            list,
            clonedUserList: list
        } 

        case DELETE_USER:
            userIndex = action.payload;
            user = state.list.slice();
            
          if(userIndex > -1){
            user.splice(userIndex, 1)
            localStorage.setItem("userList",JSON.stringify(user))
          }
            return{
                ...state,
                list:user,
                clonedUserList: user
            }
        
        case FILTER_USERS_LIST:
            let searchValue = action.payload;
            let updatedList = state.clonedUserList;
            console.log('updatedList',updatedList);
            if( searchValue ){
                updatedList = updatedList.filter(user=>
                    {
                        return(
                            (user && user.firstName && user.firstName.toLowerCase().search(searchValue.toLowerCase()) !== -1) ||
                            (user && user.lastName && user.lastName.toLowerCase().search(searchValue.toLowerCase()) !== -1)
                            // (user && user.lastName && user.lastName.toLowerCase().search(searchValue.toLowerCase()) !== -1 )
                        )
                    }
                )
            }else{
                updatedList = state.clonedUserList;
            }
            return{
                ...state,
                list:updatedList,
            }

        default:
        return state;
    }
}
export default UserReducer