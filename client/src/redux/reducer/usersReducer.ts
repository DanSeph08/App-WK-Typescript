import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
};

export const usersReducer = createSlice({
    name: 'usersReducer',
    initialState,
    reducers: {
        allUsers: (state, action) => {
            state.users = action.payload;
        },
    },
});

export const { allUsers } = usersReducer.actions;
export default usersReducer.reducer;