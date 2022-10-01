import type { string } from "yup";

export declare global {
    interface Window {
        handleCaptchaCallback: (token: string) => Promise<void>;
        resetCaptcha: () => void;
        handleCaptchaError: () => void;
    }
    interface ImageProps {
        alt: string;
        srcset: string;
    }
    interface DrawingProps extends ImageProps {
        medium: string,
        displayName: string
    }
    interface CustomResponse {
        message?: string;
    }

    module "*&imagetools" {
        const out;
        export default out;
    }
}

