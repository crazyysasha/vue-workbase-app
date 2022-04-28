import axios from "@/utils/axios";

export const login = async (credentials = { username, password, type }) => {
    return axios.post(
        '/crazy/workbase/v1.0.1/auth/login',
        credentials,
    );
}

export const register = async (credentials = { name, surname, username, email, password, passwordConfirmation }) => {
    credentials = { password_confirmation: credentials.passwordConfirmation, ...credentials };
    console.log(credentials);
    return axios.post(
        '/crazy/workbase/v1.0.1/auth/register',
        credentials,
    );
}

export const logout = async () => {
    return axios.get('/crazy/workbase/v1.0.1/auth/logout');
}

export const refresh = async () => {
    return axios.get('/crazy/workbase/v1.0.1/auth/refresh');
}
