import axios from "@/utils/axios";

/**
 * @description hello
 * @param {Object} data
 * @param {String} data.for 
 * @param {import("axios").AxiosRequestConfig} config 
 * @returns {Promise<import("axios").AxiosResponse>} 
 */
export const create = (data = { for: null }, config = {}) => axios.post(`crazy/chat/v1.0.1/conversations`, data, config);


/**
 * @description get all conversations 
 * @param {Object} params
 * @param {Array<String>} params.with
 * @param {import("axios").AxiosRequestConfig} config 
 * @returns {Promise<import("axios").AxiosResponse>} 
 */
export const get = (params = {}, config = {}) => axios.get(`crazy/chat/v1.0.1/conversations`, { params, ...config });