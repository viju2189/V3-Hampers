import React from 'react';
import { ICartItem } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeItem } from '../store/cartSlice';
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

interface ICartItemProps {
    item: ICartItem;
}

const CartItem: React.FC<ICartItemProps> = (props) => {
    const { item } = props;
    const dispatch = useDispatch();
    const newPrice = Math.round(item.price * 0.9);

    const onRemoveItemClick = (): void => {
        dispatch(removeItem(item.id));
    }

    const onIncreaseItemsClick = (): void => {
        dispatch(increaseQuantity(item.id));
    }

    const onDecreaseItemsClick = (): void => {
        dispatch(decreaseQuantity(item.id));
    }

    return (
        <>
            <div className='flex justify-between items-center'>
                <img src={item.img} alt="" className='h-[80px] w-[80px] mb-4' />
                <div className='flex flex-col justify-start items-start w-[200px]'>
                    <h2 className='font-medium text-left'>{item.title}</h2>
                    <p className='text-gray-600 text-sm text-left'>{`£${newPrice}`}</p>
                </div>
                <div className='flex justify-center items-center'>
                    <button onClick={onIncreaseItemsClick} className='unset font-bold text-[2.1rem] cursor-pointer'><CiSquarePlus /></button>
                    <p className='text-black text-sm font-bold border-2 border-[black] px-[7.2px] py-[1px] rounded-[4px]'>{item.quantity}</p>
                    <button onClick={onDecreaseItemsClick} className='unset font-bold text-[2.1rem] cursor-pointer'><CiSquareMinus /></button>
                </div>
                <RxCross1 onClick={onRemoveItemClick} className='cursor-pointer' />
            </div>
            <hr className='w-full' />
        </>
    );
}

export default CartItem;