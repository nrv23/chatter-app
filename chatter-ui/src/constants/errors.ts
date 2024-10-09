import { ISnackMessage } from "../interfaces/snack-message.interface";


const UNKNOWN_ERROR_MESSAGE ="Error has occured. Please try again later.";
const UNKNOWN_ERROR_SNACK_MESSAGE: ISnackMessage = {
    message: UNKNOWN_ERROR_MESSAGE,
    type: "error"
}

export { UNKNOWN_ERROR_MESSAGE, UNKNOWN_ERROR_SNACK_MESSAGE };