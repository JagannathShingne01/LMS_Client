import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axoisInstance";

const initialState = {
    courseData: []
}

export const getAllCourses = createAsyncThunk("/course/get", async () => {
    try {
        const response = axiosInstance.get("/courses");
        toast.promise(response,{
            loading:"loading course data...",
            success:"Courses loaded successfully",
            error:"Failed to get the Courses",
        });
        return (await response).data.courses;
    } catch (error) {
        toast.error(error?.response?.data.message);
    }
});


const courseSlice = createSlice({
    name:"courses",
    initialState,
    reducer: {},
    extraReducers: (builder) => {

    }

});


export default courseSlice.reducer;