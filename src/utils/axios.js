import { isAuthentificated, token, useRefreshToken } from "@/composables/auth";
import axios from "axios";

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept-Language": 'ru',
    },
});

instance.interceptors.request.use(async function (config) {
    if (isAuthentificated.value) {
        config.headers["Authorization"] = `Bearer ${token.value}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(async function (response) {
    return response;
}, async function (error) {
    const { config, response } = error;
    if (response?.status == 401 && !config._retry && isAuthentificated.value) {
        config._retry = true;
        try {
            const { promise, onRefresh } = useRefreshToken();
            if (!promise.value) {
                onRefresh();
            }
            await promise.value;
            return instance(config);
        } catch (e) {
            console.log(e);
            return Promise.reject(e);
        }
    }
    if (response?.status == 401 && config._retry) {
        token.value = null;
    }
    return Promise.reject(error);
});

export default instance;