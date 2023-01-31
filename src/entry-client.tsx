import React, { Suspense } from "react";
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from "./reportWebVitals";

// STYLE
import "./index.css";
import "./styles/index.scss";
import "./fonts/line-awesome-1.3.0/css/line-awesome.css";

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
        <App />
  </React.StrictMode>
)

reportWebVitals();
