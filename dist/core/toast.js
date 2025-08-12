import { pushToast } from '../components/ToastManager';
export const toast = {
    show: (toast) => pushToast(toast),
    success: (message, opts) => pushToast({ ...opts, message, type: 'success' }),
    error: (message, opts) => pushToast({ ...opts, message, type: 'error' }),
    warning: (message, opts) => pushToast({ ...opts, message, type: 'warning' }),
    info: (message, opts) => pushToast({ ...opts, message, type: 'info' }),
};
