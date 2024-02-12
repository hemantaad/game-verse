import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4e82d4c2f08a445191cf69d816ae5659",
  },
});
