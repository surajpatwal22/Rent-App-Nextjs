import React from 'react'
import Link from 'next/link'
import { ImFacebook } from "react-icons/im";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import Image from 'next/image'
import logo from '../../../public/logo.png'
import HeaderDropdown from './Dropdown';



const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="headertop">
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <ul className="social_link d-flex ">
                                    <li>
                                        <Link className='link' href="/"><ImFacebook className="textwhite" /></Link>
                                    </li>
                                    <li>
                                        <Link className='link' href="/"><FaTwitter className="textwhite" /></Link>
                                    </li>
                                    <li>
                                        <Link className='link' href="/"><FaLinkedinIn className="textwhite" /></Link>
                                    </li>
                                    <li>
                                        <Link className='link' href="/"><FaYoutube className="textwhite" /></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-8 col-12">
                                <div className="contact d-flex">
                                    <Link className='link' href="/"><MdCall className="textwhite" />(+91)8279814667</Link>
                                    <Link className='link' href="/"><MdCall className="textwhite" />(+91)8279814667</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="headerbottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="logosection">
                                    <Image src={logo} width={180} height={50} alt="Picture of the author" />
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-7">
                                
                                <ul className='navbar d-flex '>
                                    <li>
                                        <Link className='link' href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link className='link' href="/">About Us</Link>
                                    </li>
                                    <li>
                                    <HeaderDropdown />
                                    </li>
                                    <li>
                                        <Link className='link' href="/">Services</Link>
                                    </li>
                                    <li>
                                        <Link className='link' href="/">Blog</Link>
                                    </li>
                                    <li>
                                        <Link className='link' href="/">Contact Us </Link>
                                    </li>


                                </ul>
                            </div>
                            <div className="col-lg-2">
                                <div className="nav-last">
                                        <Link className='link' href="/">Login </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
