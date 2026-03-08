'use client';
import { Box, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { personal } from '../data/personal';

function AnimatedLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        px: { xs: '24px', sm: '40px', md: '60px' },
        py: { xs: '80px', md: '60px' },
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <Grid container spacing={{ xs: 6, md: 10 }} alignItems="flex-start">
        {/* Left: label */}
        <Grid size={{ xs: 12, md: 3 }}>
          <AnimatedLine>
            <Typography
              variant="overline"
              sx={{ color: 'rgba(255,255,255,0.2)', letterSpacing: '0.2em', fontSize: '0.65rem' }}
            >
              About
            </Typography>
          </AnimatedLine>
        </Grid>

        {/* Right: content */}
        <Grid size={{ xs: 12, md: 9 }}>
          <Stack spacing={5}>
            {/* Name display */}
            <AnimatedLine>
              <Box sx={{ overflow: 'hidden' }}>
                <motion.div
                  initial={{ y: '100%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 'clamp(2rem, 8vw, 5rem)', md: 'clamp(2.5rem, 5vw, 5.5rem)' },
                      fontWeight: 800,
                      letterSpacing: '-0.04em',
                      textTransform: 'uppercase',
                      lineHeight: 0.9,
                      color: 'white',
                    }}
                  >
                    {personal.firstName}{' '}
                    <Box component="span" sx={{ color: '#E8192C' }}>
                      {personal.lastName}
                    </Box>
                  </Typography>
                </motion.div>
              </Box>
            </AnimatedLine>

            {/* Bio paragraphs */}
            <Stack spacing={3}>
              {personal.bio.map((paragraph, i) => (
                <AnimatedLine key={i} delay={0.1 * (i + 1)}>
                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      lineHeight: 1.75,
                      maxWidth: '680px',
                    }}
                  >
                    {paragraph}
                  </Typography>
                </AnimatedLine>
              ))}
            </Stack>

            {/* Skills */}
            <AnimatedLine delay={0.3}>
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    color: 'rgba(255,255,255,0.2)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.18em',
                    display: 'block',
                    mb: 2,
                  }}
                >
                  Expertise
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px 12px' }}>
                  {personal.skills.map((skill) => (
                    <Box
                      key={skill}
                      component={motion.div}
                      whileHover={{ backgroundColor: 'rgba(232,25,44,0.1)', borderColor: 'rgba(232,25,44,0.3)' }}
                      sx={{
                        px: 2,
                        py: 0.75,
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.45)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        cursor: 'default',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {skill}
                    </Box>
                  ))}
                </Box>
              </Box>
            </AnimatedLine>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}