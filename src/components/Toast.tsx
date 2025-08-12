import React, { useState, useEffect, useRef } from 'react';

/**
 * Defines the visual style and semantic meaning of the toast notification
 */
export type ToastType = 'success' | 'error' | 'warning' | 'info';

/**
 * Configuration options for the Toast component
 */
export interface ToastProps {
  /** 
   * Visual style and semantic type of the toast
   * @default 'info'
   */
  type?: ToastType;
  
  /** 
   * Optional title displayed above the message in bold
   * @example "Success!" or "Error occurred"
   */
  title?: string;
  
  /** 
   * Main message content of the toast notification
   * @example "Your changes have been saved successfully"
   */
  message: string;
  
  /** 
   * Auto-close duration in milliseconds (only applies if autoClose is true)
   * @default 5000
   */
  duration?: number;
  
  /** 
   * Whether to show the close (×) button
   * @default true
   */
  showCloseButton?: boolean;
  
  /** 
   * Callback function triggered when the toast is closed (either manually or automatically)
   */
  onClose?: () => void;
  
  /** 
   * Additional CSS classes to apply to the toast container
   */
  className?: string;
  
  /** 
   * Whether the toast should automatically close after the specified duration
   * @default true
   */
  autoClose?: boolean;
}

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
export const Toast: React.FC<ToastProps> = ({
  type = 'info',
  title,
  message,
  duration = 5000,
  showCloseButton = true,
  onClose,
  className = '',
  autoClose = true,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const hasClosed = useRef(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);


  /**
   * Handles manual closing of the toast with animation
   */
  const closeToast = () => {
    if (hasClosed.current) return;
    hasClosed.current = true;
    setIsVisible(false);
    setTimeout(() => onClose?.(), 300);
  };

  useEffect(() => {
    if (autoClose && duration > 0) {
      closeTimeoutRef.current = setTimeout(closeToast, duration);
    }

    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, [autoClose, duration]);

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
        return <div className={`${iconBase} bg-green-500`}>✓</div>;
      case 'error':
        return <div className={`${iconBase} bg-red-500`}>×</div>;
      case 'warning':
        return <div className={`${iconBase} bg-yellow-500`}>!</div>;
      case 'info':
        return <div className={`${iconBase} bg-blue-500`}>i</div>;
    }
  };

  const baseClasses = `
    transform transition-all duration-300 ease-in-out
    border-l-4 rounded-md shadow-md p-4 mb-4 min-w-80 max-w-md
    ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
    ${getTypeStyles()}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className={baseClasses}>
      <div className="flex items-start gap-3">
        {getIcon()}
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className="font-semibold text-sm leading-5 mb-1">
              {title}
            </h4>
          )}
          <p className="text-sm leading-5">
            {message}
          </p>
        </div>
        {showCloseButton && (
          <button
            onClick={closeToast}
            className="ml-2 text-gray-400 hover:text-gray-600 transition-colors p-1 -mr-1 -mt-1"
            aria-label="Close notification"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

/**
 * Usage Examples and Best Practices:
 * 
 * 1. Basic Notification:
 *    <Toast message="Settings saved!" />
 * 
 * 2. Success with callback:
 *    <Toast
 *      type="success"
 *      title="Upload Complete"
 *      message="Your file has been uploaded successfully."
 *      onClose={() => setShowToast(false)}
 *    />
 * 
 * 3. Error that requires user action:
 *    <Toast
 *      type="error"
 *      title="Validation Error"
 *      message="Please fill in all required fields before submitting."
 *      autoClose={false}
 *    />
 * 
 * 4. Custom styling:
 *    <Toast
 *      type="info"
 *      message="New features available!"
 *      className="!bg-purple-50 !border-purple-200 !text-purple-800"
 *    />
 * 
 * 5. Integration with toast manager:
 *    const showToast = (type, message) => {
 *      setToasts(prev => [...prev, { id: Date.now(), type, message }]);
 *    };
 * 
 * Accessibility Notes:
 * - Uses proper ARIA labels for screen readers
 * - Keyboard accessible close button
 * - Sufficient color contrast for all variants
 * - Semantic HTML structure
 * 
 * Styling Notes:
 * - Uses Tailwind CSS utility classes
 * - Responsive design (min-width: 20rem, max-width: 28rem)
 * - Smooth CSS transitions for show/hide animations
 * - Consistent spacing and typography
 */
