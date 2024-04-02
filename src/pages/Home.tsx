import { Toaster } from "react-hot-toast";

import Products from "../components/Products";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="relative">
            <Navbar />
            <div className='relative'>
                <div className='bg-[#e3edf6] bg-[url(/banner.webp)] bg-center bg-cover w-full md:w-full h-[636px] md:h-[480px]'>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center w-full z-10">
                    <p className="text-white text-center text-sm md:text-lg lg:text-xl tracking-wide">PERFECT FOR ANY OCCASION</p>
                    <h1 className="text-white text-center text-lg md:text-2xl lg:text-4xl font-bold tracking-wider mt-2">NEW GIFT SETS</h1>
                    <button className="mt-4 bg-white px-8 py-3 text-black text-base md:text-lg lg:text-xl tracking-wide">SHOP NOW</button>
                </div>
            </div>
            <Products />
            <Toaster position='bottom-center' reverseOrder={false} />
            <Footer />
        </div>
    );
}

export default Home;