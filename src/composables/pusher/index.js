import Pusher from "pusher-js";
import { inject } from "vue";

export function usePusher() {
    /**
     * @type {Pusher} pusher
     */
    const pusher = inject('pusher');

    return { pusher };
}