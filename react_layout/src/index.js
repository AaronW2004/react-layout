import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Pictures from "./pages/Pictures";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(<Layout />)} />
        <Route index element={(<Home />)} />
        <Route path="about" element={(<About />)} />
        <Route path="pictures" element={(<Pictures />)} />
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <App />
);
