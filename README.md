# React + TypeScript + Vite + Tailwind CSS

This template provides a minimal setup to get React working in Vite with HMR, Tailwind CSS, and ESLint rules.

## Project Features

### Custom Components

1. **Dropdown Component**

   - Fully responsive (mobile & desktop)
   - Supports text, icon, and Moodlet variants
   - Keyboard accessible
   - Custom styling with Tailwind

2. **Moodlet Component**

   - Highly customizable status indicators
   - Multiple variants (primary, inactive, success, warning, etc.)
   - Supports letters, icons, and text
   - Responsive design

3. **FSC Status Indicator**
   - Tracks Fuelling, Servicing, and Cleaning states
   - Interactive controls:
     - Left-click cycles states (Required → Current → Completed)
     - Right-click toggles requirement
   - Dual display modes:
     - Letter view (F/S/C)
     - Word view (Fuelling/Servicing/Cleaning)
   - Color-coded states:
     - Required: `#998DBF` (inactive)
     - Current: `#D22D5C` (stop/red)
     - Completed: `#319B31` (ok/green)
     - Not Required: Grayed out

### UI Documentation

- Comprehensive component showcase
- Usage examples
- Interactive demos
- Responsive design testing

## Development Setup

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```
#   f s c - i n d i c a t o r - c u s t o m - u i  
 