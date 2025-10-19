import { Box, Typography } from '@mui/material';
// MUI Icons
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BoltIcon from '@mui/icons-material/Bolt';
import InsightsIcon from '@mui/icons-material/Insights';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';

// This.GUI components (your design system)
import { GUI } from "all.this";
const {  TextTitle, Section, Gridme, LilBox} = GUI;

export default function ChatBotsPage() {
  return (
    <>
      {/* Hero Icon */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1, mt: 7 }}>
        <SmartToyIcon sx={{ mt: 5, fontSize: 120, color: (theme) => theme.palette.link?.main || 'rgb(0,170,150)' }} />
      </Box>

      {/* Title */}
      <TextTitle
        title="Chatbots"
        h="3"
        subtitle="Understand • Automate • Delight"
      />

      {/* Intro */}
      <Section title="Overview">
        <Typography variant="body1">
          Modern chatbots do more than answer FAQs: they connect to your data, understand intent,
          and take action. With the right foundations—centralized knowledge, secure connectors,
          guardrails, and analytics—they resolve issues faster, qualify leads, and free teams to
          focus on high‑value work.
        </Typography>
      </Section>

      {/* What they do / Examples */}
      <Section title="What They Do">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
          {/* Left: Capabilities */}
          <Box sx={{ flex: 1, minWidth: 280 }}>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                <InsightsIcon fontSize="small" sx={{ mt: '2px', color: 'rgb(0,170,150)' }} />
                <span><strong>Understands intent:</strong> classifies requests, extracts entities, and routes accurately.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                <BuildCircleOutlinedIcon fontSize="small" sx={{ mt: '2px', color: '#7aa5ff' }} />
                <span><strong>Takes action:</strong> creates tickets, updates CRMs, schedules meetings, triggers workflows.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                <ShieldOutlinedIcon fontSize="small" sx={{ mt: '2px', color: '#ffd166' }} />
                <span><strong>Governed & safe:</strong> permissions, redaction, and audit logs baked in.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <BoltIcon fontSize="small" sx={{ mt: '2px', color: '#e5396f' }} />
                <span><strong>Learns over time:</strong> feedback loops improve answers and flows continuously.</span>
              </li>
            </Box>
          </Box>

          {/* Right: Example bots as cards */}
          <Box sx={{ flex: 1, minWidth: 280 }}>
            <Gridme columns={2} columnGap=".6rem" rowGap=".6rem">
              {[
                { label: 'Try The Bots!', icon:  <SmartToyIcon sx={{ fontSize: 55, color: (theme) => theme.palette.link?.main || 'rgba(160, 166, 165, 1)' }} />, href: '/bot-example' },
              ].map((item, idx) => (
                <LilBox key={idx} label={item.label} icon={item.icon} href={item.href} sx={{ p: 1.5 }} />
              ))}
            </Gridme>
          </Box>
        </Box>
      </Section>
    </>
  );
}