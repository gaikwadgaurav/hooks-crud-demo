import {
    ADD_USER,
    FETCH_USER,
    UPDATE_USER,
    DELETE_USER,
} from '../types/UserTypes.js';

export const addUserData = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}
export const updateUser = (user,index) => {
    return {
        type: UPDATE_USER,
        payload: {
            user,
            index
        }
    }
}
export const fetchUser = (index) => {
    return{
        type:FETCH_USER,
        payload:index
        
    }
}
// export const deleteUser = (index) => {
//     return {
//         type: DELETE_USER,
//         payload: index
//     }
// }

//Action creator
export const addUser = (data, props) => {
    return (dispatch) => {
                    dispatch(addUserData(data))
                    // props.history.push('/user/list/')
            }
    }

export const selectedUser = (index) =>{
    return(dispatch) =>{
        dispatch(fetchUser(index))
    }
}
export const saveUpdatedUser = (data, index) =>{
    return(dispatch) => {
        dispatch(updateUser(data))
    }
}    



   
        
 