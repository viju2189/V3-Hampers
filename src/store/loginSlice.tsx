import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  isLoggedIn: boolean;
  username: string;
  password: string;
  error: string;
}

const initialLoginState: LoginState = {
  isLoggedIn: false,
  username: '',
  password: '',
  error: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialLoginState,
  reducers: {
    loginSuccess(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = '';
    },
  },
});

export const { loginSuccess, logout, setUsername, setPassword, setError, clearError } = loginSlice.actions;

export default loginSlice.reducer;