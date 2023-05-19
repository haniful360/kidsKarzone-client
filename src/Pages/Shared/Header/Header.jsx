import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Providers/AuthProviders';
// import log from '../../../assets/logo.png'

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then(result => { })
            .catch(error => { })
    }
    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/alltoys'>All Toys</Link></li>
        <li><Link to='/blogs'>Blog</Link></li>
        {user ? <>
            <div className="flex">
            <li><Link to='/addtoys'>Add Toys</Link></li>
            <li><Link to='/mytoys'>My Toys</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
            <div className="tooltip tooltip-bottom tooltip-secondary" data-tip={user?.displayName || user?.email}>
                <img className='w-10 h-10 rounded-full' src={user.photoURL} alt='' />
            </div>
            </div>
        </> : <li><Link to='/login'>Login</Link></li>}
    </>
    return (
        <div className="bg-base-200 shadow ">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <Link to='/' className=" bg-red-500 text-xl">
                      
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                <a className="btn">Get started</a>
            </div> */}
            </div>
        </div>
    );
};

export default Header;