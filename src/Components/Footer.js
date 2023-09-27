import React from 'react'
import PublicIcon from '@mui/icons-material/Public';
import { VerifiedUser } from '@mui/icons-material';
const Footer = () => {
    return (
        <div>

            <footer className=" bg-[#f2f2f2] font-Segoe UI">
                <div className="mx-auto w-full max-w-screen-xl">
                    <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
                        <div>
                            <h2 className="mb-6 font-sm font-semibold text-gray-900  font-Segoe UI">What's new</h2>
                            <ul className="text-gray-500 dark:text-gray-400 text-sm">
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">Microsoft 365</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Games</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Surface Pro 9</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Surface Laptop 5</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Surface Laptop Studio</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Surface Laptop Go 2 </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Windows 11 apps</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 font-Segor UI">Microsoft Store</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-sm">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Account Profile</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Download Center</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Microsoft Store Support</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Returns</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Order tracking</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 font-Segor UI">Education</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-sm">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Microsoft in Eucation</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Devices for Education</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Microsoft Teams for Education</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Office Education</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Education training and development</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Deals for students and parents</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Microsoft 365 Education</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Azure for Students</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 font-Segor UI">Business</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-sm">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Microsoft Cloud</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Microsoft Security</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Azure</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Dynamics 365</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Microsoft 365</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Microsoft Advertising</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Microsoft Industry</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Microsoft Teams</a>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 font-Segor UI">Developer & IT</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-sm">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Developer Center</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Documentation</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Microsoft Learn</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Microsoft Tech Community</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Azure Marketplace</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">App Source</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Microsoft Power Platform</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Visual Studio</a>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 font-Segor UI">Company</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-sm">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Careers</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">About Microsoft</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Company News</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy at Microsoft</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Investors</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Security</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Sustainability</a>
                                </li>

                            </ul>
                        </div>

                    </div>
                    <div className="px-4 py-6 items-center justify-between block md:flex">

                        <div className='inline-block text-gray-500 dark:text-gray-400 text-left  md:flex'>
                            <div className='p-2'>
                                <PublicIcon /> English (India)
                            </div>
                            <div className='p-2'>
                                <VerifiedUser /> Your Privacy Choices
                            </div>
                        </div>



                        <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0 ">
                            <ul className=' text-sm md:flex md:text-right grid grid-cols-3 md:grid-cols-1'>
                                <li className="mb-4 p-2">
                                    <a href="#" className="hover:underline">Sustainability</a>
                                </li>
                                <li className="mb-4 p-2">
                                    <a href="#" className="hover:underline">Contact Microsoft</a>
                                </li>
                                <li className="mb-4 p-2">
                                    <a href="#" className="hover:underline">Privacy</a>
                                </li>
                                <li className="mb-4 p-2">
                                    <a href="#" className="hover:underline">Terms of use</a>
                                </li>
                                <li className="mb-4 p-2">
                                    <a href="#" className="hover:underline">Trademarks</a>
                                </li>
                                <li className="mb-4 p-2">
                                    <a href="#" className="hover:underline">About our ads</a>
                                </li>
                                <li className="mb-4 p-2">
                                    <a href="#" className="hover:underline">© Microsoft 2023</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
