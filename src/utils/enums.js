import { readonly } from "vue";

/**
 * Profile Type
 * @enum {String}
 */
export const ProfileType = readonly({
    customer: "customer",
    executor: "executor",
});
console.log(ProfileType.customer);
/**
 * Gender
 * @enum {String}
 */
export const Gender = readonly({
    man: "man",
    woman: "woman",
});