import React from 'react';
import {
  BrowserRouter as Router, Navigate, useRoutes,
} from 'react-router-dom';
import InputPlace from './components/InputPlace';
import WeatherPage from './components/WeatherPage';

const App: React.FC = () => useRoutes([
  { path: '/', element: <Navigate to="/weather" /> },
  { path: '/weather', element: <InputPlace /> },
  { path: '/weather/:cityId', element: <WeatherPage /> },
]);

export const AppWrapper = () => (
  <Router>
    <App />
  </Router>
)
