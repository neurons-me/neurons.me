import MemoryIcon from "@mui/icons-material/Memory";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

export const MAIN_SIDEBAR_LINKS = {
 "About": [
            { label: "About", path: "/about", external: false },
            { label: "Who We Are?", path: "/WhoWeAre", external: false },
            { label: "Contact", path: "/contact", external: false }
          ],
         "All.This": [
          {
            label: "All.this",
            path: "/All.This/",
            icon: () => <img src="/media/all-this/webp/all.this.webp" alt="all.this" style={{ width: 20, height: 20 }} />
          },
          {
            label: ".me",
            path: "/this.me",
            icon: () => <img src="/media/all-this/webp/this.me.webp" alt="this.me" style={{ width: 20, height: 20 }} />
          },
          {
            label: ".wallet",
            path: "/this.wallet",
            icon: () => <img src="/media/all-this/webp/this.wallet.webp" alt="this.wallet" style={{ width: 20, height: 20 }} />
          },
          {
            label: ".GUI",
            path: "/this.GUI",
            icon: () => <img src="/media/all-this/this.GUI.png" alt="this.GUI" style={{ width: 20, height: 20 }} />
          },
          {
            label: ".env",
            path: "/this.env",
            icon: () => <img src="/media/all-this/webp/this.env.webp" alt="this.env" style={{ width: 20, height: 20 }} />
          }
          /*
          {
            label: "this.img",
            path: "/this.img",
            icon: () => <img src="/media/all-this/webp/this.img.webp" alt="this.img" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.audio",
            path: "/this.audio",
            icon: () => <img src="/media/all-this/webp/this.audio.webp" alt="this.audio" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.blockchain",
            path: "/this.blockchain",
            icon: () => <img src="/media/all-this/webp/this.blockchain.webp" alt="this.blockchain" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.pixel",
            path: "/this.pixel",
            icon: () => <img src="/media/all-this/webp/this.pixel.webp" alt="this.pixel" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.video",
            path: "/this.video",
            icon: () => <img src="/media/all-this/webp/this.video.webp" alt="this.video" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.DOM",
            path: "/this.DOM",
            icon: () => <img src="/media/all-this/webp/this.DOM.webp" alt="this.DOM" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.dictionaries",
            path: "/this.dictionaries",
            icon: () => <img src="/media/all-this/webp/this.dictionaries.webp" alt="this.dictionaries" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.text",
            path: "/this.text",
            icon: () => <img src="/media/all-this/webp/this.text.webp" alt="this.text" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.url",
            path: "/this.url",
            icon: () => <img src="/media/all-this/webp/this.url.webp" alt="this.url" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.dir",
            path: "/this.dir",
            icon: () => <img src="/media/all-this/webp/this.dir.webp" alt="this.dir" style={{ width: 20, height: 20 }} />
          }
            */
        ],
          "Apps": [
            { label: "Apps", path: "/apps", external: true },
            { label: "Netget", path: "/netget", external: true },
            { label: "Cleaker", path: "/cleaker", external: true }
          ],
         "BusinessHub": [
          { label: "Business-Hub", path: "/BusinessHub", external: false, icon: () => <BusinessCenterIcon htmlColor="#0bbca8" /> },
          { label: "AI Integration", path: "/ai-for-your-business", external: false, icon: () => <MemoryIcon htmlColor="#0bbca8" /> },
          { label: "ChatBots", path: "/chatbots", external: false, icon: () => <SmartToyIcon htmlColor="#66bb6a" /> },
          { label: "Software", path: "/business-web-development", external: false, icon: () => <CodeIcon htmlColor="#ff9800" /> },
          { label: "Cloud", path: "/business-cloud", external: false, icon: () => <CloudIcon htmlColor="#2196f3" /> },
          { label: "Marketing", path: "/marketing-services", external: false, icon: () => <VideoLibraryIcon htmlColor="#ec407a" /> },
          { label: "Search Engine Optimization", path: "/business-seo", external: false, icon: () => <TrendingUpIcon htmlColor="#fbc02d" /> },
          { label: "Blockchain", path: "/business-blockchain", external: false, icon: () => <CurrencyBitcoinIcon htmlColor="#f9a825" /> },
          { label: "E-commerce", path: "/business-ecommerce", external: false, icon: () => <ShoppingCartIcon htmlColor="#8bc34a" /> }
            ]
        };

export default MAIN_SIDEBAR_LINKS;
