import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import { toast } from 'react-toastify';
const SocialLogin = () => {
    const { googleSingIn, githubSingIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // google singIn
    const handleGoogleSingIn = () => {
        googleSingIn(googleProvider)
            .then(result => {
                console.log(result.user);
                toast('Google SingIn successful')
                navigate(from, { replace: true });
            })
            .then(error => {
                // setError(error.message);
            })
    }
    // github SignIn
    const handleGithubSignIn = () => {
        githubSingIn(githubProvider)
            .then(result => {
                toast('Github SignIn successful')
                navigate(from, { replace: true });
            })
            .then(error => {
                // console.log(error);
                // setError(error.message);
            })
    }
    return (
        <div className="flex flex-col items-center ">
            <div className="divider mt-0 text-gray-900">or login with</div>
            <div className="flex items-center space-x-5">

                <a onClick={handleGoogleSingIn} className="bg-white hover:ring ring-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                    <FcGoogle className='w-8 h-8'></FcGoogle>
                </a>
                <a onClick={handleGithubSignIn} className="bg-white hover:ring ring-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                    <FaGithub className='w-8 h-8'></FaGithub>
                </a>
                <a className="bg-white hover:ring ring-blue-500 rounded-full w-10 h-10 flex items-center justify-center" href="">
                    <FaTwitter style={{ color: '#00acee' }} className='w-8 h-8 '></FaTwitter>
                </a>
            </div>
        </div>
    );
};

export default SocialLogin;