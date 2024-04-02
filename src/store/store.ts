import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import modalReducer from './modalSlice';
import loginReducer from './loginSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
        login: loginReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;