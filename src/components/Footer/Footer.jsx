import React from 'react';
import { CgMail } from 'react-icons/cg';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaFacebook, FaGithub, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa6';
import { TbBrandGithub } from 'react-icons/tb';
import { Link } from 'react-router';

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <div className=' lg:px-48 py-12 lg:py-18'>
            {/* <hr className='my-18 text-secondary' /> */}
            <div className="flex flex-col gap-6 lg:flex-row justify-between">
                <div className="flex items-center gap-4">
                    <div className='p-4 lg:p-6 border border-secondary rounded-full'>
                        <FaPhoneAlt size={22} />
                    </div>
                    <h2 className='text-2xl lg:text-3xl'>+91 8001811134</h2>
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-4 lg:p-6 border border-secondary rounded-full">
                        <CgMail size={22} />
                    </div>
                    <h2 className='text-xl lg:text-3xl'>bapanmodak.dev@gmail.com</h2>
                </div>
                <div className="flex gap-4 *:p-4 lg:*:p-6 *:rounded-full *:border *:border-secondary">
                    <Link to='https://github.com/bapanmodak'><FaGithub size={28} /></Link>
                    <Link to='https://www.facebook.com/profile.php?id=61577290363410'><FaFacebook size={28} /></Link>
                    <Link to='https://www.linkedin.com/in/bapanmodak'><FaLinkedin size={28} /></Link>
                </div>
            </div>

            <hr className='my-12  text-secondary' />

            <p className="text-center">© <span>{year}</span> Bapan Modak. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;