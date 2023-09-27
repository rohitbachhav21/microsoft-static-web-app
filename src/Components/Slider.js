import React from 'react'
import laptop from "../Images/laptop.png"
import blackmicro from "../Images/blackmicro.png"
import surfacedevice from "../Images/surfacedevice.png"
import xbox from "../Images/xbox.png"
import surfacepro from "../Images/surfacepro.jpeg"
import microsoft365 from "../Images/microsoft365.jpeg"
import xboxseriesx from '../Images/xboxseriesx.jpeg'
import xboxseriess from "../Images/xboxseriess.webp"
import bing from "../Images/bing.jpeg"
import cloudpc from "../Images/cloudpc.webp"
import surfaceforbusiness from "../Images/surfaceforbusiness.webp"
import microsoft365forfree from "../Images/microsoft365forfree.webp"
import windows11forbusiness from "../Images/windows11forbusiness.jpeg"
import blueprint from "../Images/blueprint.webp"
import Facebook from "../Images/Facebook.webp"
import YouTube from "../Images/YouTube.webp"
import x from "../Images/x.webp"

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Slider = () => {


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div>
            <div className="slider flex flex-col-reverse md:flex-row bg bg-[#f2f2f2] mx-1 shadow-xl md:shadow-none">
                <div className="left block p-8  md:items-baseline  md:m-20 ">
                    <button className='bg-[#ffb900]  text-black py-1 px-3 rounded-sm my-2 border-none font-semmibold md:left-0 font-semibold'>New</button>
                    <h1 className="text-2xl  my-2 text-left from-neutral-800 font-semibold md:text-4xl ">
                        Surface Laptop Go 3
                    </h1>
                    <p className="  text-left my-2">An ultraportable, everyday laptop with the performance and battery life you need to get it all done.</p>
                    <button className='bg-[#0066b8]  text-white py-1 px-1.5 rounded-sm my-2 border-none font-bold'>Learn More</button>
                </div>
                <div className="right shadow-sm md:shadow-none ">
                    <img src={laptop} alt="" />
                </div>
            </div>


            <div className=' mx-6 my-3  md:mx-12 md:my-10 md:px-48 '>
                <div className='grid grid-cols-2 md:grid-cols-4 '>
                    <div className='m-3 md:m-2'>
                        <div className="icon flex justify-center">
                            <img src={blackmicro} alt="" />
                        </div>
                        <div className="text-center underline text-blue-500 p-2 cursor-pointer font-semibold">
                            Choose your Microsoft 365
                        </div>
                    </div>
                    <div className='m-3 md:m-2'>
                        <div className="icon flex justify-center">
                            <img src={surfacedevice} alt="" />
                        </div>
                        <div className="text-center underline text-blue-500 p-2 cursor-pointer font-semibold">
                            Explore Surface devices
                        </div>
                    </div>
                    <div className='m-3 md:m-2'>
                        <div className="icon flex justify-center">
                            <img src={xbox} alt="" />
                        </div>
                        <div className="text-center underline text-blue-500 p-2 cursor-pointer font-semibold">
                            Buy Xbox games and consoles
                        </div>
                    </div>
                    <div className='m-3 md:m-2'>
                        <div className="icon flex justify-center">
                            <img src={blackmicro} alt="" />
                        </div>
                        <div className="text-center underline text-blue-500 p-2 cursor-pointer font-semibold">
                            Get Windows 11
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:my-16 md:mx-16'>
                <div className='grid grid-cols-2 md:grid-cols-4'>
                    <div className="p-3">
                        <div className="">
                            <img src={surfacepro} alt="" />
                        </div>
                        <div className="text-xl font-semibold my-2 md:text-3xl">
                            <h1 className=''>Surface Pro 9</h1>
                        </div>
                        <div className="">
                            The tablet flexibility you want and the laptop performance you need — all in one ultra-portable device.
                        </div>
                        <div className='flex  text-blue-500 font-semibold'>
                            <p>Learn More</p>
                            <KeyboardArrowRightIcon />
                        </div>
                    </div>

                    <div className="p-3">
                        <div className="">
                            <img src={microsoft365} alt="" />
                        </div>
                        <div className="text-xl font-semibold my-2 md:text-3xl">
                            <h1>Microsoft 365</h1>
                        </div>
                        <div className="">
                            Turn your ideas into reality, stay safer online and off, and focus on what matters most with Microsoft 365 apps.
                        </div>
                        <div className='flex  text-blue-500 font-semibold'>
                            <p>For one person</p>
                            <KeyboardArrowRightIcon />
                        </div>
                        <div className='flex  text-blue-500 font-semibold'>
                            <p>For up to six people</p>
                            <KeyboardArrowRightIcon />
                        </div>
                    </div>

                    <div className="p-3">
                        <div className="">
                            <img src={xboxseriesx} alt="" />
                        </div>
                        <div className="text-xl font-semibold my-2 md:text-3xl">
                            <h1>Xbox Series X</h1>
                        </div>
                        <div className="">The fastest, most powerful Xbox ever.</div>
                        <div className="flex  text-blue-500 font-semibold">
                            <p>Shop Xbox Series X</p>
                            <KeyboardArrowRightIcon />
                        </div>
                    </div>


                    <div className="p-3">
                        <div className="">
                            <img src={xboxseriess} alt="" />
                        </div>
                        <div className="text-xl font-semibold my-2 md:text-3xl">
                            <h1>Xbox Series S</h1>
                        </div>
                        <div className="">
                            Next-gen performance in the smallest Xbox ever.
                        </div>
                        <div className="flex text-blue-500 font-semibold">
                            <p>Shop Xbox Series S</p>
                            <KeyboardArrowRightIcon />
                        </div>
                    </div>

                </div>
            </div>


            <div className="bing p-3 mt-4 block md:hidden">
                <img src={bing} alt="" className='shadow-sm' />

                <div className='p-4 '>
                    <h1 className='text-2xl font-semibold my-2 md:text-3xl'>Announcing the next wave of AI innovation</h1>
                    <p>The new Microsoft Bing and Edge will soon feature more visual search responses, chat history, and persistent chat within Edge. We’re also adding actions to help people complete tasks.</p>
                    <button className="bg-[#0066b8]  text-white py-1 px-1.5 rounded-sm my-2 border-none font-bold">Learn more about it</button>
                </div>
            </div>

            <div class="m-20 relative hidden md:block">
                <img src={bing} alt="" className='shadow-sm' />
                <div class="absolute my-auto  top-5 text-left px-12 py-8 w-10/12">
                    <h1 class="text-black font-semibold text-4xl m-1"> Announcing the next wave of AI innovation </h1>
                    <p class="text-black m-1">
                        The new Microsoft Bing and Edge will soon feature more visual search responses, chat history, and persistent chat within Edge. We’re also adding actions to help people complete tasks.
                    </p>
                    <button className="bg-[#0066b8]  text-white py-1 px-1.5 rounded-sm my-2 border-none font-bold">Learn more about it</button>
                </div>
            </div>


            <div className='md:my-16 md:mx-16'>
                <h1 className='text-2xl font-semibold my-2 md:text-4xl px-2'>For business</h1>
                <div className='grid grid-cols-2 md:grid-cols-4'>
                    <div className="p-3">
                        <div className="">
                            <img src={surfaceforbusiness} alt="" />
                        </div>
                        <div className="text-xl font-semibold my-2 md:text-3xl">
                            <h1 className=''>Surface for business</h1>
                        </div>
                        <div className="">
                            No matter what you do, there's a Surface to help you do it.
                        </div>
                        <div className='flex  text-blue-500 font-semibold'>
                            <p>Shop now</p>
                            <KeyboardArrowRightIcon />
                        </div>
                    </div>

                    <div className="p-3">
                        <div className="">
                            <img src={microsoft365forfree} alt="" />
                        </div>
                        <div className="text-xl font-semibold my-2 md:text-3xl">
                            <h1>Try Microsoft 365 for free</h1>
                        </div>
                        <div className="">
                            Get Microsoft Teams, secure cloud storage and premium apps across devices with a free one-month Microsoft 365 Business Standard trial.
                        </div>
                        <div className='flex  text-blue-500 font-semibold'>
                            <p>Start your free trial</p>
                            <KeyboardArrowRightIcon />
                        </div>

                    </div>

                    <div className="p-3">
                        <div className="">
                            <img src={windows11forbusiness} alt="" />
                        </div>
                        <div className="text-xl font-semibold my-2 md:text-3xl">
                            <h1>Windows 11 for business</h1>
                        </div>
                        <div className="">Designed for hybrid wor. Powerful for employees. Consistent for IT. Secure for all.</div>
                        <div className="flex  text-blue-500 font-semibold">
                            <p>Learn more</p>
                            <KeyboardArrowRightIcon />
                        </div>
                    </div>


                    <div className="p-3">
                        <div className="">
                            <img src={cloudpc} alt="" />
                        </div>
                        <div className="text-xl font-semibold my-2 md:text-3xl">
                            <h1>Welcome to your Windows 365 Cloud PC</h1>
                        </div>
                        <div className="">
                            Securely stream your Windows experience from the Microsoft cloud to any device.
                        </div>
                        <div className="flex text-blue-500 font-semibold">
                            <p>Get it today</p>
                            <KeyboardArrowRightIcon />
                        </div>
                    </div>

                </div>
            </div>


            <div className="bing p-3 mt-4 block md:hidden">
                <img src={blueprint} alt="" className='shadow-sm' />

                <div className='p-4 '>
                    <h1 className='text-2xl font-semibold my-2 md:text-3xl'>Our blueprint for governing AI in India</h1>
                    <p>The new Microsoft Bing and Edge will soon feature more visual search responses, chat history, and persistent chat within Edge. We’re also adding actions to help people complete tasks.</p>
                    <button className="bg-[#0066b8]  text-white py-1 px-1.5 rounded-sm my-2 border-none font-bold">Learn more about it</button>
                </div>
            </div>

            <div class="m-20 relative hidden md:block ">
                <img src={blueprint} alt="" className='shadow-sm' />
                <div class="absolute m-10  top-5 text-left px-12 py-8 w-96 bg-white shadow-md">
                    <h1 class="text-black font-semibold text-4xl m-1"> Our blueprint for governing AI in India</h1>
                    <p class="text-black m-1">
                        The new Microsoft Bing and Edge will soon feature more visual search responses, chat history, and persistent chat within Edge. We’re also adding actions to help people complete tasks.
                    </p>
                    <button className="bg-[#0066b8]  text-white py-1 px-1.5 rounded-sm my-2 border-none font-bold">Learn more about it</button>
                </div>
            </div>

            <div className='flex m-10 px-12 md:mt-48'>
                <h1>Follow Microsoft</h1>


                <img src={Facebook} alt="" className='h-7 px-2' />
                <img src={x} alt="" className='h-7 px-2' />
                <img src={YouTube} alt="" className='h-7 px-2' />
            </div>






        </div>
    )
}

export default Slider
