import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layout/HomeLayout";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {addCourseLecture} from "../../Redux/Slices/LectureSlice"
import { AiOutlineArrowLeft } from "react-icons/ai";

function Addlecture (){
    const courseDetails = useLocation().state;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        id: courseDetails?._id,
        lecture: undefined,
        title: "",
        description: "",
        videoSrc: ""
    });

    function handleInputChange(e){
        const {name, value} = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    function handleVideo(e){
        const video = e.target.files[0];
        const source = window.URL.createObjectURL(video);
        setUserInput({
            ...userInput,
            lecture: video,
            videoSrc: source
        })
    }

    async function onFormSubmit(e){
        e.preventDefault();
        if(!userInput.lecture || !userInput.title || !userInput.description ){
            toast.error("all fields are mandatory!")
            return;
        } // 7

        const response  = await dispatch(addCourseLecture(userInput));
        if(response?.payload?.success){
            setUserInput({
                id: courseDetails?._id,
                lecture: undefined,
                title: "",
                description: "",
                videoSrc: ""
            })
        }
    }

    useEffect(()=>{
        if(!courseDetails) navigate("/courses");
    },[])
    return(
        <HomeLayout>
            <div className="min-h-[90vh] text-black flex flex-col items-center justify-center gap-4 mx-16">
                <div className="flex flex-col gap-5 p-2 shadow-xl w-96 rounded-lg">
                    <header className="flex items-center justify-center relative">
                        <button 
                        onClick={()=> navigate(-1)}
                        className="absolute left-2 text-xl text-green-500"
                        
                        >
                            <AiOutlineArrowLeft/>
                        </button>
                        <h1 className="text-xl text-primary font-semibold">
                            Add new lecture
                        </h1>
                    </header>
                    <form onSubmit={onFormSubmit} action=""
                    className="flex flex-col gap-3"
                    >
                        <input 
                        type="text"
                        name="title"
                        placeholder="Enter the title of lecture"
                        onChange={handleInputChange}
                        className="bg-transparent px-3 py-1 border"
                        value={userInput.title}
                        />

                        <textarea 
                        type="text"
                        name="description"
                        placeholder="Enter the description of lecture"
                        onChange={handleInputChange}
                        className="bg-transparent px-3 py-1 border resize-none overflow-y-scroll h-36"
                        value={userInput.description}
                        />

                        {userInput.videoSrc ? (
                            <video
                                muted 
                                src={userInput.videoSrc}
                                controls
                                controlsList="nodownload nofullscreen"
                                disablePictureInPicture
                                className="object-fill rounded-t-lg w-full"
                            />
                        ):(
                            <div className="h-48 border flex items-center justify-center cursor-pointer">
                                <label className="font-semibold text-xl cursor-pointer" htmlFor="lecture" >Choose your video </label>
                                <input type="file" className="hidden" id="lecture" name="lecture" onChange={handleVideo} accept="video/mp4 video/xmp4 video/*"/>
                            </div>
                        )}
                        <button type="submit" className=" py-2 px-6 bg-primary rounded-md text-white w-full font-semibold text-lg">
                            Submit
                        </button>

                    </form>
                </div>
                
            </div>
        </HomeLayout>
    )
}
export default Addlecture;