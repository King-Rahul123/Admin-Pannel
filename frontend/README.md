# Admin Page — Frontend Project Structure

This README lists the full project structure for the frontend of the Admin Page.

```
frontend/
  ├─ eslint.config.js
  ├─ index.html
  ├─ package.json
  ├─ package-lock.json
  ├─ README.md
  ├─ vite.config.js
  ├─ public/
  └─ src/
     ├─ App.jsx
     ├─ index.css
     ├─ main.jsx
     ├─ assets/
     ├─ components/
     │  ├─ Add_Brand.jsx
     │  ├─ Add_Coupon.jsx
     │  ├─ Add_GiftCard.jsx
     │  ├─ AddProduct.jsx
     │  ├─ Header.jsx
     │  └─ Sidebar.jsx
     └─ pages/
        ├─ Brand.jsx
        ├─ Category.jsx
        ├─ Coupon_List.jsx
        ├─ Customer.jsx
        ├─ Customers.jsx
        ├─ Dashboard.jsx
        ├─ FlashSale.jsx
        ├─ GiftCard_List.jsx
        ├─ Orders.jsx
        ├─ Payment.jsx
        ├─ Product.jsx
        ├─ Profile.jsx
        ├─ RefundRequest.jsx
        ├─ ReportAnalytics.jsx
        ├─ Returns.jsx
        ├─ Subcategory.jsx
        └─ WarrentyClaim.jsx

```

Brief notes:
- Root files: build/config files (`vite.config.js`, `eslint.config.js`), entry `index.html`, and `package.json` for dependencies and scripts.
- `public/`: static assets served as-is.
- `src/`: application source code.
  - `assets/`: logos, images, fonts.
  - `components/`: reusable UI components (header, sidebar, add-item forms).
  - `pages/`: route-level views for the admin dashboard and features.

If you want, I can also:
- Expand descriptions for each file.
- Generate file links or a clickable tree for documentation.
- Add badges or usage instructions to this README.

---
Generated automatically.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
