import React from 'react'
import "./assets/tailwind.css";
// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import Dashboard from "./pages/Dashboard";
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
</BrowserRouter>
)
