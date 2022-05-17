import axios from "@/utils/axios"
import { AxiosResponse } from "axios";

export const get = async (params = { with: [] }) => {
    return axios.get('/crazy/freelancer/v1.0.1/categories', { params });
}

/** @param  {String} idOrSlug - the id or slug for fetching  */
export const getByIdOrSlug = async (idOrSlug) => {
    return axios.get(`/crazy/freelancer/v1.0.1/categories/${idOrSlug}`);
}
