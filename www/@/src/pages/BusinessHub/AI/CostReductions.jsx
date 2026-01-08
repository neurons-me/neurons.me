import { FiCalendar,  FiMessageCircle,  FiDatabase, FiZap, FiActivity, FiTarget, FiSearch, FiMap, FiServer, FiUsers } from 'react-icons/fi';
import { Box, Typography } from '@mui/material';
import { GUI } from "all.this";
const {  TextTitle } = GUI;
import { Link as RouterLink } from 'react-router-dom';
import AIIntegrationsGrid from '../../../components/BusinessHub/AIIntegrationsGrid';

const CostReductionsPage = () => {
  return (
  <div style={{ marginTop: '2rem',  }}>
      <div style={{ textAlign: 'right', marginBottom: '.1rem' }}>
        <img src="media/ai/cost_reductions.png" alt="Smart Emails" width={377} />
      </div>
          <TextTitle
            title="Cost Reductions"
            h="3"
            subtitle="Automate • Optimize • Scale"
          />
      <div style={{ maxWidth: '900px', width: '100%', textAlign: 'left' }}>
        <section>
          <p>
            The purpose of going <strong>automated</strong> and <strong>algorithmic</strong> is simple: <strong>increase profit and reduce costs</strong>. When repeatable
            work is handled by workflows and models, teams focus on higher‑value tasks, errors drop, cycle times shrink, and margin improves.
            We design automations that turn signals into actions — reliably and measurably.
          </p>
        </section>

        <section>
          <h2>Go Algorithmic</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
              <FiDatabase style={{ marginTop: 2, color: 'rgb(0, 170, 150)' }} />
              <span><strong>Lower operating costs:</strong> consolidate data and remove manual lookups, rework, and context switching.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
              <FiZap style={{ marginTop: 2, color: '#7aa5ff' }} />
              <span><strong>Faster cycle times:</strong> triggers + rules/models move work instantly — quotes, invoices, approvals, updates.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
              <FiActivity style={{ marginTop: 2, color: '#ffd166' }} />
              <span><strong>Fewer errors & leakage:</strong> validations, dedupe, and guardrails prevent costly mistakes and delays.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <FiTarget style={{ marginTop: 2, color: '#e5396f' }} />
              <span><strong>Revenue lift:</strong> next‑best‑action on leads, upsell timing, save offers on churn risk — at scale.</span>
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
                  <span><strong>Audit:</strong> baseline costs, SLAs, error rates, and map processes worth automating.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                  <FiMap style={{ marginTop: 2, color: '#7aa5ff' }} />
                  <span><strong>Blueprint:</strong> triggers, data contracts, owners, and an ROI model with phased milestones.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                  <FiServer style={{ marginTop: 2, color: '#ffd166' }} />
                  <span><strong>Build:</strong> connectors, workers, retries, and monitoring tied to savings and revenue KPIs.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <FiUsers style={{ marginTop: 2, color: '#e5396f' }} />
                  <span><strong>Enable:</strong> playbooks, training, and governance so the team scales wins safely.</span>
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
            We’ll assess your current state and shape a pragmatic roadmap to <strong>increase profit and reduce costs</strong> with automation — from quick wins to
            durable compounding gains.
          </p>
  
        </section>


      </div>
    </div>
  );
};

export default CostReductionsPage;