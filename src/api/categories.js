import axios from "@/utils/axios"

export const get = async (params = {}) => {
    return axios.get('/crazy/freelancer/v1.0.1/categories', { params });
}
export const getByIdOrSlug = async (idOrSlug) => {
    return axios.get(`/crazy/freelancer/v1.0.1/categories/${idOrSlug}`);
}
