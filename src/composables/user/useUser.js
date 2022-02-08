import { getMe } from "@/api/user";
import { ref, watch } from "vue";

const user = ref(JSON.parse(localStorage.getItem('user')) || null);
const getUser = async () => console.log(await getMe());
getUser();
watch(user, () => {
    localStorage.setItem('user', JSON.stringify(user.value))
});

export default user;