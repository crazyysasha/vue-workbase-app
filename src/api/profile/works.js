import axios from "@/utils/axios"

export const get = (params = { perPage: Number, with: [/** 'files' */], search }) => {
    return axios.get('/crazy/workbase/v1.0.1/profile/works', { params });
}

export const getByIdOrSlug = (idOrSlug, params = {}) => {
    return axios.get(`/crazy/workbase/v1.0.1/profile/works/${idOrSlug}`);
}

export const deleteByIdOrSlug = (idOrSlug, params = {}) => {
    return axios.delete(`/crazy/workbase/v1.0.1/profile/works/${idOrSlug}`);
}

export const create = (data = { name, description, link, files }) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("link", data.link);
    [...data.files].forEach(file => {
        formData.append("files[]", file);
    });
    return axios.post('/crazy/workbase/v1.0.1/profile/works', formData, {
        headers: { "Content-Type": "multipart/form-data", },
        validateStatus: (status) => status < 500,
    });
}

export const update = (idOrSlug, params = {}) => {
    return axios.put(`/crazy/workbase/v1.0.1/profile/works/${idOrSlug}`, params);
}