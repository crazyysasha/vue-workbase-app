import axios from "@/utils/axios";

export const get = (params = { with: [], category: null, page: 1, perPage: 10, }, config = {}) => {
    return axios.get('crazy/freelancer/v1.0.1/services', { params, ...config });
};

export const getByIdOrSlug = (idOrSlug, params = { with: [], count: [] }, config = {}) => {
    return axios.get(`crazy/freelancer/v1.0.1/services/${idOrSlug}`, { params, ...config });
}

export const create = (data = { name: '', parent: null, category: null, }, config = {}) => {
    return axios.post('crazy/freelancer/v1.0.1/services', data, config);
} 