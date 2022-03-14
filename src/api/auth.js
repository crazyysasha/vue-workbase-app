import axios from "@/utils/axios";

export const login = async (credentials = { username, password, type }) => {
    return axios.post(
        '/crazy/workbase/v1.0.1/login',
        credentials,
    );
}

export const register = async (credentials = { name, surname, username, email, password, passwordConfirmation }) => {
    credentials = { password_confirmation: credentials.passwordConfirmation, ...credentials };
    console.log(credentials);
    return axios.post(
        '/crazy/workbase/v1.0.1/register',
        credentials,
    );
}

export const logout = async () => {
    return axios.get('/crazy/workbase/v1.0.1/logout');
}

export const refresh = async () => {
    return axios.get('/crazy/workbase/v1.0.1/refresh');
}

export const getMe = () => {
    return axios.get('/crazy/workbase/v1.0.1/getMe');
}

export const update = ({ name, surname, patronymic, username, email, gender, birthday, address }) => {
    return axios.post('/crazy/workbase/v1.0.1/update', {
        name, surname, patronymic, username, email, gender, birthday, address,
    });
};