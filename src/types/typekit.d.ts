export interface TypekitConfig {
    kitId: string;
    scriptTimeout: number;
    async: boolean;
}

export interface Typekit {
    load: (config?: TypekitConfig) => void;
}

export interface TypekitScript extends HTMLScriptElement {
    readyState?: 'complete' | 'loaded' | 'loading' | 'uninitialized';
    onreadystatechange?: ((this: GlobalEventHandlers) => void) | null;
    onload?: ((this: GlobalEventHandlers) => void) | null;
}

declare global {
    interface Window {
        Typekit: Typekit;
    }
}

export { }; 