import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../Layout/HomeLayout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { deleteCourse, getAllCourses } from "../../Redux/Slices/CourseSlice";
import { getStatsData } from "../../Redux/Slices/StatSlice";
import { getPaymentRecord } from "../../Redux/Slices/RazorpaySlice";
import { Bar, Pie } from "react-chartjs-2";
import {FaUsers} from "react-icons/fa"
import {FcSalesPerformance} from "react-icons/fc"
import {GiMoneyStack} from "react-icons/gi"
import { BsCollectionPlayFill, BsTrash } from "react-icons/bs";

ChartJS.register(ArcElement, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip)


function AdminDashboard (){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { allUsersCount, subscribedCount } =  useSelector((state) => state.stat);

    const { allPayments, monthlySalesRecord } = useSelector((state) => state.razorpay);
    console.log(allPayments)

    const userData = {
        labels: ["Registered User", "Enrolled User"],
        datasets: [
            {
                label: "User Details",
                data: [allUsersCount, subscribedCount],
                backgroundColor: ["yellow", "green"],
                borderWidth: 1,
                fontColor: "white",
                borderColor: ["yellow", "green"],

            }
        ]
    }
    const salesData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        fontColor: "white",
        datasets: [
           { label: "Sales / Month",
             data: monthlySalesRecord,
             backgroundColor: ["rgb(255, 99, 132)"],
             borderColor: "White",
             borderWidth: 2
            }
        ]
    }

    const myCourses = useSelector((state)=> state?.course?.courseData);

    async function onCourseDelete(id){
        if(window.confirm("Are you sure you want to delete the course ?")){
         const res = await dispatch(deleteCourse(id))
         console.log(res)
         if(res?.payload?.success){
            await dispatch(getAllCourses());
         }
        }
    }

    useEffect(()=>{
        (
            async ()=> {
                await dispatch(getAllCourses());
                await dispatch(getStatsData());
                await dispatch(getPaymentRecord());
            }
        )()
    },[])

return(
    <HomeLayout>
        <div className="min-h-[90vh] pt-5 flex flex-col flex-wrap gap-10 text-black">
            <h1 className="text-center text-5xl font-semibold text-primary">
                Admin Dashbord
            </h1>
            <div className="grid grid-cols-2 gap-5 m-auto mx-10">
                <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-lg bg-gray-200">
                    <div className="w-80 h-80">
                        <Pie data={userData}/>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="flex items-center justify-between p-5 gap-5 rounded-lg shadow-lg bg-gray-300">
                            <div className="flex flex-col items-center ">
                                <p className="font-semibold "> Registered Users </p>
                                <h3 className="text-2xl md:text-4xl font-bold">{allUsersCount}</h3>
                            </div>
                            <FaUsers className="text-primary text-5xl"/>
                        </div>
                        <div className="flex items-center justify-between p-5 gap-5 rounded-lg shadow-lg bg-gray-300">
                            <div className="flex flex-col items-center ">
                                <p className="font-semibold "> Subscribed Users </p>
                                <h3 className="text-2xl md:text-4xl font-bold">{subscribedCount}</h3>
                            </div>
                            <FaUsers className="text-green-500 text-5xl"/>
                        </div>   

                    </div>
                </div>
                <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
                <div className="h-80 w-full relative">
                    <Bar className="absolute bottom-0 h-80 w-full" data={salesData}/>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div className="flex items-center justify-between p-5 gap-5 rounded-lg shadow-lg bg-gray-300">
                                <div className="flex flex-col items-center ">
                                    <p className="font-semibold "> Subscription Count </p>
                                    <h3 className="text-2xl md:text-4xl font-bold">{allPayments?.count}</h3>
                                </div>

                                <FcSalesPerformance className="text-primary text-5xl"/>
                    </div>
                    <div className="flex items-center justify-between p-5 gap-5 rounded-lg shadow-lg bg-gray-300">
                                <div className="flex flex-col items-center ">
                                    <p className="font-semibold "> Total Revenue </p>
                                    <h3 className="text-2xl md:text-4xl font-bold">{allPayments?.count * 499}</h3>
                                </div>
                                <GiMoneyStack className="text-primary text-5xl"/>
                    </div>
                </div>
            </div>
            </div>
            <div className="mx-[10%] w-[80%] flex self-center flex-col items-center justify-center gap-10 mb-10">
                <div className="flex w-full items-center justify-between ">
                    <h1 className="text-center text-3xl font-semibold">
                        Courses Overview
                    </h1>
                    <button 
                        onClick={()=>{
                            navigate("/course/create")}}
                            className=" bg-gray-300 py-2 w-fit px-4 text-lg font-semibold cursor-pointer  hover:bg-yellow-400 rounded transition-all ease-in-out duration-300"
                            >
                            Create New Course
                    </button>
                </div>

                <table className="table overflow-x-scroll">
                    <thead>
                        <tr className="text-primary/75 font-medium text-xl">
                            <th>S.no</th>
                            <th>Course Title</th>
                            <th>Course Category</th>
                            <th>Instructer</th>
                            <th>Total Lectures</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myCourses?.map((course, idx) => {
                            return(
                                <tr key={course._id}>
                                    <td>{idx+1}</td>
                                    <td><textarea readOnly value={course?.title} className="w-40 h-auto bg-transparent resize-none"></textarea></td>
                                    <td>{course?.category}</td>
                                    <td>{course?.createdBy}</td>
                                    <td>{course?.numberOfLectures}</td>
                                    <td className="max-w-28 overflow-hidden text-ellipsis whitespace-nowrap">
                                        <textarea value={course.description} readOnly className="w-80 h-auto bg-transparent resize-none"></textarea></td>
                                    <td className="flex items-center gap-4 ">
                                        <button 
                                            className="bg-gray-500 hover:bg-slate-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold"
                                            onClick={()=>navigate("/course/displaylecture",{state:{...course}})}
                                        >
                                            <BsCollectionPlayFill/>
                                        </button>
                                        <button 
                                            className="bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold"
                                            onClick={()=> onCourseDelete(course?._id)}
                                        >
                                            <BsTrash/>
                                        </button>

                                    </td>
                                </tr>
                            )
                        } )}
                    </tbody>
                </table>

            </div>
        </div>

    </HomeLayout>
)
}
export default AdminDashboard;