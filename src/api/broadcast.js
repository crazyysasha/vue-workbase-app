import axios from "@/utils/axios";

export const auth = async (data) => axios.post('/broadcasting/auth', data);

