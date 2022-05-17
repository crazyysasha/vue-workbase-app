import { ProfileType } from "@/utils/enums";
import { readonly, ref } from "vue";

const profileType = ref(ProfileType.customer);

const onChange = (type = null) => {
    if (type in ProfileType) {
        return profileType.value = type;
    }
    console.log(profileType.value, Object.keys(ProfileType)[Object.values(ProfileType)[profileType.value] + 1] || Object.keys(ProfileType)[0]);
    return profileType.value = Object.keys(ProfileType)[Object.values(ProfileType)[profileType.value] + 1] || Object.keys(ProfileType)[0];
}

export default function useProfileType() {


    return {
        profileType: readonly(profileType),
        onChange,
    };
}