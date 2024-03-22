import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ICartItem {
    id: number;
    title: string;
    img: string;
    price: number,
    quantity: number
}

interface ICartState {
    items: ICartItem[];
}

const initialState: ICartState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<ICartItem>) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }
        },
        removeItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart(state) {
            state.items = [];
        },
        increaseQuantity(state, action: PayloadAction<number>) {
            const itemToIncrease = state.items.find(item => item.id === action.payload);
            if (itemToIncrease) {
                itemToIncrease.quantity++;
            }
        },
        decreaseQuantity(state, action: PayloadAction<number>) {
            const itemToDecrease = state.items.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity--;
            }
        },
    }
});

export const { addItem, removeItem, clearCart,increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
