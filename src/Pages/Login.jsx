import { useState } from "react";
import HomeLayout from "../Layout/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Slices/AuthSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  }

  async function onLogin(event) {
    event.preventDefault();
    // checking all field must be filled!
    if (!loginData.email || !loginData.password) {
      toast.error("Please fill all the Details");
      return;
    }

    

    //dispatch create account action
    const response = await dispatch(login(loginData));
    if (response.payload.success) navigate("/");

    setLoginData({
      email: "",
      password: "",
    });
  }

  return (
    <>
      <HomeLayout>
        <div className="flex items-center justify-center h-screen">
          <form
            onSubmit={onLogin}
            noValidate
            className="flex flex-col justify-center gap-3 rounded-lg p-4 text-black mt-6 md:w-96 shadow-2xl"
          >
            <h1 className="text-center text-2xl font-bold">Login Page</h1>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                required
                name="email"
                id="email"
                placeholder="Enter your Email..."
                className="bg-transparent px-2 py-1 border"
                onChange={handleUserInput}
                value={loginData.email}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                type="password"
                required
                name="password"
                id="password"
                placeholder="Enter your password..."
                className="bg-transparent px-2 py-1 border"
                onChange={handleUserInput}
                value={loginData.password}
              />
            </div>
            <button
              type="submit"
              className="bg-light py-2 text-lg cursor-pointer bg-primary text-white  hover:bg-primary/90 rounded transition-all ease-in-out duration-300"
            >
              Login
            </button>

            <Link to={"/forgetpassword"}>
            <p className="text-center link text-accent cursor-pointer">
              Forget Password
            </p>
          </Link>

            <p className="text-center">
              Do not have an account ?{" "}
              <Link to="/signup" className="link text-accent cursor-pointer">
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </HomeLayout>
    </>
  );
}

export default Login;
