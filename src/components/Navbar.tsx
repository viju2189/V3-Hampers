import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuUserCircle } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setToggleModal } from '../store/modalSlice';

const Navbar: React.FC = () => {
    const count = useSelector((state: RootState) => state.cart.items.length);
    const dispatch = useDispatch();

    const onClickCart = (): void => {
        dispatch(setToggleModal(true));
    }
    return (
        <div className="pt-4 bg-white top-0 fixed w-full z-10 px-16">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <h1 className='text-2xl md:text-3xl font-bold cursor-pointer'>V3 Hampers</h1>
                    <div className='flex justify-between items-center gap-8 md:gap-8'>
                        <div className='flex items-center gap-2 md:gap-8'>
                            <div className='md:flex items-center gap-3 hidden'>
                                <LuUserCircle aria-label="User Profile" />
                            </div>
                            <div>
                                <a href='#' className='text-gray-500'>Sign In</a>
                            </div>
                        </div>
                        <div onClick={onClickCart} className='text-gray-500 text-xl md:text-3xl relative cursor-pointer' aria-label="Shopping Cart">
                            <MdOutlineShoppingCart />
                            <div className='absolute -top-2 -right-2 bg-red-500 w-5 rounded-full text-white text-xs flex items-center justify-center'>{count}</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='border-b border-gray-200 pt-4'></div>
        </div>
    );
};

export default Navbar;