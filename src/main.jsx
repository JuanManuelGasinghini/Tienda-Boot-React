import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import{ createBrowserRouter, RouterProvider } from 'react-router-dom';
import products from "./Data/products.json"
import ProductView from './views/ProductView.jsx';

 const routes = [
   {
     path: '/',
     element: <App />,
   },
 ];

 products.forEach((product) => {
  routes.push({
    path: product.title,
    element: <ProductView product={product} />,
  });
  });

 const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
