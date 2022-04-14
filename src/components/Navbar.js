import React from 'react'
import { Link } from 'react-router-dom'
import Scaffold from './Scaffold'

const Navbar = () => {
    return (
        <div className='border-solid border-b border-gray-200'>
            <Scaffold>
                <div className='flex flex-row justify-between items-center m-auto py-1 my-4'>
                    <div className='w-48'>
                        <div className='w-48 font-bold	' >
                            <Link to='/'>
                                Home
                            </Link>
                        </div>
                    </div>
                    <ul className='flex flex-row space-x-8'>
                        <li>About</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>

                </div>
            </Scaffold>
        </div>
    )
}

export default Navbar
