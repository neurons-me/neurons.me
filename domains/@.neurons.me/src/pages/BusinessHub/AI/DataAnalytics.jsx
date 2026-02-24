import { FiCalendar,  FiMessageCircle,  FiDatabase, FiZap, FiActivity, FiTarget, FiSearch, FiMap, FiServer, FiUsers } from 'react-icons/fi';
import { Box, Typography } from '@mui/material';
import InsightsIcon from '@mui/icons-material/Insights';
import { GUI } from "all.this";
const {  TextTitle } = GUI;
import { Link as RouterLink } from 'react-router-dom';
import AIIntegrationsGrid from '../../../components/BusinessHub/AIIntegrationsGrid';

const DataAnalyticsPage = () => {
  return (
  <div style={{ marginTop: '2rem',  }}>
      <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
        <InsightsIcon color="primary" sx={{ fontSize: 120 }} />
      </div>
          <TextTitle
            title="Data Analytics"
            h="3"
            subtitle="Capture • Analyze • Insight"
          />
      <div style={{ maxWidth: '900px', width: '100%', textAlign: 'left' }}>
        <section>
          <p>
            <strong>Data Analytics</strong> is about turning raw information into actionable insight. 
            When all signals across the business are captured and structured, entropy is reduced — no data is lost, 
            and every event strengthens your intelligence. The outcome is better decisions, faster responses, 
            and opportunities revealed that were invisible before.
          </p>
        </section>

        <section>
          <h2>Why Data Analytics Matters</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
              <FiDatabase style={{ marginTop: 2, color: 'rgb(0, 170, 150)' }} />
              <span><strong>Unified data:</strong> consolidate every source so context is never missing.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
              <FiZap style={{ marginTop: 2, color: '#7aa5ff' }} />
              <span><strong>Faster insights:</strong> real‑time queries reveal what’s happening as it happens.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
              <FiActivity style={{ marginTop: 2, color: '#ffd166' }} />
              <span><strong>Accuracy & trust:</strong> cleaning, dedupe, and lineage ensure reliability.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <FiTarget style={{ marginTop: 2, color: '#e5396f' }} />
              <span><strong>Opportunity discovery:</strong> spot hidden trends, anomalies, and growth levers.</span>
            </li>
          </ul>
        </section>
        <section>
          <Box
            sx={{
              display: 'flex',
              flexWrap: { xs: 'wrap', lg: 'nowrap' },
              gap: '1rem',
              alignItems: 'flex-start'
            }}
          >
            {/* Columna izquierda */}
            <Box sx={{
              width: { xs: '100%', lg: '50%' },
              flex: { lg: '0 0 50%', xs: '1 1 100%' },
              minWidth: 0,
              order: { xs: 2, lg: 1 },
              // When stacked (xs–md), keep grid from growing too wide and center it
              maxWidth: { xs: 560, sm: 640, lg: 'none' },
              mx: { xs: 'auto', lg: 0 }
            }}>
              <p></p>
              <Typography variant="h6">More AI Integrations:</Typography>
              <p>  </p>
              <p> </p>
              <AIIntegrationsGrid />
            </Box>
            {/* Columna derecha */}
            <Box sx={{
              width: { xs: '100%', lg: '50%' },
              flex: { lg: '0 0 50%', xs: '1 1 100%' },
              minWidth: 0,
              marginLeft: 3,
              textAlign: 'left',
              order: { xs: 1, lg: 2 }
            }}>
              <h2>How We Help</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                  <FiSearch style={{ marginTop: 2, color: 'rgb(0, 170, 150)' }} />
                  <span><strong>Assess:</strong> audit your current data landscape and entropy points.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                  <FiMap style={{ marginTop: 2, color: '#7aa5ff' }} />
                  <span><strong>Design:</strong> schemas, pipelines, and governance to unlock analytics.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                  <FiServer style={{ marginTop: 2, color: '#ffd166' }} />
                  <span><strong>Build:</strong> connectors, warehouses, dashboards, and real‑time feeds.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <FiUsers style={{ marginTop: 2, color: '#e5396f' }} />
                  <span><strong>Empower:</strong> train teams and deliver insights where they act.</span>
                </li>
              </ul>
            </Box>
          </Box>
        </section>
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
            We’ll assess your current state and design a roadmap to unlock <strong>powerful insights</strong> — reducing entropy and making every piece of data fuel your growth.
          </p>
        </section>
      </div>
    </div>
  );
};
export default DataAnalyticsPage;