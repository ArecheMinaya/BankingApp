import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/src/services/api";
import { AccountDetailModel } from "@/src/types/accountDetail";

interface AcountDetailState {
  accountDetail: AccountDetailModel | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AcountDetailState = {
  accountDetail: null,
  status: "idle",
  error: null,
};

export const getAccountDetail = createAsyncThunk(
  "accont/accountDetail",
  async ({ id }: { id: number }) => {
    const response = await api.get<AccountDetailModel>("/accountDetail", {
      params: { id },
    });
    return response.data;
  },
);

const accountDetailSlice = createSlice({
  name: "accountDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get accountDetail
    builder.addCase(getAccountDetail.fulfilled, (state, action) => {
      state.accountDetail = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(getAccountDetail.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAccountDetail.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Error desconocido";
    });
  },
});

export default accountDetailSlice.reducer;
