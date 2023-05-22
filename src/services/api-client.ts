import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "0a00d7e22e6d482896d15a2b66499bba",
    },
});
