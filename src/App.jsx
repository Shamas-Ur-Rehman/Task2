import React from 'react';
import ProductAd from './componets/ProductAd';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RefrigeratorOptions from './componets/RefrigeratorOptions';
import RefrigeratorForm from './componets/RefrigeratorForm';
import FormComponent from './componets/FormComponent';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<ProductAd />} />
      <Route path="/refrigerator-Options" element={<RefrigeratorOptions/>} />
      <Route path="/refrigerator-form" element={<RefrigeratorForm/>} />
      <Route path="/form" element={<FormComponent/>} />
    </Routes>
  </Router>
  );
};

export default App;
