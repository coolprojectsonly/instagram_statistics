import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getInstadata = createAsyncThunk(
  "/post/getinstadata",
  async ({ user }) => {
    const options = {
      method: "GET",
      url: "https://instagram-statistics-api.p.rapidapi.com/community",
      params: {
        url: `https://www.instagram.com/${user}/`,
      },
      headers: {
        "X-RapidAPI-Key": "721955d12emsh12900079c7be162p1e7203jsnb805721c4d3d",
        "X-RapidAPI-Host": "instagram-statistics-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
