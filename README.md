# @bakemono-san/tailwindcss-react-toast

A reusable, accessible toast component for React, styled with TailwindCSS.

## Features

- Four toast types: `success`, `error`, `warning`, `info`
- Customizable title, message, duration, and styles
- Auto-close and manual close support
- Accessible close button
- TypeScript support
- Toast manager for stacking notifications
- Simple imperative API (`toast.success()`, etc.)
- **Configurable toast position via ToastManager**

## Installation

```sh
npm install @bakemono-san/tailwindcss-react-toast
```

**Peer dependencies:**

- `react` (v17, v18, or v19)
- `react-dom`
- `tailwindcss`

## Usage

### 1. Basic Toast

```tsx
import { Toast } from '@bakemono-san/tailwindcss-react-toast';

<Toast
  type="success"
  title="Success!"
  message="Your action was successful."
  duration={4000}
  showCloseButton
  onClose={() => setShowToast(false)}
  className="custom-class"
  autoClose
/>
```

### 2. Toast Manager (Recommended for stacking)

You can control where toasts appear using the `position` prop:

```tsx
import { ToastManager } from '@bakemono-san/tailwindcss-react-toast';

function App() {
  return (
    <>
      {/* Your app code */}
      <ToastManager position="top-right" /> {/* Default */}
      {/* Or use any of: "top-left", "bottom-right", "bottom-left", "top-center", "bottom-center" */}
    </>
  );
}
```

### 3. Imperative Toast API

```tsx
import { toast } from '@bakemono-san/tailwindcss-react-toast';

// Show a success toast
toast.success('Profile updated!');

// Show an error toast with options
toast.error('Failed to save.', { title: 'Error', duration: 7000 });

// Show a custom toast
toast.show({
  type: 'info',
  title: 'Heads up',
  message: 'This is a custom info toast.',
  duration: 3000,
  autoClose: true,
});
```

## Props

### Toast Props

| Name             | Type                                         | Default      | Description                       |
|------------------|----------------------------------------------|--------------|-----------------------------------|
| `type`           | `'success' \| 'error' \| 'warning' \| 'info'`| `'info'`     | Toast style/type                  |
| `title`          | `string`                                     | —            | Optional title                    |
| `message`        | `string`                                     | **Required** | Toast message                     |
| `duration`       | `number`                                     | `5000`       | Auto-close duration (ms)          |
| `showCloseButton`| `boolean`                                    | `true`       | Show close button                 |
| `onClose`        | `() => void`                                 | —            | Callback when toast closes        |
| `className`      | `string`                                     | `''`         | Additional Tailwind classes       |
| `autoClose`      | `boolean`                                    | `true`       | Enable auto-close                 |

### ToastManager Props

| Name      | Type                                                                 | Default      | Description                                      |
|-----------|----------------------------------------------------------------------|--------------|--------------------------------------------------|
| `position`| `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left' \| 'top-center' \| 'bottom-center'` | `'top-right'` | Position of the toast container on the screen    |

## TailwindCSS Setup

Ensure your Tailwind config includes your source files:

```js
// tailwind.config.js
export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@bakemono-san/tailwindcss-react-toast/dist/**/*.{js,jsx,ts,tsx}"
  ],
  theme: { extend: {} },
  plugins: [],
}
```

For TailwindCSS v4, add the following to your `styles.css` or `index.css`:

```css
@source "../node_modules/@bakemono-san/tailwindcss-react-toast/dist/**/*.{js,jsx,ts,tsx}";
```

## License
