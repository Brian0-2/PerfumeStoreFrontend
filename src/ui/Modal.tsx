import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';
import Button from './Button';

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    contentLabel: string;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onRequestClose, contentLabel, children }: ModalProps) {
    // Close with ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onRequestClose();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onRequestClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <main className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    {/* Overlay */}
                    <motion.div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onRequestClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative z-10 w-full sm:max-w-md bg-white rounded-xl shadow-2xl p-6 sm:p-8"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                        {/* Header */}
                        <header className="flex items-center justify-between w-full border-b pb-3 mb-4">
                            <h2 className="flex-1 text-lg font-semibold text-gray-900 text-center">
                                {contentLabel}
                            </h2>

                            <Button
                                onClick={onRequestClose}
                                className="text-gray-400 hover:text-gray-600 cursor-pointer transition-all ml-2"
                                aria-label="Cerrar modal"
                            >
                                <FaTimes className="w-5 h-5" />
                            </Button>
                        </header>
                        {/* Body */}
                        <section className="text-gray-700">
                            {children}
                        </section>
                    </motion.div>
                </main>
            )}
        </AnimatePresence>
    );
}
