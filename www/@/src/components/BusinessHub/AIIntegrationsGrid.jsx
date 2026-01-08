import { GUI } from "all.this";
const { Gridme, LilBox } = GUI;
import { FiBarChart2, FiMail, FiCpu, FiZap, FiDollarSign, FiDatabase, FiLayers, FiBriefcase } from "react-icons/fi";
import PowerIcon from "@mui/icons-material/Power";

const AIIntegrationsGrid = () => {
  const items = [
    { label: 'Data-Driven Businesses', icon: <FiBarChart2 style={{ color: '#7aa5ff' }} />, href: '/data-driven' },
    { label: 'Smart Emails',           icon: <FiMail style={{ color: '#34c759' }} />,      href: '/smart-emails' },
    { label: 'Plug Your Data In',      icon: <PowerIcon style={{ color: '#ff9800' }} />,   href: '/plug-your-data' },
    { label: 'Automations',            icon: <FiZap style={{ color: '#ffd166' }} />,       href: '/automations' },
    { label: 'Cost Reduction',         icon: <FiDollarSign style={{ color: '#4caf50' }} />,href: '/business/system-development' },
    { label: 'Data Analytics',         icon: <FiDatabase style={{ color: '#8afff2' }} />,  href: '/data-analytics' },
    { label: 'ML Ready',               icon: <FiCpu style={{ color: '#d1d1d1ff' }} />,  href: '/machine-learning-ready' },
    { label: 'Business Hub',           icon: <FiBriefcase style={{ color: '#7b6351ff' }} />, href: '/BusinessHub' },
    { label: '', href: '/' },

  ];

  return (
    <Gridme columns={3} columnGap=".5rem" rowGap=".5rem" sx={{ my: 0 }}>
      {items.map((item, index) => (
        <LilBox key={index} label={item.label} icon={item.icon} href={item.href} sx={{ p: 1.5 }} />
      ))}
    </Gridme>
  );
};

export default AIIntegrationsGrid;
