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
        <div className='fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-70'>
            <div className='relative max-w-[60%] w-full max-h-[90%] bg-white p-6 rounded-md overflow-auto'>
                <IoCloseCircle className='absolute top-0 right-0 mr-4 mt-4 text-4xl cursor-pointer font-bold text-black' onClick={onClose} />
                {items.length > 0 && <h3 className='text-lg font-bold text-gray-600 uppercase text-center py-4'>Your Cart</h3>}
                {items.length === 0 ? (
                    <h1 className='text-center text-[black] text-4xl'>Your cart is empty</h1>
                ) : (
                    <>
                        {items.map((item) => (
                            <CartItems key={item.id} item={item} />
                        ))}
                        <div className='flex justify-center items-center font-medium text-xl py-4 mt-4'>
                            <p>Total: </p>
                            <p>{`£${getTotal()}.00`}</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='w-[50%] py-2 text-center text-white bg-gray-700 hover:bg-gray-800 rounded-md'>Check Out Cart</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Cart;