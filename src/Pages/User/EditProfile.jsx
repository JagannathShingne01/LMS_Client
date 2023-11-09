import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, updateProfile } from "../../Redux/Slices/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layout/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";

function EditProfile (){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [data, setData] = useState({
        previewImage: "",
        fullName: "",
        avatar: undefined,
        userId: useSelector((state) => state?.auth?.data?._id)
    })

    function handleImageupload(e){
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if(uploadedImage){
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function(){
                setData({
                    ...data,
                    previewImage: this.result,
                    avatar: uploadedImage
                })
            })
        }
    }

    function handleInputChange(e){
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    async function onFormSubmit(e){
        e.preventDefault();
        if(!data.fullName || !data.avatar){
            toast.error("All fields are mandatory")
            return;
        }
        if(data.fullName.length < 5 ){
            toast.error("Name cannot be of less than 5 Characters");
            return
        }
        const formData = new FormData();
        formData.append("fullName", data.fullName);
        formData.append("avatar", data.avatar);
        

        await dispatch(updateProfile([data.userId,formData]))

        await dispatch(getUserData());

        navigate("/user/profile");
    }
    return(
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form 
                    noValidate
                    onSubmit={onFormSubmit}
                    className="flex flex-col justify-center gap-5 rounded-lg p-4 text-black w-96 min-h-[26rem] shadow-2xl"
                >
                    <h1 className="text-center text-2xl font-semibold ">Edit Profile</h1>
                    <label 
                        htmlFor="image_upload"
                        className="cursor-pointer">
                            {data.previewImage ? (
                                <img 
                                    className="w-28 h-28 rounded-full m-auto"
                                    src={data.previewImage}
                                />
                            ) : (
                                <BsPersonCircle className="w-28 h-28 m-auto rounded-full"/>
                            )}
                        </label>
                        <input 
                            onChange={handleImageupload}
                            className="hidden"
                            type="file"
                            id="image_upload"
                            name="image_upload"
                            accept= ".jpg, .png, .svg, .jpeg"
                        />
                        <div className="flex flex-col gap-1">
                            <label htmlFor="fullName" className="text-lg font-semibold ">Full Name</label>
                            <input 
                                type="text"
                                required
                                name="fullName"
                                id="fullName"
                                placeholder="Enter your Name"
                                className="bg-transparent px-2 py-1 border"
                                value={data.fullName}
                                onChange={handleInputChange}
                                />
                        </div>
                        <button onSubmit={onFormSubmit} className="bg-primary hover:bg-light transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer">
                            Update Profile
                        </button>
                        <Link to="/user/profile">
                            <p className="link text-accent cursor-pointer flex items-center justify-center w-full gap-2 ">
                                <AiOutlineArrowLeft/> Go Back To Profile

                            </p>
                                
                        </Link>
                </form>
            </div>
        </HomeLayout>
    )
}

export default EditProfile;