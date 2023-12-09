import { Link } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Homepng from "../Assets/homePageMainImage.png"
import { Typewriter } from "react-simple-typewriter";
import homepng1 from "../../src/Assets/png/statistics1.png"
import homepng2 from "../../src/Assets/png/statistics2.png"
import homepng3 from "../../src/Assets/png/statistics3.png"
import homepng4 from "../../src/Assets/png/statistics4.png"
import Features from "../Components/Feature";
import { useSelector } from "react-redux";


function HomePage(){
    const  isLoggedIn = useSelector((state)=> state?.auth?.role)
        
    return(
        <HomeLayout>
            
            <div className="pt-10  md:max-w-5xl lg:max-w-7xl text-black flex flex-col-reverse md:flex-row items-center justify-center md:h-screen  mx-6 lg:mx-auto">
            {isLoggedIn &&  (
        

                <div>
               <Link to={"/user/profile"} className="absolute top-5 right-7"> 
                            <button className="border border-1 text-black hover:bg-secondary/40 px-2 py-2 lg:px-8 lg:py-2 font-semibold text-sm md:text-lg cursor-pointer hover:bg-light transition-all ease-in-out duration-300 rounded-md rounded-tl-xl">
                            Profile
                            </button>
                        </Link>
               </div>)
               }

            {!isLoggedIn &&  (
                <div className="">
               <Link to={"/signup"} className="absolute top-5 md:right-36"> 
                            <button className="border border-1 text-black hover:bg-secondary/40 px-2 py-2 lg:px-8 lg:py-2 font-semibold text-sm md:text-lg cursor-pointer hover:bg-light transition-all ease-in-out duration-300 rounded-md rounded-tl-xl">
                            Signup
                            </button>
                        </Link>
                        <Link to={"/login"} className="absolute top-5 right-7 "> 
                            <button className="border border-1 text-black hover:bg-secondary/40 px-2 py-2 lg:px-8 lg:py-2 font-semibold text-sm md:text-lg cursor-pointer hover:bg-light transition-all ease-in-out duration-300 rounded-md rounded-tl-xl">
                            Login
                            </button>
                        </Link>
               </div>)
               }
               
              
                <div className="lg:w-1/2 space-y-6 ml-1 md:ml-5 mt-8">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black">
                        Find Out Best
                        <span className="text-primary font-bold px-2 w-20">{'<'}
                        <Typewriter
                        words={['PRACTICAL', 'AFFORDABLE', 'PROFESSNAL']}
                        loop={0}
                        cursor
                        cursorStyle='/'
                        typeSpeed={120}
                        deleteSpeed={80}
                        />
                        {'>'} </span>
                        
                    </h1>
                    <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black">Online Courses</span>
                    <p className="text-black md:text-base lg:text-lg">
                    Coursify is your one-stop-shop for upscaling. Get maximum value for time
and resources you invest, with job-ready courses & high-technology,
available at the lowest cost.
                    </p>
                    <div>
                        <Link to={"/courses"} className="space-x-6"> 
                            <button className=" bg-primary text-white px-2 py-2 lg:px-6 lg:py-3 font-semibold text-sm md:text-lg cursor-pointer hover:bg-light transition-all ease-in-out duration-300 rounded-md">
                                Explore courses
                            </button>
                        </Link>
                        <Link to={"/contact"} className="space-x-6" > 
                            <button className="mx-4 my-3 border text-black hover:text-white border-primary px-2 py-2 lg:px-6 lg:py-3  font-semibold text-sm md:text-lg cursor-pointer hover:bg-primary transition-all ease-in-out duration-300 rounded-md">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2 items-center justify-center mt-8">
                    <img className="pointer-events-none" src={Homepng} alt="Home Image" />
                </div>
                  
            </div>
            
            <div>
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 lg:mx-auto max-w-7xl my-6 py-14 text-black/60">
                    <div className="bg-base-500 my-auto shadow-lg  rounded-md  ring-1 ring-secondary/10">
                    <div className="flex gap-2 my-4 md:mt-2 mx-6 ">
                        <img src={homepng1} alt="" />
                        <div className="ml-2 my-auto ">
                        <h1 className="text-lg  md:text-xl font-medium">55%</h1>
                        <h2 className="md:text-xl font-bold">Average Salary Hike</h2>
                        </div>
                        </div>
                    </div>
                    <div className="bg-base-500  my-auto shadow-lg rounded-md ring-1 ring-secondary/10">
                    <div className="flex gap-2 my-4 md:mt-2 mx-6 ">
                        <img src={homepng2} alt="" />
                        <div className="ml-2">
                        <h1 className="text-xl font-medium">10+</h1>
                        <h2 className="text-xl font-bold">Different Courses</h2>
                        </div>
                        </div>
                    </div>
                    <div className="bg-base-500 hmy-auto shadow-lg rounded-md ring-1 ring-secondary/10">
                    <div className="flex gap-2 my-4 md:mt-2 mx-6 ">
                        <img src={homepng3} alt="" />
                        <div className="ml-2">
                        <h1 className="text-xl font-medium">2100+</h1>
                        <h2 className="text-xl font-bold">Career Transitions</h2>
                        </div>
                        </div>
                    </div>
                    <div className="bg-base-500  my-auto shadow-lg rounded-md ring-1 ring-secondary/10">
                        <div className="flex gap-2 my-4 md:mt-2 mx-6 ">
                        <img src={homepng4} alt="" />
                        <div className="ml-2">
                        <h1 className="text-xl font-medium">51+</h1>
                        <h2 className="text-xl font-bold">Hiring Partner</h2>
                        </div>
                        </div>
                    </div>
                </div>
                <Features/>
            </div>
           
        </HomeLayout>
    )
}

export default HomePage;
