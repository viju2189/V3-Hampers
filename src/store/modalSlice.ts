import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ModalState {
    isModalOpen: boolean;
}

const initialState: ModalState = {
    isModalOpen: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setToggleModal(state, action: PayloadAction<ModalState['isModalOpen']>) {
            state.isModalOpen = action.payload;
        },
    },
});

export const { setToggleModal } = modalSlice.actions;

export default modalSlice.reducer;