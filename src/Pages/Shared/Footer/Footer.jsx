import React from 'react';
import logo from '../../../assets/logo1.png'
import { FaFacebook,FaTwitter,FaLinkedin } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='background'>
            <footer className="footer p-10 py-16 text-white bg-[#105397e6]">
                <div className=''>
                    <img className='h-24' src={logo} alt="" />
                    <h2 className='text-2xl'>KidsCarZone</h2> 
                    <p>Providing reliable tech since 2023</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-6 text-white bg-[#105397f4] border-t  border-base-300">
                <div className="items-center grid-flow-col">
                    <p className='text-white'>KidsCarZone<br />&copy; copyright all right reserved by KidsCarZone</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <Link to='https://www.facebook.com/' target='_blank'><FaFacebook style={{fontSize:'28px',color:'white'}}></FaFacebook></Link>
                        <Link to='https://bd.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F' target='_blank'><FaLinkedin style={{fontSize:'28px',color:'white'}}></FaLinkedin></Link>
                        <Link to='https://twitter.com/' target='_blank'><AiFillTwitterCircle style={{fontSize:'28px',color:'white'}}> </AiFillTwitterCircle></Link>
                    </div>
                </div>
            </footer>
        </div>

    );
};

export default Footer;

