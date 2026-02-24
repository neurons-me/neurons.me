import React from 'react';

const IconFooter = ({ openReadme }) => {
  return (
    <div className="icon-container" style={styles.iconContainer}>   
      {/* monads Link */}
      <a href="https://neurons.me" target="_blank" rel="noopener noreferrer" className="neurons-link" style={styles.neuronsLink}>
      <div className="readme-icon" onClick={openReadme} style={styles.readmeIcon}>
      ⊙
      </div>
      </a>
    </div>
  );
};

const styles = {
  iconContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    display: 'flex',
    gap: '10px',
    zIndex: 10,
  },
  readmeIcon: {
    backgroundColor: '#333',
    color: '#fff',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  neuronsLink: {
    backgroundColor: '#333',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  },
  neuronsIcon: {
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
};

export default IconFooter;
