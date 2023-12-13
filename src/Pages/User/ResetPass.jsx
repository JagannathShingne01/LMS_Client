import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { isPassword } from '../../Helpers/regexMatcher';
import { resetPassword } from '../../Redux/Slices/AuthSlice';

const ResetPass = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

   const  [data, setData] = useState({
        password: "",
        confirmPassword: "",
        resetToken: useParams().resetToken,
    });

    const handleUserInput = (e)=>{
        const {name, value} = e.target;
        const newData = {...data, [name]: value};
        setData(newData);
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();

        if(!data.password || !data.confirmPassword || !data.resetToken){
            toast.error("All fields are mandatory ")
            return;
        }
        if(!isPassword(data.password)){
            toast.error("Password should be 8 - 12 character long with atleast a number and special character");
            return;
        }
        if (data.password !== data.confirmPassword) {
            toast.error("Both password should be same");
            return;
        }

       const res = await dispatch(resetPassword(data));

        if(res.payload.success){
            navigate("/login");
        }
    };
  return (
    <section>
         <div
        onSubmit={handleSubmit}
        className="flex items-center justify-center h-[100vh]"
      >
        {/* forget password card */}
        <form className="flex flex-col justify-center gap-6 rounded-lg p-4 text-black w-80 h-[26rem] shadow-[0_0_10px_black]">
          <h1 className="text-center text-2xl font-bold">Reset Password</h1>

          <div className="flex flex-col gap-1">
            <label className="text-lg font-semibold" htmlFor="email">
              New Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Enter your new password"
              className="bg-transparent px-2 py-1 border"
              value={data.password}
              onChange={handleUserInput}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-lg font-semibold" htmlFor="confirmPassword">
              Confirm New Password
            </label>
            <input
              required
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm your new password"
              className="bg-transparent px-2 py-1 border"
              value={data.confirmPassword}
              onChange={handleUserInput}
            />
          </div>

          <button
            className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
            type="submit"
          >
            Reset Password
          </button>
        </form>
      </div>
    </section>
  )
}

export default ResetPass