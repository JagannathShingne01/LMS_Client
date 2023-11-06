import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axoisInstance";

const initialState = {
    allUsersCount: 0,
    subscribedCount: 0
};

export const  getStatsData = createAsyncThunk("stats/get",async()=>{
    try {
        const respose = axiosInstance.get("/admin/stats/users");
        toast.promise(respose,{
            loading: "Getting the stats...",
            success: (data)=>{
                return data?.data?.message
            },
            error: "Failed to load data stats"
        })
        return (await respose).data;
    }catch(error){
        toast.error(error?.respose?.data?.message);
    }
})

const statSlice = createSlice({
    name: "state",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getStatsData.fulfilled,(state, action) => {
            state.allUsersCount = action?.payload?.allUsersCount;
            state.subscribedCount = action?.payload?.subscribedUsersCount;
        })

    }
})

export default statSlice.reducer;