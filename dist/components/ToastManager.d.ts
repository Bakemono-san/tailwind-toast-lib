import React from 'react';
import { ToastProps } from './Toast';
export interface ToastItem extends ToastProps {
    id: number;
}
export declare let pushToast: (toast: Omit<ToastProps, 'id'>) => void;
export declare const ToastManager: React.FC;
