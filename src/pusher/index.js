import { auth } from "@/api/broadcast";
import Pusher from "pusher-js";

const pusher = {
    install(app) {
        app.config.globalProperties.$pusher = new Pusher(process.env.VUE_APP_PUSHER_API_KEY, {
            cluster: process.env.VUE_APP_PUSHER_CLUSTER,
            channelAuthorization: {
                customHandler: (data, callback) => {
                    auth({ channel_name: data.channelName, socket_id: data.socketId })
                        .then(response => response.data)
                        .then(data => callback(false, data))
                        .catch(error => callback(true, error));
                },
            },
        });

        app.provide('pusher', app.config.globalProperties.$pusher);
    }
};

export default pusher;