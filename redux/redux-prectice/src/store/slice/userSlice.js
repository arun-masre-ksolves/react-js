import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('fetchUsers', async()=> {
    const response = await fetch ("http://127.0.0.1:3004/products");
    return response.json();
});

const userSlice = createSlice ({
    name: "todo",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
            console.log("data",action.payload)
        },
        removeUser(state, action) {
            state.splice(action.payload, 1)
        },
        // deleteUsers(state, action) {
        //     state.pop(action.payload)
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            console.log('Error', action.payload)
            state.isError= true;
        });
    }
});

console.log(userSlice.actions)


export default userSlice.reducer;
export const { addUser, removeUser} = userSlice.actions;