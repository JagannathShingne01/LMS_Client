import { useState } from "react";
import HomeLayout from "../Layout/HomeLayout"
import toast from "react-hot-toast";
import { isEmail } from "../Helpers/regexMatcher";

function Contact(){

    const [userInput,setUserInput] = useState({
        name:"",
        email: "",
        message: "",
    });

    function handleInputChange(e){
        const {name, value} = e.target;
        console.log(name, value)
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    async function onFormSubmit(e){
        e.preventDefault();
        if(!userInput.email || !userInput.name || !userInput.message){
            toast.error("All Fields are mandatory")
            return;
        }

        if (!isEmail(userInput.email)) {
            toast.error("Invalid Email")
            return;
        }

        try {
            
        } catch (error) {
            
        }
    } 


    return(

        <HomeLayout>
            <div className="flex items-center justify-center h-screen">
                <form noValidate onSubmit={onFormSubmit} className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem]">

                    <h1 className="text-5xl font-semibold">
                        Contact Form
                    </h1>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="name" className="text-xl font-semibold">
                            Name
                        </label>
                        <input  className="bg-transparent border px-2 py-1 rounded-sm" 
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Enter your Name..."
                                onChange={handleInputChange}
                        />
                    </div>
                    
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="name" className="text-xl font-semibold">
                            Email
                        </label>
                        <input  className="bg-transparent border px-2 py-1 rounded-sm" 
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your Email..."
                                onChange={handleInputChange}
                        />
                    </div>
                    
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="name" className="text-xl font-semibold">
                        Massage
                        </label>
                        <textarea  className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40" 
                                id="massage"
                                name="massage"
                                placeholder="Enter your Massage"
                                onClick={handleInputChange}
                        />
                    </div>

                    <button type="submit"
                            className="w-full bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
                    >
                            Submit
                    </button>
                </form>
            </div>
        </HomeLayout>

        )
}

export default Contact;