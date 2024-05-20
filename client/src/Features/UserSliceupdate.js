// UserSliceupdate.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  babysitter: null,
  status: 'idle',
  error: null,
};

export const fetchBabysitter = createAsyncThunk(
  'babysitter/fetch',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3001/getbabysittergirl/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch babysitter data');
      }
      const data = await response.json();
      return data.babysittergirl[0]; // Assuming this structure matches your backend response
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateBabysitter = createAsyncThunk(
  'babysitter/update',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3001/updatebabysittergirl/${formData.babysitterid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update babysitter');
      }

      return formData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearBabysitterState(state) {
      state.babysitter = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBabysitter.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBabysitter.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.babysitter = action.payload;
        state.error = null;
      })
      .addCase(fetchBabysitter.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateBabysitter.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateBabysitter.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.babysitter = action.payload; // Ensure state is updated properly
        state.error = null;
      })
      .addCase(updateBabysitter.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { clearBabysitterState } = userSlice.actions;

export default userSlice.reducer;
