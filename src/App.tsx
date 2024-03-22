import { useSelector } from 'react-redux';
import Navbar from './components/Navbar'
import Products from './components/Products'
import Home from './pages/Home'
import { RootState } from './store/store';
import Cart from './components/Cart';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

function App() {
    const isModalOpen = useSelector((state: RootState) => state.modal.isModalOpen);

    return (
        <div className='relative'>
            <Navbar />
            {isModalOpen &&
                <Cart />
            }
            <Home />
            <Products />
            <Toaster position='bottom-center' reverseOrder={false} />
            <Footer />
        </div>
    )
}

export default App
