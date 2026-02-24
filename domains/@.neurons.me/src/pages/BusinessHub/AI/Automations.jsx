import { FiCalendar,  FiMessageCircle,  FiDatabase, FiZap, FiActivity, FiTarget, FiSearch, FiMap, FiServer, FiUsers, FiBell, FiSend, FiCheckCircle, FiTrendingUp, FiShield } from 'react-icons/fi';
import { Box, Typography } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { GUI } from "all.this";
const {  TextTitle } = GUI;
import { Link as RouterLink } from 'react-router-dom';
import AIIntegrationsGrid from '../../../components/BusinessHub/AIIntegrationsGrid';

const AutomationsPage = () => {
  return (
  <div style={{ marginTop: '2rem',  }}>
      <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
        <AutorenewIcon sx={{ fontSize: 144, color: 'rgb(0, 170, 150)' }} />
      </div>
          <TextTitle
            title="Automations"
            h="3"
            subtitle="Detect • Decide • Act • Measure"
          />
      <div style={{ maxWidth: '900px', width: '100%', textAlign: 'left' }}>
        <section>
          <p>
            With the right <strong>data structure</strong>, your business can turn signals into action automatically. Automations listen to events,
            apply rules or models, and trigger the next best step — from sending emails and creating tickets to updating CRMs, scheduling tasks,
            or kicking off approvals. We help you wire the pipeline so things <em>just happen</em> reliably.
          </p>
        </section>

        <section>
          <h2>Where Automations Come From</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
              <FiDatabase style={{ marginTop: 2, color: 'rgb(0, 170, 150)' }} />
              <span><strong>Unified events & entities:</strong> one source of truth for customers, orders, tickets, and signals across tools.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
              <FiZap style={{ marginTop: 2, color: '#7aa5ff' }} />
              <span><strong>Clear triggers & rules:</strong> definitions like “when invoice is overdue 7 days” or “lead hits score 80”.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
              <FiActivity style={{ marginTop: 2, color: '#ffd166' }} />
              <span><strong>Workflow orchestration:</strong> queues, retries, and idempotency so actions run once — and succeed.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <FiTarget style={{ marginTop: 2, color: '#e5396f' }} />
              <span><strong>Guardrails & observability:</strong> audit logs, rate limits, fallbacks, and alerts to keep ops safe.</span>
            </li>
          </ul>
        </section>
        <section>
          <h2>Automation Examples</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
              <FiBell style={{ marginTop: 2, color: 'rgb(0, 170, 150)' }} />
              <span><strong>Proactive alerts:</strong> notify account owners when churn risk spikes or SLAs are at risk.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
              <FiSend style={{ marginTop: 2, color: '#7aa5ff' }} />
              <span><strong>Smart outreach:</strong> send the right email or message when a lead reaches intent thresholds.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
              <FiCheckCircle style={{ marginTop: 2, color: '#ffd166' }} />
              <span><strong>Approvals & routing:</strong> auto‑create tickets, assign owners, and collect approvals on changes.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
              <FiTrendingUp style={{ marginTop: 2, color: '#e5396f' }} />
              <span><strong>Revenue ops:</strong> keep CRM stages, forecasts, and billing status in sync across systems.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <FiShield style={{ marginTop: 2, color: '#00c49a' }} />
              <span><strong>Compliance & risk:</strong> red‑flag terms, PII usage, or policy breaches and trigger remediation.</span>
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
              <Typography variant="h6">More on AI Integrations:</Typography>
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
                  <span><strong>Audit:</strong> map processes, systems, owners, and event sources; identify quick‑win automations.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                  <FiMap style={{ marginTop: 2, color: '#7aa5ff' }} />
                  <span><strong>Blueprint:</strong> triggers, SLAs, data contracts, queues, and human‑in‑the‑loop steps.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                  <FiServer style={{ marginTop: 2, color: '#ffd166' }} />
                  <span><strong>Build:</strong> connectors, webhooks, workers, retries, and observability dashboards.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <FiUsers style={{ marginTop: 2, color: '#e5396f' }} />
                  <span><strong>Enable:</strong> playbooks, governance, and training; iterate with ROI tracking.</span>
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


export default AutomationsPage;