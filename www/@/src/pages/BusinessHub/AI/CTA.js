// CTA menu config for StickyOptions (Book Appointment + Chat)
// You can import and pass this as the `stickyOptions` prop to your layout wrapper.
import React from 'react';
import { FiCalendar, FiMessageCircle } from 'react-icons/fi';

const stickyOptions = {
  enabled: true,
  // Items shown in the pill (or as FABs on mobile if collapseToFabOnMobile = true)
  items: [
    {
      icon: React.createElement(FiCalendar),
      label: 'Book Appointment', // i18n key or plain text
      to: '/ai-integration-call',
      variant: 'primary',
      trackId: 'cta-book-appointment',
      ariaLabel: 'Book Appointment'
    },
    {
      icon: React.createElement(FiMessageCircle),
      label: 'Chat', // i18n key or plain text
      to: 'https://wa.me/527291671525?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20your%20AI%20solutions',
      variant: 'neutral',
      trackId: 'cta-chat-with-us',
      ariaLabel: 'Chat With Us'
    }
  ],

  // Where and how it sits under the navbar
  positioning: {
    mode: 'fixed',           // keep it pinned during scroll
    topOffset: "1.02rem",            // adds to var(--nav-height, 42px)
    align: 'center',         // 'center' | 'right'
    maxWidth: 820            // keeps the pill from growing too wide
  },

  // Behavior in different viewports and with drawers
  behavior: {
    hideOnScrollDown: false,      // never hide on scroll
    iconOnlyOnMobile: false,      // keep text visible on mobile
    mobileBreakpoint: 768,
    respectRightDrawer: true      // offsets if a right drawer is present (uses --right-drawer-width)
  },

  // Visual flavor; colors come from theme tokens when possible
  theme: {
    elevation: 28,   // drop shadow strength
    blur: 9,         // backdrop blur in px
    contrastMode: 'auto'
  },

  // Visibility filters (optional)
  visibility: {
    enabled: true,
    includeRoutes: [],  // e.g. ['/ai', '/business']
    excludeRoutes: []
  },

  // i18n behavior (labels will run through t() if useI18n = true)
  i18n: {
    useI18n: true
  }
};

export default stickyOptions;
export { stickyOptions };