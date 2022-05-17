import axios from "@/utils/axios";

export const get = (params = { with: [], category: null, page: 1, perPage: 10, }, config = {}) => {
    return axios.get('crazy/freelancer/v1.0.1/services', { params, ...config });
};