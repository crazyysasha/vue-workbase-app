import axios from "axios"

export const getCategories = async (params = {}) => {
    console.log(params);
    const { data } = await axios.get('http://october.loc/api/crazy/freelancer/v1.0.1/categories', { params });
    return data;
}