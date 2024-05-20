import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/getPosts", async (userData) => {
  try {
    const response = await axios.get("http://127.0.0.1:3002/getPosts");
    return response.data.posts;
  } catch (error) {
    console.log(error);
  }
});

export const delPost = createAsyncThunk("posts/delPost", async (postid) => {
  try {
    await axios.delete(`http://127.0.0.1:3002/delPost/${postid}`);
    return postid;
  } catch (error) {
    console.log(error);
  }
});

export const savePost = createAsyncThunk("posts/savePost", async (userData) => {
  try {
    const response = await axios.post("http://127.0.0.1:3002/savePost", {
      email: userData.EMAIL,
      postMsg: userData.MSG,
    });

    const post = response.data.post;
    return post;
  } catch (error) {
    console.log(error);
  }
});

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (postData) => {
    try {
      const response = await axios.post("http://127.0.0.1:3002/updatePost", {
        postMsg: postData.pmsg,
        pid: postData.pid,
      });

      const post = response.data.post;
      return post;
    } catch (error) {
      console.log(error);
    }
  }
);

const initVal = {
  posts: [],
  comments: [],
  likes: [],
  status: "idle",
  error: null,
};

const PostSlice = createSlice({
  name: "posts",
  initialState: initVal,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "Sucess";
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "Rejected";
        state.error = action.error.message;
      })
      .addCase(delPost.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(delPost.fulfilled, (state, action) => {
        state.status = "Sucess";
        state.posts = state.posts.filter((post) => post._id !== action.payload);
      })
      .addCase(delPost.rejected, (state, action) => {
        state.status = "Rejected";
        state.error = action.error.message;
      })
      .addCase(savePost.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(savePost.fulfilled, (state, action) => {
        state.status = "Sucess";
        state.posts.unshift(action.payload);
      })
      .addCase(savePost.rejected, (state, action) => {
        state.status = "Rejected";
        state.error = action.error.message;
      })
      .addCase(updatePost.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.status = "Sucess";
        const updatedPostIndex = state.posts.findIndex(
          (post) => post._id === action.payload._id
        );
        console.log(action.payload);

        if (updatedPostIndex !== -1) {
          //state.posts[updatedPostIndex] = action.payload;
          state.posts[updatedPostIndex].postMsg = action.payload.postMsg;
        }
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.status = "Rejected";
        state.error = action.error.message;
      });
  },
});

export default PostSlice.reducer;
