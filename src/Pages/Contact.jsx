import { useState } from "react";
import HomeLayout from "../Layout/HomeLayout";
import toast from "react-hot-toast";
import { isEmail } from "../Helpers/regexMatcher";
import axiosInstance from "../Helpers/axoisInstance";
import ContactUs from "../Assets/ContactUS.png";

function Contact() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (!userInput.email || !userInput.name || !userInput.message) {
      toast.error("All fields are mandatory");
      return;
    }

    if (!isEmail(userInput.email)) {
      toast.error("Invalid Email");
      return;
    }

    try {
      const response = axiosInstance.post("/contact", userInput);
      toast.promise(response, {
        loading: "Submitting your message....",
        success: "Form submitted successfully",
        error: "Failed to submit the form",
      });
      const contactResponse = await response;
      if (contactResponse?.data?.success) {
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("operation failed.....");
    }
  }

  return (
    <HomeLayout>
      <div className="relative overflow-hidden lg:h-screen flex items-center justify-center">
        <div className="grid  max-w-7xl grid-cols-1 lg:grid-cols-2 mx-1 md:mx-auto lg:mx-4 xl:mx-auto lg:mt-16 mt-20 ">
          <div className="">
            {/* <h1 className="text-5xl font-semibold text-primary py-5">
                                Get In Touch
                            </h1> */}

            <div className="flex flex-col justify-start">
              <div className="lg:mt-4 mb-3 md:mb-8">
                <h2 className="text-5xl lg:text-3xl font-bold leading-tight md:text-left text-center text-primary">
                  Contact Us.
                </h2>
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold md:font-bold md:text-left text-center text-black px-4 ">
                  {" "}
                  For any queries, Please reach out to us. Our Support team will
                  get back to you within 24 hours.
                </h2>
                <div className="flex items-center justify-center md:justify-start text-black mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <p className="text-sm md:text-base text-black">
                    contact@Coursify.com
                  </p>
                </div>
                <div className="flex items-center justify-center md:justify-start text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-9 h-6 mt-[12px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <p className="text-sm md:text-base pt-3 text-black">
                    +91 9999999900{" "}
                  </p>
                </div>
              </div>

            </div>
          </div>

        <div className="lg:block hidden h-[50vh] w-[30%] absolute bg-primary top-0 right-0 z-10">
                            <div>

                            </div>
        </div>
          <div className="z-20 mx-4 mb-4  lg:ml-10">
            <form
              noValidate
              onSubmit={onFormSubmit}
              className="gap-2 p-5 rounded-sm text-black shadow-xl w-xl bg-white"
            >
              {/* <h1 className="text-5xl font-semibold text-primary py-5">
                                Get In Touch
                            </h1> */}

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="name" className="text-xl font-semibold">
                  Name*
                </label>
                <input
                  className="bg-transparent border px-2 py-1 rounded-sm"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your Name..."
                  onChange={handleInputChange}
                  value={userInput.name}
                />
              </div>

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="name" className="text-xl font-semibold">
                  Email*
                </label>
                <input
                  className="bg-transparent border px-2 py-1 rounded-sm"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your Email..."
                  onChange={handleInputChange}
                  value={userInput.email}
                />
              </div>

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="message" className="text-xl font-semibold">
                  Message*
                </label>
                <textarea
                  className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40"
                  id="message"
                  name="message"
                  placeholder="Enter your email"
                  onChange={handleInputChange}
                  value={userInput.message}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white mt-2 bg-primary hover:bg-light transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Contact;
