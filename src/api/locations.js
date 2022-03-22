import axios from "@/utils/axios"


export const get = () => {
    return axios.get('/crazy/location/v1.0.1/locations');
}