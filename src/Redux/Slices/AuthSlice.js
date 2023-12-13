import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axoisInstance";
import toast from "react-hot-toast";
import { data } from "autoprefixer";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') !== undefined ? localStorage.getItem('data') : {}
}

export const createAccount = createAsyncThunk("/auth/signup", async (data)=>{
    try {
        const res = axiosInstance.post("user/register", data)
        toast.promise(res,{
            loading: "Wait! creating your Account",
            success: (data)=>{
                return data?.data?.message;
            },
            error: "Failed to create Account, Try Again!"
        });
        return (await res).data
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

export const login = createAsyncThunk("/auth/login", async (data)=>{
    try {
        const res = axiosInstance.post("/user/login", data)
        toast.promise(res,{
            loading: "Wait! login in progress....",
            success: (data)=>{
                return data?.data?.message;
            },
            error: "Failed to login Account, Try Again!"
        });
        return (await res).data
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

export const logout = createAsyncThunk("/auth/logout", async () =>{
    try {
        const res = axiosInstance.get("/user/logout")
        toast.promise(res,{
            loading: "Wait! logout in progress....",
            success: (data)=>{
                return data?.data?.message;
            },
            error: "Failed to logout Account, Try Again!"
        });
        return (await res).data
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
}
)

export const changePassword = createAsyncThunk("/auth/changePassword", async(userPassword)=>{
    try {
        const res = axiosInstance.post("/changed-password", userPassword);
        toast.promise(res,{
            loading: "changing password...",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to change  password",
        });
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

export const forgotPassword = createAsyncThunk("/auth/forgotPassword", async(email) => {
    try{
        const res = axiosInstance.post("/user/reset", {email});
        toast.promise(res,{
            loading: "Loading...",
            success:(data)=>{
                return data?.data?.message;
            },
            error: "Failed to send verification email",
        });
        return (await res).data
    }catch(error){
        toast.error(error?.response?.data?.message);
    }
});

export const resetPassword = createAsyncThunk("/user/reset", async(data) => {
    try {
        let res = axiosInstance.post(`/user/reset-token/${data.resetToken}`, { password: data.password });
        toast.promise(res,{
            loading: "Reseting Your Password!",
            success: (data)=>{
                return data?.data?.message;
            },
            error: "Failed to Reset Password"
        });
        return (await res).data; 
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
} );
export const updateProfile = createAsyncThunk("/user/update/profile", async (data) =>{
    try {
        const res = axiosInstance.put(`/user/update/${data[0]}`, data[1])
        toast.promise(res,{
            loading: "Wait! profile update in progress....",
            success: (data)=>{
                return data?.data?.message;
            },
            error: "Failed to Update Profile, Try Again!"
        });
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
}
)

export const getUserData = createAsyncThunk("/user/update/profile", async () =>{
    try {
        const res = axiosInstance.get("user/me");
        return (await res).data
    } catch (error) {
        toast.error(error.message);
    }
}
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(login.fulfilled, (state, action)=>{
            localStorage.setItem("data", JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", action?.payload?.user?.role);
            state.isLoggedIn = true;
            state.data = action?.payload?.user;
            state.role = action?.payload?.user?.role;
        })
        .addCase(logout.fulfilled, (state) => {
            localStorage.clear();
            state.data = {};
            state.isLoggedIn = false;
            state.role = "";
        })
        .addCase(getUserData.fulfilled,(state, action) => {
            localStorage.setItem("data", JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", action?.payload?.user?.role);
            state.isLoggedIn = true;
            state.data = action?.payload?.user;
            state.role = action?.payload?.user?.role;
        })
    }

})


// export const {} = authSlice.actions;
export default authSlice.reducer;