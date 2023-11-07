import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layout/HomeLayout";
import { useSelector } from "react-redux";

function CoueseDescription(){
    const navigate = useNavigate();
    const {state} = useLocation();
    const {role, data} = useSelector((state)=> state.auth);
    useEffect(()=> {
        
    },[]);
    return(
            <HomeLayout>
                <div className="min-h-[90vh] pt-12 px-20 flex flex-col items-center justify-center text-white">
                    <div className="grid grid-cols-2 gap-10 py-10 relative">
                        <div>
                            <img 
                            className="w-full h-64"
                            src={state?.thumbnail?.secure_url}
                            alt="thumbnail"
                            />
                            <div className="space-y-4">
                                <div className="flex flex-col items-center justify-between text-xl">
                                    <p className="font-semibold">
                                        <span className="text-primary font-bold">
                                            Total Lectures : {""}
                                        </span>
                                        {state?.numberOfLectures}
                                    </p>
                                    <p className="font-semibold">
                                        <span className="text-primary font-bold">
                                            Instructor : {""}
                                        </span>
                                        {state?.createdBy}
                                    </p>

                                </div>
                                {role === "ADMIN" || data?.subscription?.status === "active" ? (
                                    <button onClick={()=> navigate("/course/displaylecture",{state:{...state}})} className="bg-primary text-xl rounded-md font-bold px-5 py-3 w-full  hover:bg-light transition-all ease-in-out duration-300">
                                        Watch Lectures
                                    </button>
                                    ) : (
                                        <button onClick={()=> navigate("/checkout")} className="bg-primary text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-light  transition-all ease-in-out duration-300">
                                            Subcribe
                                        </button>
                                    )

                                }
                            </div>
                        </div>
                    
                    <div className="space-y-2 text-xl">
                        <h1 className="text-3xl font-bold text-primary mb-5 text-center">
                            {state?.title}
                        </h1>
                        <p>Couese Description : </p>
                        <p>{state?.description}</p>
                    </div>

                    </div>
                </div>
            </HomeLayout>
        )
}
export default CoueseDescription;