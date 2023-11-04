import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layout/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {deleteCourseLecture, getCourseLectures} from "../../Redux/Slices/LectureSlice"

function Displaylectures(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {state} = useLocation();

    const {lectures} = useSelector((state) => state.lecture);
    const {role} = useSelector((state) => state.auth);

    const [currentVideo, setcurrentVedio] = useState(0);

    async function onLectureDelete(courseId, lectureId){
        console.log(courseId,lectureId)
        await dispatch(deleteCourseLecture({courseId: courseId, lectureId: lectureId}));
        await dispatch(getCourseLectures(courseId));

    }

    useEffect(()=>{
        console.log(state)
        if(!state)navigate("/courses")
        dispatch(getCourseLectures(state._id))
    },[])


    return(
        <HomeLayout>

        <div className="flex flex-col gap-10 items-center justify-center min-h-screen py-10  text-white mx-1">
            <div className="text-center text-2xl font-semibold text-yellow-500">
                Course Name : {state?.title}
            </div>

           {lectures && lectures.length > 0 ? <div className="flex justify-center gap-10 w-full">

                {/* left section for playing vedios and diplaying course details to admin */}

                <div className="space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] ">
                    <video 
                    src={lectures &&  lectures[currentVideo]?.lecture?.secure_url}
                    className="object-fill rounded-t-lg w-full "
                    controls
                    disablePictureInPicture
                    muted
                    controlsList="nodownload"
                    >
                    </video>
                    <div>
                        <h1>
                            <span className="text-yellow-500 ">
                                Title: {" "}
                            </span>
                            {lectures && lectures[currentVideo]?.title}
                        </h1>
                        <p>
                            <span className="text-yellow-500 line-clamp-4">
                                Description: {" "}
                            </span>
                            {lectures && lectures[currentVideo]?.description}
                        </p>
                    </div>
                </div>

                {/* right section for displaying list of lectures */}

                <ul className="w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black]">
                        <li className="font-semibold text-xl text-yellow-500 flex items-center justify-between">
                            <p>
                                Lectures List
                            </p>
                            {role === "ADMIN" && (
                                 <button onClick={()=> navigate("/course/addlecture",{state: {...state}})} className="btn-primary px-2 py-1 rounded-md font-semibold text-sm">
                                    Add new Lecture
                                </button>
                            )}
                        </li>
                        {lectures && lectures.map((lecture, idx) => {
                            return(
                                <li className="space-y-2" key={lecture._id}>
                                    <p className="cursor-pointer" onClick={()=> setcurrentVedio(idx)}>
                                        <span>
                                            {" "} Lecture {idx + 1}: {" "}
                                        </span>
                                    {lecture?.title}
                                    </p>
                                    {role === "ADMIN" && (
                                        <button onClick={() => onLectureDelete(state?._id,lecture?._id)} className="btn-accent px-2 py-1 rounded-md font-semibold text-sm">
                                            Delete Lecture
                                        </button>
                                    )}
                                </li>
                            )
                        })}
                </ul>
                
            </div> :(
                <div className="text-5xl font-bold text-yellow-500">Comming Soon!</div>
            )}
        </div>

        </HomeLayout>
    )
}

export default Displaylectures;