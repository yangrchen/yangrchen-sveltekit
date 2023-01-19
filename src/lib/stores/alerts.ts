import { writable } from "svelte/store";
export enum AlertTypes {
    Error,
    General,
    Success
}
export const alertTitle = writable('');
export const alertMessage = writable('');
export const alertType = writable(0);

export const displayAlert = (message: string, type = AlertTypes.General, resetTime: number, title?: string) => {
    alertTitle.set(title ?? '');
    alertMessage.set(message);
    alertType.set(type);
    if (resetTime) {
        setTimeout(() => {
            alertMessage.set('');

        }, resetTime)
    }
}

export const clearAlert = () => {
    alertMessage.set('');
}