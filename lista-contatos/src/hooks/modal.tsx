import { useState, useCallback } from "react";

export function useModal() {
    const [isOpen, setIsOpen] = useState(false)
    const mostrarModal = useCallback(() => setIsOpen((v) => !v), []);
    return { isOpen, mostrarModal, setIsOpen}
}