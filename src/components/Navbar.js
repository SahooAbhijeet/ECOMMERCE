import React from 'react'
import logo from "../assets/images/ecommerce.svg";
import { Button } from "@material-tailwind/react";
import handbag from "../assets/images/shopping-bag-hand-drawn-outline-variant-svgrepo-com.svg";

const Navbar = () => {
    return (
        <section>
            <div className='bg-black p-2 w-full'>
                <div className='text-white font-alegreya text-2xl font-bold tracking-wider leading-none text-center'>Welcome ALL
                </div>
            </div>
            <div className='flex justify-around items-center'>
                <div>
                    <img className='h-28 w-full' src={logo} alt='LOGO' />
                </div>
                <div className='flex flex-row items-center'>
                    <Button>Logout</Button>
                    <div className='flex flex-row items-center'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke-width="3"
                            stroke="currentColor"
                            fill="none"
                            className='w-6 h-6'
                        >
                            <path d="M9.06,25C7.68,17.3,12.78,10.63,20.73,10c7-.55,10.47,7.93,11.17,9.55a.13.13,0,0,0,.25,0c3.25-8.91,9.17-9.29,11.25-9.5C49,9.45,56.51,13.78,55,23.87c-2.16,14-23.12,29.81-23.12,29.81S11.79,40.05,9.06,25Z"
                            />
                        </svg>
                        <p className='flex flex-row items-center font-alegreya text-base font-medium tracking-normal leading-none text-center mr-2'>Wish List</p>
                    </div>
                    <div className='flex flex-row items-center cursor-pointer'>
                        <img
                            className='h-6 w-6'
                            src={handbag}
                            alt='HANDBAG'
                        />

                        <p className='flex flex-row items-center font-alegreya text-base font-medium tracking-normal leading-none text-center mr-2'>Shopping Bag</p>
                    </div>
                </div>
            </div>

            <div className='bg-black w-full p-4 flex justify-around'>
                <div className='text-white font-alegreya text-base font-medium tracking-normal leading-none text-center'> 50% OFF
                </div>
                <div className='text-white font-alegreya text-base font-medium tracking-normal leading-none text-center'>
                    Free Shipping And Returns
                </div>
                <div className='text-white font-alegreya text-base font-medium tracking-normal leading-none text-center'>
                    Different Payments Methods
                </div>
            </div>
        </section>
    )
}

export default Navbar