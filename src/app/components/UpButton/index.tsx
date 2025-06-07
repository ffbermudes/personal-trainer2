'use client';
import React from 'react';
import RippleButton from '../animata/button/ripple-button';

const UpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="fixed bottom-4 left-4 z-50"
      style={{ fontSize: '24px', transform: 'rotate(-90deg)' }}
    >
      <RippleButton onClick={() => scrollToTop()}>
        <span>➤</span>
      </RippleButton>
    </div>
  );
};

export default UpButton;
