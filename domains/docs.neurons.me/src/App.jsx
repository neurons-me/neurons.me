import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DocsPage from './pages/Docs/DocsPage';
import AboutNeuronsMe from './components/Neurons/AboutNeurons'; // Import AboutNeuronsMe
import AllThis from './components/AllThis/AllThis';
import TermsAndConditions from './components/Neurons/TermsAndConditions'; // Import TermsAndConditions
import PrivacyPolicy from './components/Neurons/PrivacyPolicy'; // Import PrivacyPolicy


const App = () => {
    return (
        <Router>
        <Routes>
        <Route
          path="/"
          element={
            <DocsPage>
              <AboutNeuronsMe />
            </DocsPage>
          }
        />
        <Route
        path="/all.this"
        element={
            <DocsPage>
            <AllThis />
            </DocsPage>
         }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <DocsPage>
              <TermsAndConditions />
            </DocsPage>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <DocsPage>
              <PrivacyPolicy />
            </DocsPage>
          }
        />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
