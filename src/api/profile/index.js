import axios from "@/utils/axios";
/** 
 * @param {{with: string[]}} [params]
 * 
 */
export const get = (params = { with: [], }) => axios.get('/crazy/workbase/v1.0.1/profile', { params });

export const update = ({ name, surname, patronymic, username, email, gender, birthday, address }) => {
    return axios.put('/crazy/workbase/v1.0.1/update', {
        name, surname, patronymic, username, email, gender, birthday, address,
    });
};
