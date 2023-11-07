import { Link } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Homepng from "../Assets/homePageMainImage.png"


function HomePage(){
    return(
        <HomeLayout>
            <div className="pt-10  md:max-w-5xl lg:max-w-7xl text-white flex flex-col-reverse md:flex-row items-center justify-center  mx-6 lg:mx-auto h-screen">
                <div className="lg:w-1/2 space-y-6 ml-1 md:ml-5">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
                        Find Out Best
                        <span className="text-primary font-bold px-2">Online Courses</span>
                    </h1>
                    <p className="text-white md:text-base lg:text-lg">
                    Coursify is your one-stop-shop for upscaling. Get maximum value for time
and resources you invest, with job-ready courses & high-technology,
available at the lowest cost.
                    </p>
                    <div>
                        <Link to={"/courses"} className="space-x-6"> 
                            <button className=" bg-primary px-2 py-2 lg:px-6 lg:py-3 font-semibold text-sm md:text-lg cursor-pointer hover:bg-light transition-all ease-in-out duration-300 rounded-md">
                                Explore courses
                            </button>
                        </Link>
                        <Link to={"/contact"} className="space-x-6" > 
                            <button className="mx-4 my-3 border border-primary px-2 py-2 lg:px-6 lg:py-3  font-semibold text-sm md:text-lg cursor-pointer hover:bg-primary transition-all ease-in-out duration-300 rounded-md">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2 items-center justify-center">
                    <img src={Homepng} alt="Home Image" />
                </div>
                
            </div>
        </HomeLayout>
    )
}

export default HomePage;