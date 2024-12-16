import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot instead of ReactDOM.render
import { MantineProvider } from '@mantine/core';
import App from './App';
import './index.css';
import '@mantine/core/styles.css';

// Create the root element
const container = document.getElementById('root');
const root = createRoot(container);

// Render your app
root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <App />
  </MantineProvider>
);

