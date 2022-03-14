import useLogin from "./login";
import { useLogout } from "./logout";
import useRegister from "./register";
import { isAuthentificated, token, useRefreshToken } from "./token";
import { useUser } from "./user";

export {
    useRegister,
    useLogin,
    useUser,
    token,
    isAuthentificated,
    useRefreshToken,
    useLogout,
}

// export default function useAuth() {


//     const onLogin = async (credentials) => {
//         const { data, error } = await login(credentials);

//         if (['validation', 'auth'].includes(error?.type)) {
//             return { error };
//         }

//         if ('token' in data) {
//             tokenRef.value = data.token;
//         }

//         if ('user' in data) {
//             userRef.value = data.user;
//         }

//         return data;
//     }
//     const onLogout = async () => {
//         try {

//             const data = await logout({ token: token.value });
//         } catch (error) {

//         } finally {
//             tokenRef.value = null;
//             userRef.value = null;
//         }
//         return data;
//     }

//     const onRefresh = async () => {
//         try {
//             const { token } = await refresh({ token: token.value });
//             tokenRef.value = token;
//         } catch (error) {
//             tokenRef.value = null;
//             userRef.value = null;
//         }
//     }

//     const onRegister = async (credentials) => {

//         const { data, error } = await register(credentials);

//         if (['validation', 'auth'].includes(error?.type)) {
//             return { error };
//         }

//         if ('token' in data) {
//             tokenRef.value = data.token;
//         }

//         if ('user' in data) {
//             userRef.value = data.user;
//         }

//         return data;
//     }

//     return {
//         isAuthentificated,
//         token,
//         user,
//         onLogin,
//         onLogout,
//         onRegister,
//         onRefresh,
//     };
// }
