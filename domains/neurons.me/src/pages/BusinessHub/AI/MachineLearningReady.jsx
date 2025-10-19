import { Link } from 'react-router-dom';
import { FiCalendar,  FiMessageCircle,  FiDatabase, FiZap, FiActivity, FiTarget, FiSearch, FiMap, FiServer, FiUsers } from 'react-icons/fi';
import { Box, Typography } from '@mui/material';
import { GUI } from "all.this";
const {  TextTitle } = GUI;
import { Link as RouterLink } from 'react-router-dom';
import AIIntegrationsGrid from '../../../components/BusinessHub/AIIntegrationsGrid';

const MLReadyPage = () => {
  return (
  <div style={{ marginTop: '2rem',  }}>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <img src="media/ai/MachineLearningReady.png" alt="Smart Emails" width={610} />
      </div>
          <TextTitle
            title="Machine‑Learning Ready"
            h="3"
            subtitle="Capture • Govern • Stream • Activate"/>
      <div style={{ maxWidth: '900px', width: '100%', textAlign: 'left' }}>
        <section>
          <p>
            Being <strong>Machine‑Learning Ready</strong> means your business can capture every useful signal, keep it clean and governed, and stream it into
            features that power models in real time. At <strong>neurons.me</strong> we design the data lifecycle end‑to‑end so models have the context they need
            — continuously.
          </p>
        </section>

        <section>
          <h2>What “ML‑Ready” Means</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
              <FiDatabase style={{ marginTop: 2, color: 'rgb(0, 170, 150)' }} />
              <span><strong>Unified data foundation:</strong> clean schemas, lineage, and privacy controls so data is reliable and safe to use.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
              <FiZap style={{ marginTop: 2, color: '#7aa5ff' }} />
              <span><strong>Continuous ingestion & quality:</strong> batch + streaming with validations, dedupe, and PII handling.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
              <FiActivity style={{ marginTop: 2, color: '#ffd166' }} />
              <span><strong>Real‑time feature pipelines:</strong> transform raw events into features and publish them to a feature store.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <FiTarget style={{ marginTop: 2, color: '#e5396f' }} />
              <span><strong>MLOps & observability:</strong> versioning, drift detection, automated evals, and rollout/rollback discipline.</span>
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
                  <span><strong>Audit:</strong> map sources, events, owners, quality, and regulatory constraints.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                  <FiMap style={{ marginTop: 2, color: '#7aa5ff' }} />
                  <span><strong>Blueprint:</strong> feature store design, contracts, governance, and MLOps architecture.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                  <FiServer style={{ marginTop: 2, color: '#ffd166' }} />
                  <span><strong>Build:</strong> streaming/batch pipelines, feature store, model registry, and monitoring.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <FiUsers style={{ marginTop: 2, color: '#e5396f' }} />
                  <span><strong>Enable:</strong> playbooks, training, and handoff so your team runs the lifecycle.</span>
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
            We’ll assess your current state and shape a pragmatic roadmap to become <strong>ML‑ready</strong> — from capture and governance to streaming
            features and live activation.
          </p>
        </section>
      </div>
    </div>
  );
};

const backButtonStyle = {
  marginTop: '40px',
  display: 'inline-block',
  padding: '10px 20px',
  borderRadius: '5px',
  textDecoration: 'none',
  fontSize: '16px',
};

export default MLReadyPage;