import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Providers/AuthProviders';
import ActiveLink from '../../Others/ActiveLink/ActiveLink';
import logo from '../../../assets/logo1.png'

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then(result => { })
            .catch(error => { })
    }
    const navItem = <>
        <li><ActiveLink to='/'>Home</ActiveLink></li>
        <li><ActiveLink to='/alltoys'>All Toys</ActiveLink></li>
        <li><ActiveLink to='/blogs'>Blogs</ActiveLink></li>
        {user ? <>
            <div className="flex flex-col lg:flex-row md:flex-row">
                <li><ActiveLink to='/addtoys'>Add Toys</ActiveLink></li>
                <li><ActiveLink to='/mytoys'>My Toys</ActiveLink></li>
                <li><button onClick={handleLogout}>Logout</button></li>
                <div className=" tooltip tooltip-bottom ring-2 w-10 h-10 rounded-full tooltip-primary mt-2" data-tip={user?.displayName || user?.email}>
                    <img className=' rounded-full' src={user.photoURL} alt='' />
                </div>
            </div>
        </> : <li><ActiveLink to='/login'>Login</ActiveLink></li>}
    </>
    return (
        <div style={{borderBottom:'3px solid #105397'}} className="bg-base-200 h-22 my-auto shadow bg-gradient-to-r from-[#527da8c2] to-[#71879d1b]">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="pr-28 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box">
                            {navItem}
                        </ul>
                    </div>
                    <Link to='/' className=" font-bold text-xl">
                        <div className='flex h-14 items-center  rounded-lg'>
                            <img className='h-14' src={logo} alt="" />
                            <h2 className='text-[#105397] uppercase text-xl mt-2'>KidsCarZone</h2>
                        </div>
                        
                    </Link>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;