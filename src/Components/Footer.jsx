import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsFillArrowUpCircleFill } from 'react-icons/bs'

const currentDAte = new Date();
const year = currentDAte.getFullYear();


function Footer(){
    const toTop = ()=>{
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return(
        <>
       
        <footer className='relative py-2 px-4 left-0 bottom-0 w-full h-[30vh] md:h-[20vh] flex flex-row md:flex-col  text-black bg-secondary'>
           
            <section className='text-5xl text-primary pt-6 pl-10'>
                <a href="/">Coursfy</a>
            </section>
             <button onClick={toTop}>
          <div className="absolute right-10 bottom-4 md:right-16 md:bottom-auto md:top-5  bg-primary p-3 rounded-full ">
            <BsFillArrowUpCircleFill className="h-6 w-6 text-white " />{" "}
          </div>
        </button>
            <section className='flex pt-8  gap-9 ml-10 text-xl md:text-2xl text-black/50'>
                <a href="" className='hover:text-primary transition-all ease-in-out duration-300'>
                    <BsFacebook/>
                </a>
                <a href="" className='hover:text-primary transition-all ease-in-out duration-300'>
                    <BsTwitter/>
                </a>
                <a href="" className='hover:text-primary transition-all ease-in-out duration-300'>
                    <BsInstagram/>
                </a>
                <a href="" className='hover:text-primary transition-all ease-in-out duration-300'>
                    <BsLinkedin/>
                </a>

            </section>
            <section className='text-base md:text-sm absolute bottom-2 right-5'>
                    Copyright {year} | All rights reserved.
            </section>
        </footer>
        </>
    )

}

export default Footer;