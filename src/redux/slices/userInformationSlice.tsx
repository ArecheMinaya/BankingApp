import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/src/services/api";
import { UserModel } from "@/src/types/userInformation";

interface UserInformationState {
  userInformation: UserModel | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserInformationState = {
  userInformation: null,
  status: "idle",
  error: null,
};

export const getUserInformation = createAsyncThunk(
  "userInformation/getUserInformation",
  async () => {
    const response = await api.get<UserModel>("/userInformation");
    return response.data;
  },
);

const userInformationSlice = createSlice({
  name: "userInformation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get UserInformation
    builder.addCase(getUserInformation.fulfilled, (state, action) => {
      state.userInformation = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(getUserInformation.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getUserInformation.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Error desconocido";
    });
  },
});

export default userInformationSlice.reducer;
