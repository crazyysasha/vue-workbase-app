import axios from "axios";

export const getById = async (id) => {
    const { data, status } = await axios.get(
        `http://october.loc/api/crazy/freelancer/v1.0.1/orders/${id}`,
        { validateStatus: (status) => status < 500, }
    );

    return data
};

export const get = async (params) => {
    const { data, status } = await axios.get(
        `http://october.loc/api/crazy/freelancer/v1.0.1/orders/`,
        params,
        { validateStatus: (status) => status < 500, }
    );

    return data;
}