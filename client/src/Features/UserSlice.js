import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Example login API endpoint
const LOGIN_ENDPOINT = "http://localhost:3001/login";

export const login = createAsyncThunk("users/login", async (loginData) => {
  try {
    const response = await fetch(LOGIN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    if (!data.success) {
      throw new Error("Invalid credentials");
    }

    return data; // Return relevant user data or tokens if needed
  } catch (error) {
    throw new Error(`Error during login: ${error.message}`);
  }
});

const initVal = {
  user: {},
  isSuccess: false,
  isError: false,
  isLoading: false,
};

const UserSlice = createSlice({
  name: "users",
  initialState: initVal,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // Assuming your API response includes user data
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default UserSlice.reducer;
