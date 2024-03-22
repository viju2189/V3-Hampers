import React from 'react'
import { IProduct } from '../utils/products';
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import toast from 'react-hot-toast';


interface IProductCard {
    product: IProduct;
}
const ProductCard: React.FC<IProductCard> = (props) => {
    const { product } = props;
    const dispatch = useDispatch();
    const onAddToCartClick = () => {
        const payload = {
            id: product.id,
            title: product.title,
            img: product.img,
            price: product.price,
            quantity: 1
        }
        dispatch(addItem(payload));
        toast.success("Added to Cart")
    }
    return (
        <div className='border border-gray-200'>
            <div className='text-center border-b border-gray-200'>
                <img src={product.img} alt="productImage" className='inline-block w-[250px] h-[300px]' />
            </div>
            <div className='px-8 py-4'>
                <div className='flex justify-between items-center'>
                    <p className='font-medium text-#eab308-500 text-xl'>£ {product.price}</p>

                    <h2 className='font-medium'>{product.title}</h2>
                </div>

                <div onClick={onAddToCartClick} className='flex mx-auto mt-3 font-semibold border-2 border-[#c7d2fe] justify-center tracking-wide hover:bg-[#c7d2fe] rounded-lg items-center text-black px-4 py-2 cursor-pointer sm:w-[60%] md:w-auto'>
                    <FaShoppingCart className='mr-2' /> Add To Cart
                </div>
            </div>
        </div>
    )
}

export default ProductCard