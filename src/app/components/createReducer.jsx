const { createSlice } = require("@reduxjs/toolkit");
const { getInstadata } = require("./action");

const initialState = {
  status: "idle",
  data: [],
  error: null,
};

const createReducer = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInstadata.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getInstadata.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })

      .addCase(getInstadata.rejected, (state) => {
        state.status = "error";
        state.error = "error";
      });
  },
});

export default createReducer;
