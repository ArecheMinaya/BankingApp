import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/authSlice";
import userData from "../redux/slices/userInformationSlice";
import accountDetailSlice from "./slices/accountDetailSlice";
import recentMovementsSlice from "./slices/movementsSlice";
import accountsForTransfer from "./slices/accounstForTransferSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userData: userData,
    accountDetail: accountDetailSlice,
    recentMovements: recentMovementsSlice,
    accountsForTransfer: accountsForTransfer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
