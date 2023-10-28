import { useNavigate } from "react-router-dom";

function CourseCard ({data}){
    const navigate = useNavigate();

    return(
        <div 
        onClick={()=>navigate("/course/description/")}
        className="text-white w-[22rem] h-[400px] shadow-lg rounded-lg cursor-pointer group overflow-hidden">
            <div className="overflow-hidden">
                <img
                alt="Course Thumbnail"
                src={data?.thumbnail?.secure_url}
                className="h-48 w-full rounded-tl-lg rounded-tr-lg group-hover:scale-[1,2] transition-all ease-in-out duration-300"
                />
                <div className="px-3">
                    <h2 className="p-3 space-y-1 text-white line-clamp-2">
                        {data?.title}
                    </h2>
                    <p className="line-clamp-2">
                        {data?.description}
                    </p>
                    <p className="font-semibold">
                        <span className="text-yellow-500 font-bold">Category : </span>
                        {data?.category}
                    </p>
                    <p className="font-semibold">
                        <span className="text-yellow-500 font-bold">Total Lectures : </span>
                        {data?.numberOfLectures}
                    </p>
                    <p className="font-semibold">
                        <span className="text-yellow-500 font-bold"> Instructer : </span>
                        {data?.createdBy}
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default CourseCard;