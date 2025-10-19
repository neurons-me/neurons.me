import { Link as RouterLink } from "react-router-dom";
import { FiCalendar, FiMessageCircle } from "react-icons/fi";

const BookOrChatButtons = () => {
  return (
    <div style={{ position: 'sticky', top: 'calc(var(--nav-height, 42px) + 6px)', zIndex: 1300 }}>
      <div style={{ position: 'relative', width: '100%' }}>
        <div
          style={{
            margin: '0 auto',
            display: 'inline-flex',
            gap: '10px',
            padding: '6px 10px',
            borderRadius: '999px',
            background: 'rgba(24,26,28,0.65)',
            backdropFilter: 'blur(9px)',
            WebkitBackdropFilter: 'blur(9px)',
            border: '1px solid rgba(255,255,255,0.14)',
            boxShadow: '0 10px 28px rgba(0,0,0,0.35)',
            whiteSpace: 'nowrap'
          }}
        >
          <RouterLink
            to="/ai-integration-call"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 12px',
              borderRadius: 999,
              border: '1px solid rgba(0,0,0,0.0)',
              background: 'rgba(0, 170, 150, 0.12)',
              color: 'rgb(0, 170, 150)',
              fontWeight: 800,
              textDecoration: 'none',
              minWidth: 180,
              whiteSpace: 'nowrap',
              flexShrink: 0,
              justifyContent: 'center'
            }}
          >
            <FiCalendar style={{ marginRight: 6 }} /> Book Appointment
          </RouterLink>

          <RouterLink
            to="/chat"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 12px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'rgba(255,255,255,0.06)',
              color: '#fff',
              fontWeight: 800,
              textDecoration: 'none',
              minWidth: 160,
              whiteSpace: 'nowrap',
              flexShrink: 0,
              justifyContent: 'center'
            }}
          >
            <FiMessageCircle style={{ marginRight: 6 }} /> Chat With Us
          </RouterLink>
        </div>
      </div>
    </div>
  );
};

export default BookOrChatButtons;