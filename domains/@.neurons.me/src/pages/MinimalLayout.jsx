// neurons.me/src/pages/MinimalLayout.jsx
import { GUI } from 'all.this';
import { MAIN_SIDEBAR_LINKS } from './MainSideBar';

export default function MinimalLayoutWrapper({ topic = "Home", contextDrawer, stickyOptions, footer }) {
  const minimalLayoutProps = {
    topic,
    rightContext: contextDrawer,
    stickyOptions,
    footer,
    config: {
      title: "neurons.me",
      logo: "/neurons.me.png",
      sideBarLinks: MAIN_SIDEBAR_LINKS,
    }
  };
  
  return (
    <GUI.MinimalLayout {...minimalLayoutProps} />
  );
}
