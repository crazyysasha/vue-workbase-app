import axios from "@/utils/axios";

export const getById = (id, params = {}, config) => {
    return axios.get(
        `http://october.loc/api/crazy/freelancer/v1.0.1/orders/${id}`,
        { params, ...config },
    );
};

export const get = async (params) => {
    const { data, status } = await axios.get(
        `http://october.loc/api/crazy/freelancer/v1.0.1/orders/`,
        params,
        { validateStatus: (status) => status < 500, }
    );

    return data;
}

/**
 * 
 * @param  data 
 * @param {import("axios").AxiosRequestConfig} config 
 * @returns {Promise<import("axios").AxiosResponse>}
 */
export const create = (data = { services }, config = {}) => {

    return axios.post('crazy/freelancer/v1.0.1/orders', data, config);
}
export const update = (id, data = { services, name, address, lat, lng, is_online, at_customer, at_executor }, config = {}) => {
    return axios.post(`crazy/freelancer/v1.0.1/orders/${id}`, data, config);
}

export const publish = (id, data = {}, config = {}) => {
    return axios.post(`crazy/freelancer/v1.0.1/orders/${id}/publish`, data, config);
}