import { jsx as _jsx } from "react/jsx-runtime";
// components/ToastManager.tsx
import { useEffect, useState } from 'react';
import { Toast } from './Toast';
export let pushToast = () => { };
export const ToastManager = () => {
    const [toasts, setToasts] = useState([]);
    useEffect(() => {
        pushToast = (toast) => {
            const id = Date.now() + Math.random();
            setToasts((prev) => [...prev, { ...toast, id }]);
        };
    }, []);
    const removeToast = (id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };
    return (_jsx("div", { className: "fixed top-4 right-4 z-50 flex flex-col gap-3 items-end pointer-events-none", children: toasts.map(({ id, ...props }) => (_jsx(Toast, { ...props, onClose: () => {
                props.onClose?.();
                removeToast(id);
            } }, id))) }));
};
