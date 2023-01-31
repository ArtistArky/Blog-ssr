import React, { Suspense } from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App';

// STYLE
import "./index.css";
import "./styles/index.scss";
import "./fonts/line-awesome-1.3.0/css/line-awesome.css";

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
          <App />
    </React.StrictMode>
  )
  return { html }
}
