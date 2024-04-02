import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserData {
    // Define the structure of user data here
    // For example:
    username: string;
    email: string;
    password: string;
}

export const registerUserr = createAsyncThunk(
    "auth/register",
    async (userData: UserData, thunkAPI) => {
        try {
            const response = await axios.post<{ user: UserData }>("https://api.realworld.io/api/users", {
                user: userData,
            });
            return response.data.user;
        } catch (err: any) {
            return thunkAPI.rejectWithValue(err.response.data.errors);
        }
    }
);