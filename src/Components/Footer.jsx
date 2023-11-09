import { Line } from 'react-chartjs-2';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsFillArrowUpCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const currentDAte = new Date();
const year = currentDAte.getFullYear();

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Contact Us", href: "/contact" },
  ];
  
function Footer(){
    const toTop = ()=>{
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return(
        <>
       
        <footer className='relative py-2 px-4 left-0 bottom-0 w-full h-[50vh] md:h-[30vh] flex flex-row md:flex-col  text-black bg-secondary mt-10'>
           <div className='md:flex gap-52'>
            <section className='text-5xl text-primary pt-6 pl-2 md:pl-10'>
                <a href="/">Coursfy</a>
            </section>
            <div className='px-5 pb-1 mt-4'>
                <p className="font-semibold text-gray-900">Quick Link</p>
                <ul className="mt-2 lg:mt-6 space-y-3 text-sm">
                 {
                    navigation.map((val)=> {
                        return (
                            <p key={val.name}>
                              <Link
                                href={val.href}
                                className="text-gray-700 transition hover:opacity-75"
                              >
                                {val.name}
                              </Link>
                            </p>
                          );
                    })
                 }
                </ul>
              </div>
              </div>
             <button onClick={toTop}>
          <div className="absolute right-4 bottom-4 md:right-16 md:bottom-auto md:top-5  bg-primary p-3 rounded-full ">
            <BsFillArrowUpCircleFill className="h-6 w-6 text-white " />{" "}
          </div>
        </button>
            <section className='flex md:pt-8 absolute bottom-8 left-7 md:bottom-4  gap-5  md:gap-9 md:ml-10 text-xl md:text-2xl text-black/50'>
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
            <section className='text-xs md:text-sm absolute bottom-2 right-16 md:right-5 '>
                    Copyright {year} | All rights reserved.
            </section>
        </footer>
        </>
    )

}

export default Footer;