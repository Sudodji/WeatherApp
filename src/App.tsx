import React from 'react';
import {
  BrowserRouter as Router, Navigate, useRoutes,
} from 'react-router-dom';
import './App.css';
import InputPlace from './components/InputPlace';
import WeatherPage from './components/WeatherPage';

/* export const App: React.FC = () => (
  <Routes>
    <Route
      path="/"
      element={ <InputPlace /> }
    />
    <Route path="/weather/:cityId" element={ <WeatherPage /> } />
  </Routes>
); */

const App: React.FC = () => useRoutes([
  { path: '/', element: <Navigate to="/weather" /> },
  { path: '/weather', element: <InputPlace /> },
  { path: '/weather/:cityId', element: <WeatherPage /> },
  /*  { path: '/:cityId', element: <WeatherPage /> }, */
]);

export const AppWrapper = () => (
  <Router>
    <App />
  </Router>
)
