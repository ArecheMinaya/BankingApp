import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/src/services/api";
import { RecentMovements } from "@/src/types/movement";

interface MovementsState {
  recentMovements: RecentMovements | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: MovementsState = {
  recentMovements: null,
  status: "idle",
  error: null,
};

export const getRecentMovements = createAsyncThunk(
  "movements/recentMovements",
  async ({ id }: { id: number }) => {
    const response = await api.get<RecentMovements>("/recentMovements", {
      params: { id },
    });
    return response.data;
  },
);

const recentMovementsSlice = createSlice({
  name: "movements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get recentMovements
    builder.addCase(getRecentMovements.fulfilled, (state, action) => {
      state.recentMovements = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(getRecentMovements.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getRecentMovements.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Error desconocido";
    });
  },
});

export default recentMovementsSlice.reducer;
