import { Link } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

function HomePage(){
    return(
        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
                        Find Out Best
                        <span className="text-yellow-500 font-bold px-2">Online Courses</span>
                    </h1>
                    <p className="text-white md:text-base lg:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quia necessitatibus, rerum aperiam accusamus exercitationem.
                    </p>
                    <div>
                        <Link className="space-x-6"> 
                            <button className="bg-yellow-500 px-3 py-2 md:px-6 md:py-3 font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded-md">
                                Explore courses
                            </button>
                        </Link>
                        <Link className="space-x-6"> 
                            <button className="mx-4 my-3 border border-yellow-500  px-3 py-2 md:px-6 md:py-3  font-semibold text-lg cursor-pointer hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-md">
                                Explore courses
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </HomeLayout>
    )
}

export default HomePage;