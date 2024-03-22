import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { IoCloseCircle } from "react-icons/io5";
import { setToggleModal } from '../store/modalSlice';
import CartItems from './CartItem';

const Cart = () => {
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(setToggleModal(false))
    }

    const getTotal = () => {
        const total = items.reduce((accumulator, item) => accumulator + Math.ceil(item.price * 0.9) * item.quantity, 0);
        return total;
    }
    return (
        <div className='fixed left-0 top-0 z-20 w-full h-full flex items-center justify-center'>
            <div className='absolute inset-0 bg-black opacity-70' />
            <div className='max-w-[400px] w-full bg-white p-6 rounded-md relative'>
                <IoCloseCircle className='absolute top-0 right-0 mr-6 mt-4 text-2xl cursor-pointer font-bold text-[red]' onClick={onClose} />
                <h3 className='pt-6 text-lg font-bold text-gray-600 uppercase text-center py-4'>Your Cart</h3>
                {
                    items.map((item) => (
                        <CartItems key={item.id} item={item} />
                    ))
                }

                <div className='flex justify-between items-center font-medium text-xl py-4'>
                    <p>Total</p>
                    <p>{`£ ${getTotal()}.00`}</p>
                </div>

                <div>
                    <button className='bg-[#c7d2fe] text-black text-center w-full rounded-md py-2  hover:bg-[#c7d2fe] '> Check Out Cart</button>
                </div>

            </div>
        </div>
    )
}

export default Cart;