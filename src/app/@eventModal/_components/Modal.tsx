import { Overlay } from './Overlay';

interface ModalProps {
    children: React.ReactNode;
    nextPath?: string | null;
    previousPath?: string | null;
    imageUrl?: string;
}

export default function Modal({ children }: ModalProps) {
    return (
        <>
            <Overlay isVisible={true} />
            <div className="fixed inset-0 pointer-events-none z-[130] text-justify">
                <div className="relative w-full h-full">
                    <div className="
                        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[80%] max-w-[40rem] h-[80vh] sm:h-[90vh] texture-bg rounded-md
                        text-left
                        p-8
                        pointer-events-auto
                        overflow-hidden
                        ten-mincho
                    ">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
