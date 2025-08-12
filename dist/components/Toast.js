import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
/**
 * Toast notification component for displaying temporary messages to users
 *
 * Features:
 * - Four built-in types with appropriate styling (success, error, warning, info)
 * - Automatic closing with customizable duration
 * - Manual close button option
 * - Smooth slide-in/slide-out animations
 * - Accessible with proper ARIA labels
 * - Fully customizable styling
 *
 * @example
 * // Basic usage
 * <Toast message="Operation completed successfully!" />
 *
 * @example
 * // Success toast with title and custom duration
 * <Toast
 *   type="success"
 *   title="Success!"
 *   message="Your profile has been updated."
 *   duration={3000}
 *   onClose={() => console.log('Toast closed')}
 * />
 *
 * @example
 * // Error toast that doesn't auto-close
 * <Toast
 *   type="error"
 *   title="Connection Error"
 *   message="Failed to connect to the server. Please check your internet connection."
 *   autoClose={false}
 * />
 *
 * @example
 * // Warning toast with custom styling
 * <Toast
 *   type="warning"
 *   message="Your session will expire in 5 minutes"
 *   className="!max-w-lg"
 *   showCloseButton={false}
 * />
 */
export const Toast = ({ type = 'info', title, message, duration = 5000, showCloseButton = true, onClose, className = '', autoClose = true, }) => {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        if (autoClose && duration > 0) {
            const timer = setTimeout(() => {
                setIsVisible(false);
                // Wait for exit animation before calling onClose
                setTimeout(() => onClose?.(), 300);
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [autoClose, duration, onClose]);
    /**
     * Handles manual closing of the toast with animation
     */
    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => onClose?.(), 300);
    };
    /**
     * Returns the appropriate Tailwind CSS classes based on toast type
     */
    const getTypeStyles = () => {
        const styles = {
            success: 'bg-green-50 border-green-200 text-green-800',
            error: 'bg-red-50 border-red-200 text-red-800',
            warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
            info: 'bg-blue-50 border-blue-200 text-blue-800'
        };
        return styles[type];
    };
    /**
     * Returns the appropriate icon element based on toast type
     */
    const getIcon = () => {
        const iconBase = 'w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0';
        switch (type) {
            case 'success':
                return _jsx("div", { className: `${iconBase} bg-green-500`, children: "\u2713" });
            case 'error':
                return _jsx("div", { className: `${iconBase} bg-red-500`, children: "\u00D7" });
            case 'warning':
                return _jsx("div", { className: `${iconBase} bg-yellow-500`, children: "!" });
            case 'info':
                return _jsx("div", { className: `${iconBase} bg-blue-500`, children: "i" });
        }
    };
    const baseClasses = `
    transform transition-all duration-300 ease-in-out
    border-l-4 rounded-md shadow-md p-4 mb-4 min-w-80 max-w-md
    ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
    ${getTypeStyles()}
    ${className}
  `.replace(/\s+/g, ' ').trim();
    return (_jsx("div", { className: baseClasses, children: _jsxs("div", { className: "flex items-start gap-3", children: [getIcon(), _jsxs("div", { className: "flex-1 min-w-0", children: [title && (_jsx("h4", { className: "font-semibold text-sm leading-5 mb-1", children: title })), _jsx("p", { className: "text-sm leading-5", children: message })] }), showCloseButton && (_jsx("button", { onClick: handleClose, className: "ml-2 text-gray-400 hover:text-gray-600 transition-colors p-1 -mr-1 -mt-1", "aria-label": "Close notification", children: _jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) }) }))] }) }));
};
