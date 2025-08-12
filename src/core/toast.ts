// core/toast.ts
import { ToastProps } from '../components/Toast';
import { pushToast } from '../components/ToastManager';

export const toast = {
  show: (toast: Omit<ToastProps, 'id'>) => pushToast(toast),
  success: (message: string, opts?: Partial<Omit<ToastProps, 'message' | 'type'>>) =>
    pushToast({ ...opts, message, type: 'success' }),
  error: (message: string, opts?: Partial<Omit<ToastProps, 'message' | 'type'>>) =>
    pushToast({ ...opts, message, type: 'error' }),
  warning: (message: string, opts?: Partial<Omit<ToastProps, 'message' | 'type'>>) =>
    pushToast({ ...opts, message, type: 'warning' }),
  info: (message: string, opts?: Partial<Omit<ToastProps, 'message' | 'type'>>) =>
    pushToast({ ...opts, message, type: 'info' }),
};
