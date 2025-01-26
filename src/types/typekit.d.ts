interface TypekitConfig {
    kitId?: string;
    scriptTimeout?: number;
    async?: boolean;
}

interface Typekit {
    load: (config?: TypekitConfig) => void;
}

declare global {
    interface Window {
        Typekit: Typekit;
    }
}

export { }; 