import * as usersAPI from '../api/users';
import { reducerUtils, createPromiseThunk } from '../lib/asyncUtils';

// state
const GET_USERS = 'user/GET_USERS';
const GET_USERS_SUCCESS = 'user/GET_USERS_SUCCESS';
const GET_USERS_ERROR = 'user/GET_USERS_ERROR';
const GET_USER = 'user/GET_USER';
const GET_USER_SUCCESS = 'user/GET_USER_SUCCESS';
const GET_USER_ERROR = 'user/GET_USER_ERROR';

const ADD_USER = 'user/ADD_USER';
const UPDATE_USER = 'user/UPDATE_USER';
const DELETE_USER = 'user/DELETE_USER';

export const getUsers = createPromiseThunk(GET_USERS, usersAPI.getUsers) 

export const getUser = createPromiseThunk(GET_USER, usersAPI.getUserById)

// action
let nextID = 1;

export const addUser = user => ({ 
    type: ADD_USER, 
    user: {
        ...user,
        id: nextID++,
        createAt: new Date().toString(),
        isDeleted: 0
    }
});
export const updateUser = ({ id, data }) => ({ type: UPDATE_USER, id, data})
export const deleteUser = id => ({ type: DELETE_USER, id });

// initialState
const initialState = {
    users: reducerUtils.initial(),
    user: reducerUtils.initial()
};

// reducer
export default function users(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return state.concat(action.user);
        case UPDATE_USER:
            return state = state.map(user => {
                if(user.id === action.id){
                    user = {...user, ...action.data};
                }
                return user;
            })
        case DELETE_USER:
            return state.map(user => {
                if(user.id === action.id){
                    user.isDeleted = 1;
                }
                return user;
            });

        case GET_USERS:
            return {
                ...state,
                users: reducerUtils.loading()
            };
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: reducerUtils.success(action.payload)
            };
        case GET_USERS_ERROR:
            return {
                ...state,
                users: reducerUtils.error(action.payload)
            };

        case GET_USER:
            return {
                ...state,
                user: reducerUtils.loading()
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                user: reducerUtils.success(action.payload)
            };
        case GET_USER_ERROR:
            return {
                ...state,
                user: reducerUtils.error(action.payload)
            };

        default:
            return state;
    }
}