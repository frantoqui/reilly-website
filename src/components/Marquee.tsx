'use client';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const items = [
  'David Zwirner',
  '✦',
  'Casa MB',
  '✦',
  'M+B',
  '✦',
  'Domo Damo',
  '✦',
  'Content Strategy',
  '✦',
  'Social Media',
  '✦',
  'Newsletters',
  '✦',
  'Web Development',
  '✦',
  'Art Marketing',
  '✦',
];

const duplicated = [...items, ...items];

export default function Marquee() {
  return (
    <Box
      sx={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        py: 2,
        overflow: 'hidden',
        backgroundColor: '#040404',
      }}
    >
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', width: 'max-content' }}
      >
        {duplicated.map((item, i) => (
          <Typography
            key={i}
            component="span"
            sx={{
              fontSize: '0.65rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: item === '✦' ? '#E8192C' : 'rgba(255,255,255,0.25)',
              fontWeight: item === '✦' ? 400 : 600,
              mx: '20px',
              whiteSpace: 'nowrap',
            }}
          >
            {item}
          </Typography>
        ))}
      </motion.div>
    </Box>
  );
}