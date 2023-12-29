# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Configure layout with router

```jsx
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// code goes here
<BrowserRouter>
  <Routes>
    {/* 1️⃣ Wrap your routes in a pathless layout route */}
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/users' element={<Users />} />
    </Route>
  </Routes>
</BrowserRouter>;
```
