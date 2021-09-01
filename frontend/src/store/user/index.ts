import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../";
import { UserStateType, Cat } from "../../types";

// Define the initial state using that type
const initialState: UserStateType = {
  cats: [],
  loadCatStatus: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadCatsStart: (state) => ({
      ...state,
      cats: [],
      loadCatStatus: "loading",
    }),
    loadCatsSuccess: (
      state,
      action: PayloadAction<{ cats: Cat[]; status: string }>
    ) => ({
      ...state,
      cats: action.payload.cats,
      loadCatStatus: action.payload.status,
    }),
    loadCatsError: (state) => ({
      ...state,
      cats: [],
      loadCatStatus: "error",
    }),
    addCat: (state, action: PayloadAction<Cat>) => ({
      ...state,
      cats: [...state.cats, action.payload],
    }),
    editCat: (state, action: PayloadAction<Cat>) => ({
      ...state,
      cats: state.cats.map((cat) => ({ ...cat, ...action.payload })),
    }),
    deleteCat: (state, action: PayloadAction<number>) => ({
      ...state,
      cats: state.cats.filter((cat) => cat.id !== action.payload),
    }),
  },
});

// Other code such as selectors can use the imported `RootState` type
export const getUserCats = (state: RootState) => state.user.cats;

export default userSlice.reducer;
