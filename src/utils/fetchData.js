import axios from "axios";

export const exerciseOptions = {
  params: { limit: "1000" },
  headers: {
    "X-RapidAPI-Key": "b407b577d3msha347cec32d31a31p183b36jsna6b34044c867",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b407b577d3msha347cec32d31a31p183b36jsna6b34044c867",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, config) => {
  try {
    const response = await axios.get(url, config);

    return response.data; // Returning the data from the response
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throwing the error for handling in the component
  }
};
