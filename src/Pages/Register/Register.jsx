import React, { useContext, useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import '../../index.css';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProviders'
import { toast } from 'react-toastify';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import useTitle from '../../hooks/useTitle';


const Register = () => {
    const { createUser,updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [show, setShow] = useState(false);
    useTitle('Register')
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        // validation
        if (password.length < 6) {
            setError('please add at least 6 characters in your password')
            return;
        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('please add at least one special character.')
            return;
        }

        // user create
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                handleUpdateUserProfile(name, photoURL);
                form.reset();
                toast('user has created successfully')
                // navigate('/login')

            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })

        // name and photoURL
        const handleUpdateUserProfile = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL
            }
            updateUserProfile(profile)
                .then(result => {
                    console.log(result.user);
                })
                .catch(err => {
                    console.log(err);

                })
        }

    }
    return (
    <div className="w-full mt-10 mb-16 relative lg:px-0 px-2">
            <div
                className="flex flex-col space-y-4 mx-auto lg:w-[28rem] p-8 rounded-md border border-neutral-300 backdrop-blur-lg shadow-lg">
                <div className="flex justify-center">
                    <h1 className="font-medium text-2xl"> Please Register!</h1>
                </div>
                <form onSubmit={handleRegister}>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your
                                name</label>
                            <input type="text" id="name" name="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="name" required />
                        </div>
                        <div>
                            <label htmlFor="photoURL" className="block mb-2 text-sm font-medium text-gray-900">
                                photoURL</label>
                            <input type="text" id="photoURL" name='photoURL'
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="photoURL" required />
                        </div>
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
                            <p onClick={() => setShow(!show)} className='absolute top-[462px] left-80 lg:left-96'>{show ? <AiFillEyeInvisible style={{fontSize:'24px'}}></AiFillEyeInvisible> :<AiFillEye style={{fontSize:'24px'}}></AiFillEye>}</p>
                            {/* <a className="text-sm font-medium text-blue-500 hover:text-indigo-500" href="#">Forgot Password?</a> */}
                        </div>
                        {/* <div className="flex items-center space-x-2">
                            <input id="remember" aria-describedby="remember" type="checkbox"
                                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
                                required />
                            <label htmlFor="remember" className="font-medium text-gray-900">Remember
                                me</label>
                        </div> */}
                        <input type="submit" value='Register'
                            className="text-white bg-gradient-to-r from-cyan-500  to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center" />
                    </div>
                </form>
                <SocialLogin></SocialLogin>
                <div className="flex">
                    <span className="block mb-2 text-sm font-medium text-gray-900">Already have an account? <Link to='/login'
                        className="text-blue-500 hover:text-indigo-500">Login
                        now</Link></span>
                </div>

            </div>
        </div>
    );
};

export default Register;