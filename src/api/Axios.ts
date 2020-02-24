import axios from "axios";

const Axios = axios.create({
    timeout: 10000,
});

// Axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

export default Axios;
