import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './Components/ErrorBoundary';
import AppHeader from './Components/AppHeader';
import Homepage from './Components/Homepage';
import ProvideDetails from './Components/ProvideDetails';

export default function App() {
  return (
    <>
      <AppHeader />

      <ErrorBoundary>
        <main className="container my-4">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path=":plan" element={<ProvideDetails />} />
          </Routes>
        </main>
      </ErrorBoundary>
    </>
  );
}
