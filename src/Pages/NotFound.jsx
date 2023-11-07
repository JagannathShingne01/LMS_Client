import { useNavigate } from "react-router-dom";

function NotFound() {
        const navigate = useNavigate();

    return(
        <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">  
            <h1 className=" text-9xl font-extrabold tracking-widest text-primary">
                    404
            </h1>
            <div className="text-white px-2 text-2xl ">
            Seems you came to no man's land.
            </div>
            <button className="mt-6">
                <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-primary focus:outline-none focus:ring">
                    <span onClick={()=> navigate(-1)} className="relative block px-8 py-3 bg-[#1A2238] border border-primary">
                            Go Back
                    </span>
                </a>
            </button>
        </div>
    )
}
export default NotFound;