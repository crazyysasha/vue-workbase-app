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