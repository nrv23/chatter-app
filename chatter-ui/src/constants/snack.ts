import { makeVar } from "@apollo/client";
import { ISnackMessage } from "../interfaces/snack-message.interface";

const snackVar = makeVar<ISnackMessage | undefined>(undefined);

export {
    snackVar
};