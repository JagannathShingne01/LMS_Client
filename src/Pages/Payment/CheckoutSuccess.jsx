import { AiFillCheckCircle, AiFillCiCircle } from "react-icons/ai"
import HomeLayout from "../../Layout/HomeLayout"
import { Link } from "react-router-dom"

function CheckoutSuccess(){

    return(
        <HomeLayout>
            <div className="min-h-screen flex items-center justify-center text-white ">
                <div className="w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative">
                    <h1 className="bg-green-500 absolute top-0 w-full py-4 text-2xl font-bold rounded-t-lg text-center">Payment Successfull</h1>
                    <div className="px-4 flex flex-col items-center justify-center space-y-2">
                        <div className="text-center space-y-2 ">
                            <h2 className="text-lg font-semibold">Wlecome to the Pro Bundle</h2>
                            <p className="text-left">
                                Now You can Enjoy All the Courses.  
                            </p>

                        </div>
                        <AiFillCheckCircle className="text-green-500 text-5xl"/>
                    </div>
                    <Link to="/" className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full text-center rounded-b-lg">
                        <button className="py-2 font-semibold text-lg">Go To dashboard </button>
                    </Link>

                </div>

            </div>
        </HomeLayout>
    )
}
export default CheckoutSuccess