import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import TermsAndConditions from './components/Neurons/TermsAndConditions'; // Import TermsAndConditions
import PrivacyPolicy from './components/Neurons/PrivacyPolicy'; // Import PrivacyPolicy
import Layout from './pages/Layout';
//Pages
//Introduction
import IntroductionHome from './pages/Home/Home';
import IntroductionAbout from './pages/Home/About';
import Contact from './pages/Home/Contact';
//OpenSource
import Ecosystem from './pages/OpenSource/Ecosystem';
import Contributing from './pages/OpenSource/Contributing';
import Roadmap from './pages/OpenSource/Roadmap';
//AllThis
import AllThis from './pages/AllThis/All.This';
import ThisMePage from './pages/AllThis/This.Me';
import ThisWallet from './pages/AllThis/This.Wallet';
import ThisImg from './pages/AllThis/This.Img';
import ThisAudio from './pages/AllThis/This.Audio';
import ThisBlockchain from './pages/AllThis/This.Blockchain';
import ThisPixel from './pages/AllThis/This.Pixel';
import ThisVideo from './pages/AllThis/This.Video';
import ThisDOM from './pages/AllThis/This.DOM';
import ThisDictionaries from './pages/AllThis/This.Dictionaries';
import ThisEnv from './pages/AllThis/This.Env';
import ThisGUI from './pages/AllThis/This.GUI';
import ThisText from './pages/AllThis/This.Text';
import ThisURL from './pages/AllThis/This.URL';
import ThisDir from './pages/AllThis/This.Dir';
//Business Solutions
import BusinessSolutions from './pages/BusinessSolutions/BusinessSolutions';
import BusinessAI from './pages/BusinessSolutions/AIIntegration';
import DataDriven from './pages/BusinessSolutions/DataDriven';
import MarketingSolutions from './pages/BusinessSolutions/MarketingSolutions';
import Branding from './pages/BusinessSolutions/Branding';
import SystemDevelopment from './pages/BusinessSolutions/SystemDevelopment';
import CyberSecurity from './pages/BusinessSolutions/CyberSecurity';

const App = () => {
    return (
    <Router>
        <Routes>
        <Route path="/" element={<Welcome />} />
        <Route element={<Layout />}>
        {/* Introduction */}
        <Route path="/home" element={<IntroductionHome />} />
        <Route path="/about" element={<IntroductionAbout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/business-solutions" element={<BusinessSolutions />} />
        <Route path="/open-source" element={<Ecosystem />} />
        {/* Open Source */}
        <Route path="/open-source/ecosystem" element={<Ecosystem />} /> 
        <Route path="/open-source/roadmap" element={<Roadmap />} />
        <Route path="/open-source/contributing" element={<Contributing />} /> 
        {/* All.This */}
        <Route path="/all-this" element={<AllThis />} />
        <Route path="/all-this/this-me" element={<ThisMePage />} />
        <Route path="/all-this/this-wallet" element={<ThisWallet />} />
        <Route path="/all-this/this-img" element={<ThisImg />} />
        <Route path="/all-this/this-audio" element={<ThisAudio />} />
        <Route path="/all-this/this-blockchain" element={<ThisBlockchain />} /> 
        <Route path="/all-this/this-pixel" element={<ThisPixel />} />
        <Route path="/all-this/this-video" element={<ThisVideo />} />
        <Route path="/all-this/this-DOM" element={<ThisDOM />} />
        <Route path="/all-this/this-dictionaries" element={<ThisDictionaries />} />
        <Route path="/all-this/this-env" element={<ThisEnv />} />
        <Route path="/all-this/this-GUI" element={<ThisGUI />} />  
        <Route path="/all-this/this-text" element={<ThisText />} />
        <Route path="/all-this/this-url" element={<ThisURL />} />
        <Route path="/all-this/this-dir" element={<ThisDir />} />
        
        {/* Business Solutions */}
        <Route path="/business" element={<BusinessSolutions />} />
        <Route path="/business/ai" element={<BusinessAI />} />
        <Route path="/business/data" element={<DataDriven/>} />
        <Route path="/business/marketing" element={<MarketingSolutions />} />
        <Route path="/business/branding" element={<Branding />} />
        <Route path="/business/system-development" element={<SystemDevelopment />} />
        <Route path="/business/cyber-security" element={<CyberSecurity />} />
        {/* Policies */}
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Puedes seguir con las demás rutas aquí... */}
        </Route>
        {/* Add more routes as needed */}
        </Routes>
    </Router>
    );
};

export default App;
