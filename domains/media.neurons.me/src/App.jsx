import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MediaPage from './pages/Media/MediaPage'; // Layout for most pages
import WelcomeMedia from './pages/WelcomeMedia/WelcomeMedia'; // Hero Section Page
import CompactMediaGrid from './components/MediaGrid/CompactMediaGrid'; // Media Grid
import TermsAndConditions from './components/Neurons/TermsAndConditions'; // Terms
import PrivacyPolicy from './components/Neurons/PrivacyPolicy'; // Privacy
import MediaProfile from "./components/MediaProfile/MediaProfile"; // Media Profile
import ConnectMedia from './components/Neurobot/ConnectMedia'; // Neurobot Component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* WelcomeMedia as a standalone page */}
        <Route path="/" element={<WelcomeMedia />} />

        {/* Media Grid wrapped with MediaPage */}
        <Route
          path="/media"
          element={
            <MediaPage>
              <CompactMediaGrid />
            </MediaPage>
          }
        />
        <Route
          path="/media/:name"
          element={
            <MediaPage>
              <MediaProfile />
            </MediaPage>
          }
        />
        
        {/* Neurobot Route */}
        <Route
          path="/neurobot"
          element={
            <MediaPage>
              <ConnectMedia />
            </MediaPage>
          }
        />

        {/* Terms and Conditions wrapped with MediaPage */}
        <Route
          path="/terms-and-conditions"
          element={
            <MediaPage>
              <TermsAndConditions />
            </MediaPage>
          }
        />

        {/* Privacy Policy wrapped with MediaPage */}
        <Route
          path="/privacy-policy"
          element={
            <MediaPage>
              <PrivacyPolicy />
            </MediaPage>
          }
        />

        {/* Redirect example */}
        <Route
          path="/docs"
          element={<Navigate to="https://docs.neurons.me" replace />}
        />
      </Routes>
    </Router>
  );
};

export default App;