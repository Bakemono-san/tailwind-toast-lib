// components/ToastManager.tsx
import React, { useEffect, useState } from 'react';
import { Toast, ToastProps } from './Toast';

export interface ToastItem extends ToastProps {
  id: number;
}

export let pushToast: (toast: Omit<ToastProps, 'id'>) => void = () => {};

export interface ToastManagerProps {
  /** Position of the toast container on screen */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
}

export const ToastManager: React.FC<ToastManagerProps> = ({ position = 'top-right' }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    pushToast = (toast: Omit<ToastProps, 'id'>) => {
      const id = Date.now() + Math.random();
      setToasts((prev) => [...prev, { ...toast, id }]);
    };
  }, []);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const positionClasses = {
    'top-right': 'top-4 right-4 items-end',
    'top-left': 'top-4 left-4 items-start',
    'bottom-right': 'bottom-4 right-4 items-end',
    'bottom-left': 'bottom-4 left-4 items-start',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2 items-center',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2 items-center',
  };

  return (
    <div className={`fixed z-50 flex flex-col gap-3 pointer-events-none ${positionClasses[position]}`}>
      {toasts.map(({ id, ...props }) => (
        <Toast
          key={id}
          {...props}
          onClose={() => {
            props.onClose?.();
            removeToast(id);
          }}
        />
      ))}
    </div>
  );
};
