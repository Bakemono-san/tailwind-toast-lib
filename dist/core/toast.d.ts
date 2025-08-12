import { ToastProps } from '../components/Toast';
export declare const toast: {
    show: (toast: Omit<ToastProps, "id">) => void;
    success: (message: string, opts?: Partial<Omit<ToastProps, "message" | "type">>) => void;
    error: (message: string, opts?: Partial<Omit<ToastProps, "message" | "type">>) => void;
    warning: (message: string, opts?: Partial<Omit<ToastProps, "message" | "type">>) => void;
    info: (message: string, opts?: Partial<Omit<ToastProps, "message" | "type">>) => void;
};
