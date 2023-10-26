import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

const currentDAte = new Date();
const year = currentDAte.getFullYear();


function Footer(){

    return(
        <>
       
        <footer className='relative py-2 px-4 left-0 bottom-0 h-[10vh] flex flex-row md:flex-col items-center justify-between text-white bg-base-200 '>
            <section className='text-base md:text-lg'>
                    Copyright {year} | All rights reserved.
            </section>
            <section className='flex items-center justify-center gap-5 text-xl md:text-2xl text-white'>
                <a href="" className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                    <BsFacebook/>
                </a>
                <a href="" className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                    <BsTwitter/>
                </a>
                <a href="" className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                    <BsInstagram/>
                </a>
                <a href="" className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                    <BsLinkedin/>
                </a>

            </section>
        </footer>
        </>
    )

}

export default Footer;