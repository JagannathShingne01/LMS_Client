import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewCourse } from "../../Redux/Slices/CourseSlice";
import HomeLayout from "../../Layout/HomeLayout";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
function CreateCourse (){


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        title: "",
        category: "",
        createdBy: "",
        description: "",
        thumbnail: null,
        previewImage: "",
    });

    function handleImageUpload (e){
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if(uploadedImage){
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setUserInput({
                    ...userInput,
                    previewImage: this.result,
                    thumbnail: uploadedImage
                })
            })
        }
    }

    function handleUserInput (e){
        const {name, value} = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    async function onFormSubmit(e){
        e.preventDefault();

        if(!userInput.title || !userInput.description || !userInput.category || !userInput.thumbnail || !userInput.createdBy){
            toast.error("All fields are mandatory");
            return;
        }

        const response = await dispatch(createNewCourse(userInput));
        if(response?.payload?.success){
            setUserInput({
                title: "",
                category: "",
                createdBy: "",
                thumbnail: null,
                previewImage: "",
            })
            navigate("/courses");
        }
       

    }

return(
    <div>
        <HomeLayout>
            <div className="h-screen flex items-center justify-center">
            <form noValidate
             onSubmit={onFormSubmit}
             className=" flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px] my-10 shadow-[0_0_10px_black] relative">
                
                <Link className="absolute top-8 text-2xl link text-accent cursor-pointer">
                    <AiOutlineArrowLeft />
                </Link>

                <h1 className="text-center text-2xl font-bold">
                    Create New Course
                </h1>

                <main className="grid grid-cols-2 gap-x-10">
                    <div>
                        <div className="gap-y-6">
                            <label htmlFor="image_uploads" className="cursor-pointer">
                                {userInput.previewImage ? (
                                    <img 
                                        className="w-full h-44 m-auto border"
                                        src={userInput.previewImage}
                                        />
                                        ) : ( 
                                            <div className="w-full h-44 m-auto flex items-center justify-center border">
                                                <h1 className="font-bold text-lg" >Upload your course thumbnail </h1>
                                            </div>
                                        )}
                            </label>
                            <input 
                                type="file"
                                className="hidden"
                                id="image_uploads"
                                accept=".jpg, .jpeg, .png"
                                name="image_uploads"
                                onChange={handleImageUpload}
                            />

                        </div>
                        <div className="flex flex-col gap-1 ">
                            <label 
                            className="text-lg font-semibold"
                            htmlFor="title">
                                Course title
                            </label>
                            <input 
                                required 
                                name="title"
                                id="title"
                                placeholder="Enter Course Title"
                                className="bg-transparent px-2 py-1 border"
                                value={userInput.title}
                                onChange={handleUserInput}
                                type="text"
                            />

                        </div>
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <div className="flex flex-col gap-1 ">
                                <label 
                                className="text-lg font-semibold"
                                htmlFor="createdBy">
                                    Course Instructer
                                </label>
                                <input 
                                    required 
                                    name="createdBy"
                                    id="createdBy"
                                    placeholder="Enter Course Instructer"
                                    className="bg-transparent px-2 py-1 border"
                                    value={userInput.createdBy}
                                    onChange={handleUserInput}
                                    type="text"
                                />

                        </div>
                        <div className="flex flex-col gap-1 ">
                                <label 
                                className="text-lg font-semibold"
                                htmlFor="category">
                                    Course Category
                                </label>
                                <input 
                                    required 
                                    name="category"
                                    id="category"
                                    placeholder="Enter Course Category"
                                    className="bg-transparent px-2 py-1 border"
                                    value={userInput.category}
                                    onChange={handleUserInput}
                                    type="text"
                                />

                        </div>
                        <div className="flex flex-col gap-1 ">
                                <label 
                                className="text-lg font-semibold"
                                htmlFor="description">
                                    Course Description
                                </label>
                                <textarea 
                                    required 
                                    name="description"
                                    id="description"
                                    placeholder="Enter Course description"
                                    className="bg-transparent px-2 py-1 h-24 overflow-y-scroll resize-none border"
                                    value={userInput.description}
                                    onChange={handleUserInput}
                                    type="text"
                                />
                        </div>
                    </div>
                </main>
                <button type="submit" onClick={onFormSubmit} className="bg-light py-2 text-lg cursor-pointer  hover:bg-yellow-400 rounded transition-all ease-in-out duration-300">
                    Create Course
                </button>
            </form>
            </div>
        </HomeLayout>
    </div>
)


}
export default CreateCourse;