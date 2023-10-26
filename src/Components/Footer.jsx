import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

const currentDAte = new Date();
const year = currentDAte.getFullYear();


function Footer(){

    return(
        <>
        <div className='text-black'>Hello</div>
        <footer className='relative py-5 sm:px-20 left-0 bottom-0 h-[10vh] flex-row md:flex-col items-center justify-between text-white bg-slate-500 '>
            <section className='text-lg'>
                    Copyright {year} | All rights reserved.
            </section>
            <section className='flex items-center justify-center gap-5 text-2xl text-white'>
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