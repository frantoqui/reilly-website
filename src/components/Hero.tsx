'use client';
import { useRef } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const lineVariants: Variants = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <Box
      ref={ref}
      id="hero"
      sx={{
        position: 'relative',
        height: '100svh',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        pb: { xs: '80px', md: '80px' },
        px: { xs: '24px', sm: '40px', md: '60px' },
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <motion.div style={{ y, position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: { xs: '60%', md: '40%' },
            height: '60%',
            background: 'radial-gradient(ellipse at top right, rgba(232,25,44,0.06) 0%, transparent 70%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            left: '10%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(232,25,44,0.03) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      <motion.div style={{ opacity }}>
        {/* Name */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Box
            sx={{
              fontSize: { xs: 'clamp(4rem, 18vw, 10rem)', md: 'clamp(5rem, 13vw, 13rem)' },
              fontWeight: 800,
              lineHeight: 0.85,
              letterSpacing: '-0.05em',
              textTransform: 'uppercase',
              color: 'white',
              mb: { xs: 4, md: 5 },
            }}
          >
            {['REILLY', 'THOMSON'].map((word) => (
              <Box key={word} sx={{ overflow: 'hidden', display: 'block' }}>
                <motion.div variants={lineVariants}>{word}</motion.div>
              </Box>
            ))}
          </Box>

          {/* Role + line */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 5 }}>
            <Box sx={{ width: 32, height: '1px', backgroundColor: '#E8192C', flexShrink: 0 }} />
            <motion.div variants={fadeUp}>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.45)',
                  fontSize: { xs: '0.7rem', md: '0.8rem' },
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                Project{' '}
                <Box component="span" sx={{ color: '#E8192C', fontWeight: 700 }}>
                  &amp;{' '}
                </Box>
                Marketing Coordinator
              </Typography>
            </motion.div>
          </Box>

          {/* Client pills */}
          <motion.div variants={fadeUp}>
            <Stack direction="row" sx={{ flexWrap: 'wrap', gap: '8px 20px' }}>
              {['David Zwirner', 'Casa MB', 'M+B', 'Domo Damo'].map((client) => (
                <Typography
                  key={client}
                  sx={{
                    color: 'rgba(255,255,255,0.25)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    paddingBottom: '2px',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {client}
                </Typography>
              ))}
            </Stack>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: 36,
          right: 40,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <Typography
          sx={{
            color: 'rgba(255,255,255,0.2)',
            fontSize: '0.6rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </Typography>
        <motion.div
          animate={{ scaleY: [1, 1.6, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '1px', height: 28, backgroundColor: 'rgba(255,255,255,0.3)', transformOrigin: 'top' }}
        />
      </motion.div>
    </Box>
  );
}