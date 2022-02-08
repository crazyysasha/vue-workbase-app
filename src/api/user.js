import axios from "axios";
export const login = async (params) => {
    try {
        console.log('login');
        const { data } = await axios.post('http://october.loc/api/crazy/workbase/v1.0.1/login', params,);

    } catch (error) {
        return error.response.data;
    }
    console.log(data);
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