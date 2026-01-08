// Intentionally cleared per user request.
// Minimal stub to avoid route/import errors.
import { GUI } from "all.this";
const { TextTitle } = GUI;
import PeopleIcon from '@mui/icons-material/People';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FiCalendar,  FiMessageCircle } from 'react-icons/fi';
import AIIntegrationsGrid from '../../../components/BusinessHub/AIIntegrationsGrid';
import SearchIcon from '@mui/icons-material/Search';
export default function SmartEmails() {
  return (
    <div style={{ marginTop: '2rem',  }}>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <img src="media/ai/emails2.png" alt="Smart Emails" width={344} />
      </div>

      <div style={{ width: '100%' }}>
        <TextTitle
          title="Centralize & Connect"
          subtitle="Centralize all your company emails into a single inbox connected to an AI."
          showDivider={false}
        />
        <h2>Ask Anything</h2>
            <p>
              <strong>Consult your entire email history</strong> using natural language queries, making information easy to find and understand.
            </p>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, width: '100%' }}>
          <Box sx={{ flex: 1 }}>
            <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Example Queries</h3>
            <ul style={{ textAlign: 'left', paddingLeft: '1.2rem', listStyle: 'none', margin: 0 }}>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                <PeopleIcon style={{ verticalAlign: 'middle', marginRight: 8, fontSize: 20 }} />
                Summarize communication with a specific client.
              </li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                <ReportProblemIcon style={{ verticalAlign: 'middle', marginRight: 8, fontSize: 20 }} />
                Find repeated complaints or issues.
              </li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                <LocalShippingIcon style={{ verticalAlign: 'middle', marginRight: 8, fontSize: 20 }} />
                Identify suppliers with delayed responses.
              </li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                <SearchIcon style={{ verticalAlign: 'middle', marginRight: 8, fontSize: 20 }} />
                Extract mentions of important topics or keywords.
              </li>
            </ul>

            <section>
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  marginTop: '10px'
                }}
              >
                <h2>Let’s Talk</h2>
                <RouterLink
                  to="/ai-integration-call"
                  aria-label="Book Appointment"
                  title="Book Appointment"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 42,
                    marginTop: '16px',
                    height: 42,
                    borderRadius: 999,
                    border: '1px solid rgba(255,255,255,0.18)',
                    background: 'rgba(255,255,255,0.06)',
                    color: '#fff',
                    textDecoration: 'none'
                  }}
                >
                  <FiCalendar size={18} />
                </RouterLink>
    
                <RouterLink
                  to="https://wa.me/527291671525?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20your%20AI%20solutions"
                  aria-label="Chat With Us"
                  title="Chat With Us"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 42,
                    marginTop: '16px',
                    height: 42,
                    borderRadius: 999,
                    border: '1px solid rgba(255,255,255,0.18)',
                    background: 'rgba(255,255,255,0.06)',
                    color: '#fff',
                    textDecoration: 'none'
                  }}
                >
                  <FiMessageCircle size={18} />
                </RouterLink>
              </div>
              <p>
                We’ll assess your current state and take you to email centralization.
              </p>
            </section>
          </Box>
          <Box sx={{ flex: 1, width: { xs: '100%', md: '50%' }, textAlign: 'right', maxWidth: '400px', minWidth: '333px' }}>
            <AIIntegrationsGrid />
          </Box>
        </Box>
      </div>
    </div>
  );
}