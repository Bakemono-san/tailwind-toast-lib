// components/ToastManager.tsx
import React, { useEffect, useState } from 'react';
import { Toast, ToastProps } from './Toast';

export interface ToastItem extends ToastProps {
  id: number;
}

export let pushToast: (toast: Omit<ToastProps, 'id'>) => void = () => {};

export const ToastManager: React.FC = () => {
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

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-3 items-end pointer-events-none">
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
