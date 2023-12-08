import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../Layout/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import { getUserData } from "../../Redux/Slices/AuthSlice";
import toast from "react-hot-toast";
import { cancelCourseBundle } from "../../Redux/Slices/RazorpaySlice";

function Profile(){
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const userData = useSelector((state) => state?.auth?.data);

    async function handleCancellation(){
        await dispatch(cancelCourseBundle());
        await dispatch(getUserData());
        toast.success("canclellation completed!");
        navigate("/")
    }
    useEffect(() => {
        // getting user details
        userData;
        dispatch(getUserData());
      }, []);
    return(
       <HomeLayout>
        <div className="min-h-[90vh] flex items-center justify-center">
            <div className="my-10 flex flex-col gap-4 rounded-lg p-4 text-black w-80 shadow-2xl">
                <img
                    className="w-40 m-auto rounded-full border border-black"
                    src={userData?.avatar?.secure_url}
                />
                <h3 className="text-xl font-semibold text-center capitalize">
                    {userData?.fullName}
                </h3>
                    <div className="grid grid-cols-2">
                        <p>Email:</p><p>{userData?.email}</p>
                    <p>Role:</p><p>{userData?.role}</p>
                    <p>Subscription:</p><p>{userData?.subscription?.status === "active" ? "Active" : "Inactive"}</p>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <Link 
                        to="/changepassword" 
                        className="w-1/2 bg-secondary hover:bg-light transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer">
                            <button className="ml-2">
                                Change Password
                            </button>
                    </Link>
                    <Link 
                        to="/user/editprofile" 
                        className="w-1/2 bg-secondary hover:bg-light transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer">
                            <button className="ml-2">
                                Edit Profile
                            </button>
                    </Link> 
                </div>
                {userData?.subscription?.status === "active" &&  (
                    <button onClick={() => {handleCancellation()}}  className="w-full bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer">
                        Cancel Subscription
                    </button>
                )}
            </div>

        </div>

       </HomeLayout>
    )
}
export default Profile;
