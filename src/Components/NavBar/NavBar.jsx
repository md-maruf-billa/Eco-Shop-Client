import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { SlHandbag } from "react-icons/sl";

const NavBar = () => {
    return (
        <div>
            {/* Top Header */}

            <div className='bg-[#333333] text-[#B3B3B3] text-xs p-4'>
                <div className='container mx-auto flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <CiLocationOn />
                        <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <select className='bg-transparent border-none outline-none p-1' name="" id="">
                            <option value="">Eng</option>
                            <option value="">Ban</option>
                        </select>
                        <select className='bg-transparent border-none outline-none p-1' name="" id="">
                            <option value="">USD</option>
                            <option value="">Tka</option>

                        </select>
                        <span>
                            |
                        </span>
                        <button>
                            Sign In
                        </button>
                        <span>/</span>
                        <button>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>


            {/* Middle nav bar */}
            <div className='border-b py-3'>
                <div className="navbar container mx-auto">
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
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li>
                                    <a>Parent</a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <h2 className="text-3xl font-semibold flex items-center gap-2"><img src="/fav.png" alt="" /> Echo Shop</h2>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <div className='flex border-2 rounded-xl'>
                            <label className="input input-bordered flex items-center gap-2 border-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input type="text" className="grow" placeholder="Search" />
                            </label>
                            <div className='bg-[#00B207] btn rounded-tl-none rounded-bl-none'>
                                Search
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className='flex items-center text-2xl gap-2'>
                            <GiSelfLove className='cursor-pointer' /> <span>|</span>
                            <div className='flex items-center gap-3'>
                                <div className='relative cursor-pointer'>

                                    <SlHandbag />
                                    <div className='absolute text-sm -top-2 -right-2 z-10 bg-[#00B207] rounded-full size-5 text-white flex justify-center items-center'>5</div>
                                </div>
                                <div className='text-xs'>
                                    <p>Shopping cart</p>
                                    <h3 className='text-base font-semibold'>$ 574.20</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NavBar;