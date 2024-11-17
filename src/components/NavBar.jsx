import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { CiSearch } from "react-icons/ci";

const NavBar = () => {

    return (
        <div className="navbar bg-transparent text-white py-6 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-transparent rounded-box z-[1] mt-3 w-52 p-2 shadow text-sm font-medium">
                        <li><NavLink to="/news">News</NavLink></li>
                        <li><NavLink to="/destination">Destination</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><NavLink to="contact">Contact</NavLink></li>

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl w-[120px] h-[56px]">
                    <img
                        className="invert brightness-0"
                        src={logo} alt="" />
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <div className="relative">
                    {/* Search Icon */}
                    <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-xl" />
                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="Search your Destination..."
                        className="input input-bordered rounded-lg border-white w-[370px] h-[44px] pl-10 placeholder:text-sm placeholder:font-medium bg-[rgba(255,255,255,0.2)] text-white placeholder-white"
                    />
                </div>


                <ul className="menu menu-horizontal px-1 text-[16px] font-medium">
                    <li><NavLink to="/news">News</NavLink></li>
                    <li><NavLink to="/destination">Destination</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="contact">Contact</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className="btn bg-[#F9A51A] text-[16px] font-medium text-black px-7 rounded-lg">Login</Link>
            </div>
        </div>
    );
};

export default NavBar;