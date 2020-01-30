// state
const ADD_USER = 'user/ADD_USER';
const GET_USERS = 'user/GET_USERS';
const GET_USER = 'user/GET_USER';
const UPDATE_USER = 'user/UPDATE_USER';
const DELETE_USER = 'user/DELETE_USER';

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
export const getUsers = () => ({ type: GET_USERS });
export const getUSer = id => ({ type: GET_USER, id });
export const updateUser = ({ id, data }) => ({ type: UPDATE_USER, id, data})
export const deleteUSer = id => ({ type: DELETE_USER, id });

// initialState
const initialState = [
    {
        id: 0,
        name: 'gorilla-Kim',
        birthday: "960322",
        email: '00ghks22@naver.com',
        createAt: new Date().toString(),
        isDeleted: 0
    }
];

// reducer
export default function users(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return state.concat(action.user);

        case GET_USER:
            return state.filter(user => user.id === action.id)
            
        case GET_USERS:
            return state;

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

        default:
            return state;
    }
}