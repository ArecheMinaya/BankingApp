import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "@/src/services/api";
import { AccountsForTransfer } from "@/src/types/accountsForTransfer";
import { TransferInformation } from "@/src/types/transferInformation";

interface AccountsForTransaction {
  accounts: AccountsForTransfer | null;
  trasfer: TransferInformation | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AccountsForTransaction = {
  accounts: null,
  trasfer: null,
  status: "idle",
  error: null,
};

export const getAccountsForTransfer = createAsyncThunk(
  "transactions/getAccountsForTransfer",
  async () => {
    const response = await api.get<AccountsForTransfer>(
      "/getAccountsForTransfer",
    );
    console.log("response", response.data);
    return response.data;
  },
);

const accountsForTransferSlice = createSlice({
  name: "accountsForTransfer",
  initialState,
  reducers: {
    setTransfer: (state, action: PayloadAction<TransferInformation>) => {
      state.trasfer = action.payload;
    },
    resetTransfer: (state) => {
      state.trasfer = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAccountsForTransfer.fulfilled, (state, action) => {
      state.accounts = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(getAccountsForTransfer.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAccountsForTransfer.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Error desconocido";
    });
  },
});

export const { setTransfer } = accountsForTransferSlice.actions;
export default accountsForTransferSlice.reducer;
