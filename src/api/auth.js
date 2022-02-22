import axios from "axios";


export const login = async (credentials) => {
    let { data } = await axios.post(
        'http://october.loc/api/crazy/workbase/v1.0.1/login',
        credentials,
        { validateStatus: (status) => status < 500, },
    );

    return data;
}


export const getMe = async () => {
    try {
        const { data } = await axios.get('http://october.loc/api/crazy/workbase/v1.0.1/getMe',);

    } catch (error) {
        return error.response.data;
    }
    return { data };
}
