import axios from "@/utils/axios";

export const get = () => {
    return axios.get(`/crazy/workbase/v1.0.1/settings`);
}