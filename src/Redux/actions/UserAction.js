import {
    ADD_USER,
    FETCH_USER,
    UPDATE_USER,
    DELETE_USER,
    FETCH_USERS_LIST,
    FILTER_USERS_LIST,
} from '../types/UserTypes.js';

export const addUserData = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}
export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        payload: user 
    
    }
}
export const fetchUsers = () =>{
    return {
        type:FETCH_USERS_LIST,
    }
}
export const fetchUser = (index) => {
    return{
        type:FETCH_USER,
        payload:index     
    }
}

export const deleteUser = (index) => dispatch =>{
    dispatch({
        type: DELETE_USER,
        payload: index
    })
}

export const filterUser = (value) => {
    return{
        type:FILTER_USERS_LIST,
        payload: value
    }
}

//Action creator
export const addUser = (data, props) => {
    return (dispatch) => {
                dispatch(addUserData(data))
            }
    }

export const selectedUser = (index) =>   {
    return (dispatch) =>  {
        dispatch(fetchUser(index))
    }
}
export const saveUpdatedUser = (data) =>{
    return(dispatch) => {
        dispatch(updateUser(data))
    }
} 

export const usersList = () =>{
    return(dispatch) => {
        dispatch(fetchUsers())
    }
}
export const filterUserList = (value) => {
    return(dispatch) =>{
        dispatch(filterUser(value))
    }
}




   
        
 