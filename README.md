# @bakemono-san/tailwindcss-react-toast

A reusable, accessible toast component for React, styled with TailwindCSS.

## Features

- Four toast types: `success`, `error`, `warning`, `info`
- Customizable title, message, duration, and styles
- Auto-close and manual close support
- Accessible close button
- TypeScript support

## Installation

```sh
npm install @bakemono-san/tailwindcss-react-toast
```

**Peer dependencies:**

- `react` (v17, v18, or v19)
- `react-dom`
- `tailwindcss`

## Usage

**1. Import the Toast component:**

```tsx
import { Toast } from '@bakemono-san/tailwindcss-react-toast';
```

**2. Render the Toast:**

```tsx
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

## Props

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

## TailwindCSS Setup

Ensure your Tailwind config includes your source files:

```js
// tailwind.config.js
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

For TailwindCSS v4, add the following to your `styles.css` or `index.css`:

```css
@source "../node_modules/@bakemono-san/tailwindcss-react-toast/dist/**/*.{js,jsx,ts,tsx}";
```

## License

MIT © bakemono-san
