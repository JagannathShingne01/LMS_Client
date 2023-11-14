import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRazorPayID, purchaseCourseBundle, verifyUserPayment } from "../../Redux/Slices/RazorpaySlice";
import toast from "react-hot-toast";
import HomeLayout from "../../Layout/HomeLayout";
import {BiRupee} from "react-icons/bi"

function Checkout (){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const razorpayKey = useSelector((state)=> state?.razorpay?.key);
    const subscription_id = useSelector((state)=> state.razorpay?.subscription_id);
    const userData = useSelector((state)=> state?.auth?.data);
    
    const paymentDetails = {
        razorpay_payment_id: "",
        razorpay_subscription_id: "",
        razorpay_signature: "",
    }

    async function handleSubscription(e){
        e.preventDefault();
        if(!razorpayKey || !subscription_id){
            toast.error("Something went wrong, Try again!");
            return;
        }
        const options = {
            key: razorpayKey,
            subscription_id: subscription_id,
            name: "Coursify Pvt. Ltd.",
            description: "Subscription",
            theme: {
                color: "#F37254"
            },
            prefill:{
                email: userData.email,
                name: userData.fullName
            },
            handler: async function (response){
                paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
                paymentDetails.razorpay_signature = response.razorpay_signature;
                paymentDetails.razorpay_subscription_id = response.razorpay_subscription_id;
                
                toast.success("Payment successfull");
                
                const res = await dispatch(verifyUserPayment(paymentDetails));
                res?.payload?.success ? navigate("/checkout/success") : navigate("/checkout/fail");
            }
        }
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    async function load(){
        await dispatch(getRazorPayID());
        await dispatch(purchaseCourseBundle());
    }

    useEffect(()=>{
        load();
    },[]);

    return(
        <HomeLayout>
            <div className="h-screen">
                <form
                    onSubmit={handleSubscription}
                    className="min-h-[90vh] flex items-center justify-center text-black"

                >
                    <div className="relative w-80 h-[27rem] flex flex-col justify-center shadow-2xl rounded-lg">
                        <h1 className="bg-primary absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-t-lg">Subscription Bundle</h1>
                        <div className="px-4 space-y-5 text-center">
                            <p className="text-[17px]">
                                This purchase will allow you to access all available course
                                of our platform for {""}
                                <span className="text-primary font-bold">
                                    <br/>
                                    1 Year Duration{" "}
                                </span>
                                All the existing and new launched courses will be also available.
                            </p>
                            <p className="flex items-center justify-center gap-1 text-2xl font-bold text-primary">
                                <BiRupee/> <span>499</span> Only
                            </p>
                            <div className="text-gray-100">
                                <p>100% refund on cancellation</p>
                                <p>* Terms and Conditions applied *</p>
                            </div>
                            <button type="submit" className="absolute bottom-0 bg-primary hover:bg-light transition-all ease-in-out duration-300 w-full left-0 text-xl py-2 rounded-b-lg font-bold">
                                Buy Now!
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </HomeLayout>
    )

}

export default Checkout;