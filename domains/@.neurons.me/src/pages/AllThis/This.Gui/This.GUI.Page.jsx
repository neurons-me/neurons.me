import { Box, Typography} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { GUI } from 'all.this';
const { TextQuote, LilBox, Gridme } = GUI; 
import { FiNavigation, FiBox, FiLayers, FiCode, FiMessageCircle, FiImage, FiList, FiType, FiGrid } from 'react-icons/fi';

const ThisGUIPage = () => {
  return (
    <Box sx={{ padding: 4, textAlign: 'center' }}>
      <Box
        component="img"
        src="/media/all-this/this.GUI.png"
        alt="this.gui"
        sx={{ maxWidth: '277px', marginBottom: 2 }}
      />

      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        This.GUI
      </Typography>
      <TextQuote>
        Build Interfaces Easily
      </TextQuote>
      <Typography variant="body1" sx={{ marginTop: '1rem' }}>
        Generate Dynamic User Interfaces.<br />
        A collection of ready-to-use declarative components that look good and just work.
      </Typography>
      
      <Gridme columns={3} columnGap=".68rem" rowGap=".68rem" sx={{ my: 4 }}>
        {[
          { label: 'AppBars', icon: <FiNavigation /> },
          { label: 'Buttons', icon: <FiBox /> },
          { label: 'Cards', icon: <FiLayers /> },
          { label: 'Code', icon: <FiCode /> },
          { label: 'Feedback', icon: <FiMessageCircle /> },
          { label: 'Media', icon: <FiImage /> },
          { label: 'Organization', icon: <FiList /> },
          { label: 'Text', icon: <FiType /> },
          { label: 'Layout', icon: <FiGrid /> },
        ].map((item, index) => (
          <LilBox
            key={index}
            label={item.label}
            icon={item.icon}
            href={`/this.GUI/${item.label.replace(/\s+/g, '')}`}
          />
        ))}
      </Gridme>
      <Typography variant="body2" sx={{ marginTop: '1.5rem', fontStyle: 'italic', color: '#aaa' }}>
        Developers: install via <code>npm i this.gui</code>
      </Typography>

      <Box sx={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
        <RouterLink to="/this.env" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
          ← this.wallet
        </RouterLink>
        <RouterLink to="/this.env" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
          this.env →
        </RouterLink>
      </Box>
    </Box>
  );
};

export default ThisGUIPage;