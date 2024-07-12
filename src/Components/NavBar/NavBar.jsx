import React from 'react';
import { CiLocationOn } from "react-icons/ci";

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


            

        </div>
    );
};

export default NavBar;