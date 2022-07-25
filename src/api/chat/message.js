import axios from "@/utils/axios";

export const create = (data = {}, config = {}) => axios.post(`crazy/chat/v1.0.1/messages`, data, config);