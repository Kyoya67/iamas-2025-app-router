"use client"
import { createContext, useContext, useState, ReactNode } from 'react';

type ModalContextType = {
    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
} 