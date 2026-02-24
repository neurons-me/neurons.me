import { Box, Typography, Grid, Button, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { GUI } from "all.this";
const { TextTitle } = GUI;
import {  FiFileText, FiMail, FiBarChart2, FiAlertCircle, FiEdit3, FiMoreHorizontal, FiBriefcase } from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';
import AIIntegrationsGrid from '../../../components/BusinessHub/AIIntegrationsGrid';

const PlugYourDataInPage = () => {
  return (
    <Box
      sx={{
        mx: 'auto',
        position: 'relative',
        pt: 2,
        px: 4,
        textAlign: 'center'
      }}
    >
      {/* Overlay blur background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backdropFilter: 'blur(8px)',
          zIndex: -1,
        }}
      />
      {/* Hero section with title, quote and CTA */}
        {/* background image */}

        {/* subtle gradient for readability */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
          }}
        />
<Box sx={{ position: 'relative', zIndex: 1, p: { xs: 3, md: 3}, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 1 }}>
    <p></p>
 <TextTitle
  title="Plug Your Data In →"
  subtitle="Connect your Business. Give your AI the context it needs."
  showDivider={false} 
/>
</Box>

{/* Two-column layout: CTA + copy (left) / connectors grid (right) */}
<Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mt: 3, mb: 3, flexWrap: 'wrap' }}>
{/* Left column */}
<Box sx={{ width: { xs: '100%', lg: '69%' }, textAlign: 'left' }}>
 <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.68 }}>
Make Your Business Fluent In Its Own Intelligence.
</Typography>
<Typography
    variant="body1"
    sx={{
      mb: 1,
      fontStyle: 'italic',
      color: '#00a38f',
      fontSize: '1.1rem'
      }}
    >
      Every workflow holds signals. Most get lost. The ones you capture today will shape tomorrow.
</Typography>
<Grid container spacing={2} sx={{ mt: 2, alignItems: 'flex-start' }}>
  <Grid item xs={12} lg={6} sx={{ textAlign: 'center' }}>
    <Box
      component="img"
      src="/media/ai/lost_data.png"
      alt="Lost Data"
      sx={{ display: 'block', width: '100%', maxWidth: { xs: 360, sm: 420, md: 520 }, height: 'auto', mx: 'auto' }}
    />
  </Grid>
  <Grid item xs={12} lg={6}>
  <Box component="ul" sx={{ m: 0, pl: '1.25rem', textAlign: 'left', listStyleType: 'none', paddingLeft: 0 }}>
       <TextTitle
                title="What’s Slipping Away:"
                h={5}
              />
  <li><FiAlertCircle style={{ color: '#008080', marginRight: '0.5rem', verticalAlign: 'middle' }} /> Client feedback that never gets shared.</li>
  <li><FiMail style={{ color: '#1E90FF', marginRight: '0.5rem', verticalAlign: 'middle' }} /> Project status updates.</li>
  <li><FiBarChart2 style={{ color: '#FFA500', marginRight: '0.5rem', verticalAlign: 'middle' }} /> Sales data forgotten.</li>
  <li><FiFileText style={{ color: '#800080', marginRight: '0.5rem', verticalAlign: 'middle' }} /> Undocumented workflows.</li>
  <li><FiEdit3 style={{ color: '#808080', marginRight: '0.5rem', verticalAlign: 'middle' }} /> Meeting notes never documented.</li>
  <li><FiMoreHorizontal style={{ color: '#708090', marginRight: '0.5rem', verticalAlign: 'middle' }} /> and more.</li>
</Box>

  </Grid>
</Grid>

    <Grid container spacing={2} sx={{ mt: 2, alignItems: 'flex-start' }}>
    <Grid item xs={12} lg={6} sx={{ order: { xs: 2, lg: 1 } }} >
              <TextTitle
                title="The Process Is Simple:"
                h={5}
              />
              <ol style={{ display: 'inline-block', marginTop: '0.25rem', marginBottom: 0 }}>
                <li><strong>Connect</strong> your sources — data, tools, knowledge.</li>
                <li><strong>Structure & secure</strong> them in one living system.</li>
                <li><strong>Enable</strong> your AI to act with full context.</li>
              </ol>
                <Typography variant="body2" sx={{ mt: 1.5, mb: 1 }}>
            The sooner you begin, the sooner the compounding starts.
          </Typography>
            </Grid>
            <Grid item xs={12} lg={6} sx={{ textAlign: 'center', order: { xs: 1, lg: 2 } }}>
              <Box
                component="img"
                src="/media/ai/ai_plug.png"
                alt="Lost Data"
                sx={{ display: 'block', width: '100%', maxWidth: { xs: 360, sm: 420, md: 560 }, height: 'auto', mx: 'auto', mt: { xs: 2, md: 0 } }}
              />


            </Grid>
          </Grid>
      <Divider sx={{ my: 3 }} />

          <TextTitle
            title="More on AI Integrations:"
            h="6"
            sx={{ mt: 2 }}
          />    
        </Box>

        {/* Right column */}
        <Box sx={{ width: { xs: '100%', lg: '50%' }, textAlign: 'right' }}>
          <AIIntegrationsGrid />
        </Box>
      </Box>

     
    </Box>
  );
};

export default PlugYourDataInPage;