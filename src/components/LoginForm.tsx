import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, loginSuccess, setError, setPassword, setUsername } from '../store/loginSlice';
import { RootState } from '../store/store';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
    const dispatch = useDispatch();
    const { username, password, error } = useSelector((state: RootState) => state.login);
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === '' && password === '') {
            dispatch(loginSuccess());
            navigate('/');

        } else {
            dispatch(setError('Invalid username or password'));
        }
        dispatch(setUsername(''));
        dispatch(setPassword(''));
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setUsername(e.target.value));
        dispatch(clearError());
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPassword(e.target.value));
        dispatch(clearError());
    };

    return (
        <div className='flex justify-center items-center bg-red-200 w-full h-screen'>
            <div className="p-6 rounded-2xl shadow-lg bg-gray-100 w-[25rem] h-[25rem]">
                <div className='p-8  m-auto'>
                    <h2 className="text-2xl font-semibold mb-4">Login</h2>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={handleUsernameChange}
                            className="border rounded-lg py-2 px-3 w-full my-4"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="border rounded-lg py-2 px-3 w-full mb-4"
                        />
                    </div>
                    <button onClick={handleLogin} className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;