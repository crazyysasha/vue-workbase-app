import axios from "axios";


export const login = async (credentials) => {
    let { data } = await axios.post(
        'http://api.workbase.uz/api/crazy/workbase/v1.0.1/login',
        credentials,
        { validateStatus: (status) => status < 500, headers: { 'Accept-Language': 'ru' } },
    );

    return data;
}

export const register = async (credentials) => {
    let { data } = await axios.post(
        'http://api.workbase.uz/api/crazy/workbase/v1.0.1/register',
        credentials,
        { validateStatus: (status) => status < 500, headers: { 'Accept-Language': 'ru' } },
    );

    return data;
}

export const getMe = async () => {
    try {
        const { data } = await axios.get('http://api.workbase.uz/api/crazy/workbase/v1.0.1/getMe', { headers: { 'Accept-Language': 'ru' } });

    } catch (error) {
        return error.response.data;
    }
    return { data };
}


export const logout = async ({ token }) => {
    let { data } = await axios.get('http://api.workbase.uz/api/crazy/workbase/v1.0.1/logout', { headers: { 'Authorization': `Bearer ${token}`, 'Accept-Language': 'ru' } });

    return data;
}


// refresh token API method 
export const refresh = async ({ token }) => {
    let { data } = await axios.get('http://api.workbase.uz/api/crazy/workbase/v1.0.1/refresh', { headers: { 'Authorization': `Bearer ${token}`, 'Accept-Language': 'ru' } });

    return data;
}