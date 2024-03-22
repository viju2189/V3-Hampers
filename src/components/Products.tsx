import { products } from '../utils/products';
import ProductCard from './ProductCard';

const Products = () => {
    return (
        <div className='container mt-[4rem] mx-auto px-[4rem]'>
            <h2 className='text-4xl font-medium text-center m-42'>
                Products
            </h2>
            <div className='text-gray-500 flex gap-8 text-xl mt-4 sn:mt-0 justify-center'>
                <div className='text-black  text-center'>New</div>
                <div>Featured</div>
                <div>Top Sellers</div>
            </div>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Products