import axios from "@/utils/axios"

export const get = async (params = { with: [], count: [] }, config = {}) => {
    return axios.get('/crazy/freelancer/v1.0.1/categories', { params, ...config });
}

/** @param  {String} idOrSlug - the id or slug for fetching  */
export const getByIdOrSlug = async (idOrSlug, params = { with: [], count: [] }, config = {}) => {
    return axios.get(`/crazy/freelancer/v1.0.1/categories/${idOrSlug}`, { params, ...config });
}
