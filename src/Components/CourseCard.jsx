import { useNavigate } from "react-router-dom";

function CourseCard ({data}){
    const navigate = useNavigate();
    return(
        <div 
        
        className="text-black w-[22rem]  rounded-lg cursor-pointer group overflow-hidden ring-1 ring-gray-400 hover:shadow-xl hover:bg-secondary/40 ">
            <div className="overflow-hidden">
                <img
                alt="Course Thumbnail"
                src={data?.thumbnail?.secure_url}
                className="h-48 w-full rounded-tl-lg rounded-tr-lg group-hover:scale-[1,2] transition-all ease-in-out duration-300"
                />
                <div className="px-3 mt-3">
                    <h2 className=" text-2xl space-y-1 text-black line-clamp-2 font-bold group-hover:text-primary">
                        {data?.title}
                    </h2>
                    <p className="line-clamp-2">
                        {data?.description}
                    </p>
                    <p className="font-semibold">
                        <span className="text-primary font-bold">Category : </span>
                        {data?.category}
                    </p>
                    <p className="font-semibold">
                        <span className="text-primary font-bold">Total Lectures : </span>
                        {data?.numberOfLectures}
                    </p>
                    <p className="font-semibold">
                        <span className="text-primary font-bold"> Instructer : </span>
                        {data?.createdBy}
                    </p>
                  <button
                  className="bg-primary hover:bg-primary/90 text-white text-xl rounded-md font-bold my-4 py-2 w-full hover:bg-light  transition-all ease-in-out duration-300"
                  onClick={()=>navigate("/courses/description/", {state:{...data}})}
                  >
                    Explore Course
                  </button>
                </div>
            </div>
        </div>
    )
}

export default CourseCard;