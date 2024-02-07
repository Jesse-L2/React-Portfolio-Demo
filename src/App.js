// Routes are defined in App.js

import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
      </Routes>
    </>
  )
}

export default App;
