import type { string } from "yup";

export declare global {
    interface Window {
        handleCaptchaCallback: (token: string) => Promise<void>;
        resetCaptcha: () => void;
        handleCaptchaError: () => void;
    }
    interface FileObj {
        file: File;
        src: string;
    }
    interface FileDict<FileObj> {
        [Key: number]: FileObj;
    }
    interface ArtworkMetadata {
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

