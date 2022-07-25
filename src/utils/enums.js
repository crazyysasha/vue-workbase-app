import { readonly } from "vue";

/**
 * Profile Type
 * @enum {String}
 */
export const ProfileType = readonly({
    customer: "customer",
    executor: "executor",
});

/**
 * Gender
 * @enum {String}
 */
export const Gender = readonly({
    man: "man",
    woman: "woman",
});

/**
 * ConversiableTypes
 * @enum {String}
 */
export const ConversiableTypes = readonly({
    order: '\\Crazy\\FreeLancer\\Models\\Order',
});