import {  RxCrossCircled } from "react-icons/rx"
import HomeLayout from "../../Layout/HomeLayout"
import { Link } from "react-router-dom"


function CheckoutFailure (){

    return(
        <HomeLayout>
            <div className="min-h-screen flex items-center justify-center text-white ">
                <div className="w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative">
                    <h1 className="bg-red-500 absolute top-0 w-full py-4 text-2xl font-bold rounded-t-lg text-center">Payment Failed</h1>
                    <div className="px-4 flex flex-col items-center justify-center space-y-2">
                        <div className="text-center space-y-2 ">
                            <h2 className="text-xl font-semibold">Oops ! your payment failed.</h2>
                            <p className="text-center text-lg">
                               Please try again later.  
                            </p>

                        </div>
                        <RxCrossCircled className="text-red-500 text-7xl my-3"/>
                    </div>
                    <Link to="/checkout" className="bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full text-center rounded-b-lg">
                        <button className="py-2 font-semibold text-lg">Try again </button>
                    </Link>

                </div>

            </div>
        </HomeLayout>
    )
}

export default CheckoutFailure