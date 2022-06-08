import Pusher from "pusher-js";
import { inject } from "vue";

export function usePusher() {
    /**
     * @var {Pusher} pusher
     */
    const pusher = inject('pusher');

    return { pusher };
}