// src/components/HeroIllustration.jsx
import React from 'react';
import { Box } from '@mui/material';

export default function HeroIllustration() {
  return (
    <Box
      component="div"
      sx={{
        width: '100%',
        height: 200,
        overflow: 'hidden',
        position: 'relative',
        background: 'transparent',
        mb: 4,
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '200%',
          height: '100%',
          animation: 'wave 8s linear infinite',
        }}
      >
        <path
          d="M0,100 C300,200 600,0 1200,100 L1200,200 L0,200 Z"
          fill="rgba(0,150,136,0.3)"
        />
        <path
          d="M0,120 C300,20 600,220 1200,120 L1200,200 L0,200 Z"
          fill="rgba(0,150,136,0.2)"
        />
      </Box>

      <Box
        component="svg"
        viewBox="0 0 200 200"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 80,
          height: 80,
          transform: 'translate(-50%,-50%)',
          animation: 'pulse 2s ease-in-out infinite',
        }}
      >
        <circle cx="100" cy="100" r="40" fill="rgba(255,255,255,0.6)" />
        <circle
          cx="100"
          cy="100"
          r="20"
          fill="rgba(0,150,136,0.8)"
        />
      </Box>

      {/* Keyframes */}
      <style>
        {`
          @keyframes wave {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes pulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50%      { transform: translate(-50%, -50%) scale(1.2); }
          }
        `}
      </style>
    </Box>
  );
}
