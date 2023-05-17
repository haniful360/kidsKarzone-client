import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaTwitter } from 'react-icons/fa';


const Login = () => {
    return (
        <div className="w-full space-y-2">
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
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your
                                password</label>
                            <input type="password" id="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="password" required />
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
                    <div className="divider mt-0">or login with</div>
                    <div className="flex items-center space-x-5 bg-white shadow-md rounded-lg py-2 lg:px-5 ">

                        <a className="btn-bg-white hover:ring ring-blue-300 rounded-full w-9 h-9" href="#">
                            <FcGoogle className='w-9 h-9'></FcGoogle>
                        </a>
                        <a className="bg-white hover:ring ring-blue-300 rounded-full w-9 h-9" href="">
                            <FaGithub className='w-9 h-9'></FaGithub>
                        </a>
                        <a className="bg-white hover:ring ring-blue-300 rounded-full w-9 h-9" href="">
                            <FaTwitter style={{ color: '#00acee' }} className='w-9 h-9'></FaTwitter>
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