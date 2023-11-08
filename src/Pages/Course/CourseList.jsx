import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";
import HomeLayout from "../../Layout/HomeLayout";
import CourseCard from "../../Components/CourseCard";


function CourseList(){
    const dispatch = useDispatch();

    const {courseData} = useSelector((state) => state.course);

    async function loadCourses(){
        await dispatch(getAllCourses());
    }

    useEffect(()=>{
        loadCourses();
    },[]);

    return(
        <HomeLayout>
            <div className="min-h-[90vh] pt-16  flex flex-col gap-4 md:gap-10 lg:gap-16 text-black md:max-w-7xl mx-auto">
                <h1 className="text-center text-xl md:3xl lg:text-5xl">
                    Explore the courses made by 
                    <span className="font-bold text-primary ml-2">Industry Experts</span>
                    </h1>
                <div className="flex flex-wrap justify-center items-stretch gap-10 mx-2 pb-10">
                    {courseData?.map((course) => {
                        return <CourseCard key={course._id} data={course}/>
                    })}
                </div>
            </div>

        </HomeLayout>
    )

  
}

export default CourseList;