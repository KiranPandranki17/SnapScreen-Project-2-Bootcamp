import axios from "axios";

const API = {
  query: function () {
    return axios.get(
      `https://api.unsplash.com/photos/random?client_id=UcWmTLdwtNcVwidoglc_L8EYgLlQvgESUpUVRapKabs&count=30`
    );
  },
};


export default API;