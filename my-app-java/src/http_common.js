import axios from "axios";

// export default axios.create({
//   baseURL: process.env.REACT_APP_SERVER_URL,
//   headers: {
//     "Content-type": "application/json"
//   }
// });


export default axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        "Content-type": "application/json"
      }
});