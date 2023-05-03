import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    username: null,
    email: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        // actions
        addUser: (state, action) => {
            // payload is an obj containing the user data
            const {name, username, email} = action.payload;

            // update the state w/info received from payload
            state.name = name;
            state.username = username;
            state.email = email;
        },
        changeEmail: (state, action) => {
            state.email = action.payload;
        }
    }
})

// user slice creates some actions
export const { addUser, changeEmail } = userSlice.actions;

// and a reducer
export default userSlice.reducer;