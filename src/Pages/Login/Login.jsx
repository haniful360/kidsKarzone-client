import React, { useContext, useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import '../../index.css';
import { AuthContext } from '../../Providers/AuthProviders';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';


const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('login')
    let from = location.state?.from?.pathname || "/";
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value;
        // console.log(email, password);
       

        if (password.length < 6) {
            setError('your pass must be 6 characters')
            return;
        }

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
                navigate(from, { replace: true });
                toast('Login successful')

            })
            .catch(err => {
                if (err.message.includes('Firebase: Error (auth/wrong-password).')) {
                    setError('Your password is incorrect')
                }
                else if (err.message.includes('Firebase: Error (auth/user-not-found).')) {
                    setError('Your email is invalid');
                }


            })

    }
    return (
        <div className="w-full  lg:px-0 px-2 mt-10 mb-16 space-y-2 relative">
            <div
                className="flex flex-col space-y-4 mx-auto w-[22rem] md:w-96  p-5 rounded-md  border border-neutral-300 backdrop-blur-lg shadow-lg">
                <div className="flex justify-center">
                    <h1 className="font-medium text-xl"> Please Login</h1>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your
                                email</label>
                            <input type="email" id="email" name='email'
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="username@mail.com" required />
                        </div>
                        <div className=''>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your
                                password</label>
                            <input type=/* {show ? 'text' : 'password'} */'password' id="password" name='password'
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="password" required />
                            <p className='text-red-600'>{error}</p>
                            <p onClick={() => setShow(!show)} className='absolute top-[235px] left-72 lg:left-80'>{show ? <AiFillEyeInvisible style={{fontSize:'24px'}}></AiFillEyeInvisible> :<AiFillEye style={{fontSize:'24px'}}></AiFillEye>}</p>
                            <a className="text-sm font-medium text-blue-500 hover:text-indigo-500" href="#">Forgot Password?</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input id="remember" aria-describedby="remember" type="checkbox"
                                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
                                required />
                            <label htmlFor="remember" className="font-medium text-gray-900">Remember
                                me</label>
                        </div>
                        <input type="submit" value='Login'
                            className="text-white bg-gradient-to-r from-cyan-500  to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center" />
                    </div>
                </form>
                <SocialLogin></SocialLogin>
                <div className="flex">
                    <span className="block mb-2 text-sm font-medium text-gray-900">Don't have account? <Link to='/register'
                        className="text-blue-500 hover:text-indigo-500">Signup
                        now</Link></span>
                </div>

            </div>
        </div>
    );
};

export default Login;