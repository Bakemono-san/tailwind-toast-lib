import React from 'react';
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
export declare const Toast: React.FC<ToastProps>;
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
