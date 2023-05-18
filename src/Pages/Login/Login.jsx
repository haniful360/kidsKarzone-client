import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import '../../index.css'


const Login = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="w-full space-y-2 relative">
            <div
                className="flex flex-col space-y-4 mx-auto w-[22rem] md:w-96  p-5 rounded-md bg-white/80 backdrop-blur-lg shadow-lg">
                <div className="flex justify-center">
                    <h1 className="font-medium text-xl"> Please Login</h1>
                </div>
                <form>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your
                                email</label>
                            <input type="email" id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="username@mail.com" required />
                        </div>
                        <div className=''>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your
                                password</label>
                            <input type={show ? 'text' : 'password'} id="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="password" required />
                                {/* <p onClick={() => setShow(!show)} className='absolute top-[235px] left-72 lg:left-80'>{show ? <AiFillEyeInvisible style={{fontSize:'24px'}}></AiFillEyeInvisible> :<AiFillEye style={{fontSize:'24px'}}></AiFillEye>}</p> */}
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
                <div className="flex flex-col items-center ">
                    {/* <p className="block mb-2 text-sm font-medium text-gray-900">or login with</p> */}
                    <div className="divider mt-0 text-gray-900">or login with</div>
                    <div className="flex items-center space-x-5">

                        <a className="bg-white hover:ring ring-blue-500 rounded-full w-10 h-10 flex items-center justify-center" href="#">
                            <FcGoogle className='w-8 h-8'></FcGoogle>
                        </a>
                        <a className="bg-white hover:ring ring-blue-500 rounded-full w-10 h-10 flex items-center justify-center" href="">
                            <FaGithub className='w-8 h-8'></FaGithub>
                        </a>
                        <a className="bg-white hover:ring ring-blue-500 rounded-full w-10 h-10 flex items-center justify-center" href="">
                            <FaTwitter style={{ color: '#00acee' }} className='w-8 h-8 '></FaTwitter>
                        </a>
                    </div>
                </div>
                <div className="flex">
                    <span className="block mb-2 text-sm font-medium text-gray-900">Don't have account? <a
                        className="text-blue-500 hover:text-indigo-500" href="#">Signup
                        now</a></span>
                </div>

            </div>
        </div>
    );
};

export default Login;