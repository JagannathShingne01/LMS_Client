import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { isEmail } from '../../Helpers/regexMatcher';
import { forgotPassword } from '../../Redux/Slices/AuthSlice';

const ForgetPass = () => {

    const dispatch =  useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
     
    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!email){
            toast.error("All fields are mandatory")
            return;
        }
        if(!isEmail(email)){
            toast.error("Invalid Email ID");
            return;
        }

    const res = await dispatch(forgotPassword(email));

    setEmail("");

}
  return (
   <section>
      {/* forget password container */}
      <div className="flex items-center justify-center h-[100vh]">
        {/* forget password card */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-6 rounded-lg p-4 text-black w-80 h-[26rem] shadow-[0_0_10px_black]"
        >
          <h1 className="text-center text-2xl font-bold">Forget Password</h1>

          <p>
            Enter your registered email, we will send you a verification link on
            your registered email from which you can reset your password
          </p>

          <div className="flex flex-col gap-1">
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter your registered email"
              className="bg-transparent px-2 py-1 border"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <button
            className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
            type="submit"
          >
            Get Verification Link
          </button>

          <p className="text-center">
            Already have an account ?{" "}
            <Link to={"/login"} className="link text-accent cursor-pointer">
              Login
            </Link>
          </p>
        </form>
      </div>
   </section>
  )
}

export default ForgetPass;