import type { string } from "yup";

export declare global {
    interface Window {
        handleCaptchaCallback: (token: string) => Promise<void>;
        resetCaptcha: () => void;
        handleCaptchaError: () => void;
    }
    interface ImageProps {
        alt: string;
        'data-src': string;
        'data-srcset': string;
    }
}