// neurons.me/src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
//import TermsAndConditions from './components/Neurons/TermsAndConditions'; // Import TermsAndConditions
//import PrivacyPolicy from './components/Neurons/PrivacyPolicy'; // Import PrivacyPolicy
import MinimalLayout from './pages/MinimalLayout';
import FOOTER_CONFIG from './pages/neuronsFooter';
import InstallMe from './pages/Install/InstallMe';
//Pages
//About
import AboutPage from './pages/About/AboutPage';
import WhoWeArePage from './pages/About/WhoWeArePage';
import CodeBreakersPage from './pages/About/CodeBreakersPage';
import ContactPage from './pages/About/ContactPage';
//Apps
import AppsPage from './pages/Apps/AppsPage';
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
//THIS.GUI
import ThisGUIPage from './pages/AllThis/This.Gui/This.GUI.Page';
import GUI_Drawer_Data from './pages/AllThis/This.Gui/GUI_Drawer_Data';
//THI.GUI APPBARS
import AppBarsPage from './pages/AllThis/This.Gui/pages/AppBars/AppBarsPage';
import FooterPage from './pages/AllThis/This.Gui/pages/AppBars/FooterPage';
import NavBarPage from './pages/AllThis/This.Gui/pages/AppBars/NavBarPage';
import RightContextDrawerPage from './pages/AllThis/This.Gui/pages/AppBars/RightContextDrawerPage';
import TopAndSideBarPage from './pages/AllThis/This.Gui/pages/AppBars/TopAndSideBarPage';
import StickyOptionsPage from './pages/AllThis/This.Gui/pages/AppBars/StickyOptionsPage';
//This.Gui - Buttons
import ButtonsPage from './pages/AllThis/This.Gui/pages/Buttons/ButtonsPage';
//This.Gui - Code
import CodePage from './pages/AllThis/This.Gui/pages/Code/CodePage';
import CodeBlockPage from './pages/AllThis/This.Gui/pages/Code/CodeBlockPage';
//This.Gui - Cards
import CardsPage from './pages/AllThis/This.Gui/pages/Cards/CardsPage';
import ModuleCardPage from './pages/AllThis/This.Gui/pages/Cards/ModuleCardPage';
import LilBoxPage from './pages/AllThis/This.Gui/pages/Cards/LilBoxPage';
import GridmePage from './pages/AllThis/This.Gui/pages/Cards/GridmePage';
//This.GUI - feedback
import FeedbackPage from './pages/AllThis/This.Gui/pages/Feedback/FeedbackPage';
import CalloutPage from './pages/AllThis/This.Gui/pages/Feedback/CalloutPage';
//This.Gui - Layout
import ContainersPage from './pages/AllThis/This.Gui/pages/Layout/ContainersPage';
import GridPage from './pages/AllThis/This.Gui/pages/Layout/GridPage';
import PageDividerPage from './pages/AllThis/This.Gui/pages/Layout/PageDividerPage';
import SectionPage from './pages/AllThis/This.Gui/pages/Layout/SectionPage';
import SectionHeaderPage from './pages/AllThis/This.Gui/pages/Layout/SectionHeaderPage';
import VideoEmbedPage from './pages/AllThis/This.Gui/pages/Media/VideoEmbedPage';
import ImgPage from './pages/AllThis/This.Gui/pages/Media/ImgPage';
//This.Gui - Organization
import TableOfContentsPage from './pages/AllThis/This.Gui/pages/Organization/TableOfContentsPage';
import TabsPage from './pages/AllThis/This.Gui/pages/Organization/TabsPage';
//This.Gui - Text
import TextListPage from './pages/AllThis/This.Gui/pages/Text/TextListPage'; 
import TextParagraphPage from './pages/AllThis/This.Gui/pages/Text/TextParagraphPage';
import TextTitlePage from './pages/AllThis/This.Gui/pages/Text/TextTitlePage';
import TextQuotesPage from './pages/AllThis/This.Gui/pages/Text/TextQuotePage';
//this.text
import ThisText from './pages/AllThis/This.Text';
import ThisURL from './pages/AllThis/This.URL';
import ThisDir from './pages/AllThis/This.Dir';
//Business Hub
import BusinessHubPage from './pages/BusinessHub/BusinessHubPage';
import ProjectCall from './pages/BusinessHub/Project_Call';
//Business Hub - AI Integrations
import AI_Drawer_Data from './pages/BusinessHub/AI/AI_Drawer_Data';
import stickyOptions from './pages/BusinessHub/AI/CTA';
import BusinessAI from './pages/BusinessHub/AI/AIIntegration';
import AIIntegrationCall from './pages/BusinessHub/AI/AI_Integration_Call';
import DataDriven from './pages/BusinessHub/AI/DataDriven';
import SmartEmails from './pages/BusinessHub/AI/SmartEmails';
import PlugYourDataInPage from './pages/BusinessHub/AI/Plug_Your_Data_In';
import EmbracingML from './pages/BusinessHub/AI/EmbracingML';
import AutomationsPage from './pages/BusinessHub/AI/Automations';
import CostReductions from './pages/BusinessHub/AI/CostReductions';
import DataAnalyticsPage from './pages/BusinessHub/AI/DataAnalytics';
import MLReadyPage from './pages/BusinessHub/AI/MachineLearningReady';
//Buiness Hub - ChatBots
import ChatBots_Drawer_Data from './pages/BusinessHub/ChatBots/ChatBots_Drawer_Data';
import CTABotsOptions from './pages/BusinessHub/AI/CTA';
import ChatBotsPage from './pages/BusinessHub/ChatBots/ChatBotsPage';
import BotExamplePage from './pages/BusinessHub/ChatBots/BotExamplePage';
//Business Hub - Software
import SystemDevelopment from './pages/BusinessHub/Software/SystemDevelopment';
import CyberSecurity from './pages/BusinessHub/Software/CyberSecurity';
//Business Hub - Cloud
//Business Hub - Marketing
import MarketingPage from './pages/BusinessHub/Marketing/MarketingPage';
import Branding from './pages/BusinessHub/Marketing/Branding';
//Business Hub - SEO
//Business Hub - Blockchain
//Business Hub - E-Commerce
//Me Protocol
import MeProtocolRFC from './pages/Me-Protocol/Me-Protocol-RFC';
import WhitePaper from './pages/Me-Protocol/WhitePaper';
const App = () => {
    return (
    <Router>
        <Routes>
        <Route path="/" element={<Welcome />} />
        <Route element={<MinimalLayout topic="About" footer={FOOTER_CONFIG} />}>
          {/* Introduction */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/WhoWeAre" element={<WhoWeArePage />} />
          <Route path="/c0debreakers" element={<CodeBreakersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/open-source" element={<Ecosystem />} />
          {/* Apps */}
          <Route path="/apps" element={<AppsPage />} />
          {/* Open Source */}
          <Route path="/open-source/ecosystem" element={<Ecosystem />} /> 
          <Route path="/open-source/roadmap" element={<Roadmap />} />
          <Route path="/open-source/contributing" element={<Contributing />} /> 
        </Route>
        <Route element={<MinimalLayout topic="All.This" />}>
          {/* All.This */}
          <Route path="/All.This" element={<AllThis />} />
          <Route path="/this.me" element={<ThisMePage />} />
          <Route path="/this.wallet" element={<ThisWallet />} />
          <Route path="/this.img" element={<ThisImg />} />
          <Route path="/this.audio" element={<ThisAudio />} />
          <Route path="/this.blockchain" element={<ThisBlockchain />} /> 
          <Route path="/this.pixel" element={<ThisPixel />} />
          <Route path="/this.video" element={<ThisVideo />} />
          <Route path="/this.DOM" element={<ThisDOM />} />
          <Route path="/this.dictionaries" element={<ThisDictionaries />} />
          <Route path="/this.env" element={<ThisEnv />} />
          <Route path="/this.text" element={<ThisText />} />
          <Route path="/this.url" element={<ThisURL />} />
          <Route path="/this.dir" element={<ThisDir />} />
        </Route>
        {/* THIS-GUI */}
        <Route
          element={<MinimalLayout topic="All.This" contextDrawer={GUI_Drawer_Data} />}
        >
          <Route path="/this.GUI" element={<ThisGUIPage />} />
           {/* THIS-GUI AppBars */}
          <Route path="/this.GUI/AppBars" element={<AppBarsPage />} />
          <Route path="/this.GUI/TopAndSideBar" element={<TopAndSideBarPage />} />
          <Route path="/this.GUI/Footer" element={<FooterPage />} />
          <Route path="/this.GUI/NavBar" element={<NavBarPage />} />
          <Route path="/this.GUI/RightContextDrawer" element={<RightContextDrawerPage />} />
          <Route path="/this.GUI/StickyOptions" element={<StickyOptionsPage />} />
          {/* THIS-GUI Buttons */}
          <Route path="/this.GUI/Buttons" element={<ButtonsPage />} />
          {/* THIS-GUI Cards */}
          <Route path="/this.GUI/Cards" element={<CardsPage />} />
          <Route path="/this.GUI/ModuleCard" element={<ModuleCardPage />} />
          <Route path="/this.GUI/LilBox" element={<LilBoxPage />} />
          <Route path="/this.GUI/Gridme" element={<GridmePage />} />
          {/* THIS-GUI Code */}
          <Route path="/this.GUI/Code" element={<CodePage />} />
          <Route path="/this.GUI/CodeBlock" element={<CodeBlockPage />} />
          {/* THIS-GUI Feedback */}
          <Route path="/this.GUI/Feedback" element={<FeedbackPage />} />
          <Route path="/this.GUI/Callout" element={<CalloutPage />} /> 
          {/* THIS-GUI Layout */}
           <Route path="/this.GUI/Grid" element={<GridPage />} />
          <Route path="/this.GUI/Containers" element={<ContainersPage />} />
          <Route path="/this.GUI/PageDivider" element={<PageDividerPage />} />
          <Route path="/this.GUI/Section" element={<SectionPage />} />
           <Route path="/this.GUI/SectionHeader" element={<SectionHeaderPage />} />
          {/* THIS-GUI Media */}
          <Route path="/this.GUI/VideoEmbed" element={<VideoEmbedPage />} />
          <Route path="/this.GUI/Img" element={<ImgPage />} />
          {/* THIS-GUI Organization*/}
          <Route path="/this.GUI/TableOfContents" element={<TableOfContentsPage />} />
          <Route path="/this.GUI/Tabs" element={<TabsPage />} />
          {/* THIS-GUI Text */}
          <Route path="/this.GUI/TextList" element={<TextListPage />} />
          <Route path="/this.GUI/TextParagraph" element={<TextParagraphPage />} />
          <Route path="/this.GUI/TextTitle" element={<TextTitlePage />} />
          <Route path="/this.GUI/TextQuote" element={<TextQuotesPage />} />
          {/* THIS-GUI Theme Selector */}
        </Route>

          {/* Business Solutions */}
          {/*Calls*/}
          <Route element={<MinimalLayout topic="BusinessHub"/>}>
          <Route path="/ai-integration-call" element={<AIIntegrationCall />} />
          </Route>
          {/*AI Integrations*/}
          <Route element={<MinimalLayout topic="BusinessHub" contextDrawer={AI_Drawer_Data} stickyOptions={stickyOptions} />}>
          <Route path="/ai-for-your-business" element={<BusinessAI />} /> 
          <Route path="/data-driven" element={<DataDriven />} />
          <Route path="/machine-learning-ready" element={<MLReadyPage />} />
          <Route path="/plug-your-data" element={ <PlugYourDataInPage />} />
          <Route path="/smart-emails" element={<SmartEmails />} />
          <Route path="/embracing-machine-learning" element={<EmbracingML />} />
          <Route path="/automations" element={<AutomationsPage />} />
          <Route path="/cost-reductions" element={<CostReductions />} />
          <Route path="/data-analytics" element={<DataAnalyticsPage />} />
          </Route>
          {/*Chatbots*/}
          <Route element={<MinimalLayout topic="BusinessHub" contextDrawer={ChatBots_Drawer_Data} stickyOptions={CTABotsOptions} />}>
          <Route path="/chatbots" element={<ChatBotsPage />} />
          </Route>
          <Route element={<MinimalLayout topic="BusinessHub" contextDrawer={ChatBots_Drawer_Data} />}>
          <Route path="/bot-example" element={<BotExamplePage />} />
          </Route>
  
          <Route element={<MinimalLayout topic="BusinessHub"/>}>
          <Route path="/BusinessHub" element={<BusinessHubPage />} />
          <Route path="/business-project-call" element={<ProjectCall />} />
          <Route path="/marketing-services" element={<MarketingPage />} />
          <Route path="/business-branding" element={<Branding />} />
          <Route path="/business-system-development" element={<SystemDevelopment />} />
          <Route path="/business-cyber-security" element={<CyberSecurity />} />
        </Route>
        <Route element={<MinimalLayout topic="Me Protocol" />}>
          {/* Me Protocol */}
          {/* Policies 
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />*/}
          <Route path="/me-protocol-rfc" element={<MeProtocolRFC />} />
          <Route path="/me-protocol-whitepaper" element={<WhitePaper />} />
          {/* Puedes seguir con las demás rutas aquí... */}
          <Route path="/install-me" element={<InstallMe />} />
        </Route>
        {/* Add more routes as needed */}
        </Routes>
    </Router>
    );
};

export default App;
