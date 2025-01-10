import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "d80bf5a4120745b8af611a1d9d6ab426"
    }
})