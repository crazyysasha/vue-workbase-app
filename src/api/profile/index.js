import axios from "@/utils/axios";

export const get = () => {
    return axios.get('/crazy/workbase/v1.0.1/profile');
}

export const update = ({ name, surname, patronymic, username, email, gender, birthday, address }) => {
    return axios.put('/crazy/workbase/v1.0.1/update', {
        name, surname, patronymic, username, email, gender, birthday, address,
    });
};
