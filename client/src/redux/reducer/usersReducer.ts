import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    errorMsg: ''
};

export const usersReducer = createSlice({
    name: 'usersReducer',
    initialState,
    reducers: {
        allUsers: (state, action) => {
            state.users = action.payload;
        },
        errorMsg: (state, action) => { 
            state.errorMsg = action.payload;
        }

    },
});

export const { allUsers,  errorMsg } = usersReducer.actions;
export default usersReducer.reducer