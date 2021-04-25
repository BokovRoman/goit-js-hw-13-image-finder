import "../styles.css"
import { success, error} from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";



export function showSuccess() {
    success({
        text: "It`s OK. This request has been done!",
        delay: 1300,
    })
};

export function showError() {
    error({
        text: "No mathes found. Enter a correct query!",
        delay: 1300,
    })
};
