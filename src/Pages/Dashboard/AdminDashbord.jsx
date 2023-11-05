import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../Layout/HomeLayout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";
import { getStatsData } from "../../Redux/Slices/StatSlice";
import { getPaymentRecord } from "../../Redux/Slices/RazorpaySlice";

ChartJS.register(ArcElement, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip)


function AdminDashboard (){
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const [allUserCount, setAllUserCount] = useSelector((state)=>state.stat);

    // const [allPayment, finalMonths, monthlySalesRecord ] = useSelector((state) => state.rezorpay);

    // const userData = {
    //     labels: ["Registered User", "Enrolled User"],
    //     datasets: [
    //         {
    //             label: "User Details",
    //             data: [allUsersCount, subscribedCount],
    //             backgroundcolor: ["yellow", "green"],
    //             borderWidth: 1,
    //             borderColor: ["yellow", "green"],

    //         }
    //     ]
    // }
    // const salesData = {
    //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    //     fontColor: "white",
    //     datasets: [
    //         label: "Sales / Month",

    //     ]
    // }

    // useEffect(()=>{
    //     (
    //         async ()=> {
    //             await dispatch(getAllCourses());
    //             await dispatch(getStatsData());
    //             await dispatch(getPaymentRecord());
    //         }
    //     )()
    // },[])

return(
    <HomeLayout>

    </HomeLayout>
)
}
export default AdminDashboard;