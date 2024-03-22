import React from 'react';
import { ICartItem, removeItem } from '../store/cartSlice';
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from 'react-redux';

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

  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-8'>
        <img src={item.img} alt="" className='h-[80px] w-[80px] mb-4' />
        <div className=''>
          <h2 className='font-medium'>{item.title}</h2>
          <p className='text-gray-600 text-sm'>{item.quantity} * £ {newPrice}</p>
        </div>
      </div>
      <RxCross1 onClick={onRemoveItemClick} className='cursor-pointer' />
    </div>
  );
}

export default CartItem;