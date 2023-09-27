import React from 'react'
import mic from "../Images/microsoft.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar = () => {
    return (
        <div className='navbar flex justify-between items-center p-4'>
            <div className='flex justify-center items-center md:order-2'>

                <div className="hamburger inline-block p-4 cursor-pointer md:hidden">
                    <div className="line h-0.5 w-6 bg-black my-1"></div>
                    <div className="line h-0.5 w-6 bg-black my-1"></div>
                    <div className="line h-0.5 w-6 bg-black my-1"></div>
                </div>
                <div className="search md:hidden mx-2 cursor-pointer"><SearchIcon /></div>
            </div>
            <div className='logo text-center md:order-1 flex'>
                <div className=' ml-2'>
                    <img src={mic} alt="" className='w-1/2' />
                </div>
                <div className="feature absolute md:static w-fit md:w-auto bg-gray-100 md:bg-white inset-0 md:flex md:mx-4 md:space-x-2 -translate-x-96 md:translate-x-0">
                    <div className="feature-item px-1 cursor-pointer">Microsoft 365</div>
                    <div className="feature-item px-1 cursor-pointer">Office</div>
                    <div className="feature-item px-1 cursor-pointer">Windows</div>
                    <div className="feature-item px-1 cursor-pointer">Surface</div>
                    <div className="feature-item px-1 cursor-pointer">Support</div>
                    <div className="feature-item px-1 cursor-pointer">Xbox</div>
                </div>
            </div>
            <div className='cart text-center md:order-3 flex'>
                <div className="search hidden md:block px-2 cursor-pointer"><SearchIcon /></div>
                <div className='flex'>
                    <div className='mx-2 cursor-pointer'><ShoppingCartIcon /></div>
                    <div className='mx-2 cursor-pointer'><AccountCircleIcon /></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
