'use client';
import { Box, Typography, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import DownloadIcon from '@mui/icons-material/Download';
import { personal } from '../data/personal';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
        px: { xs: '24px', sm: '40px', md: '60px' },
        py: { xs: '60px', md: '80px' },
        backgroundColor: '#000',
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'flex-end' }}
        spacing={{ xs: 6, md: 0 }}
      >
        {/* Left: big name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Stack spacing={2}>
            <Typography
              sx={{
                fontSize: { xs: 'clamp(2.5rem, 12vw, 7rem)', md: 'clamp(3rem, 8vw, 8rem)' },
                fontWeight: 800,
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                lineHeight: 0.88,
                color: 'white',
              }}
            >
              {personal.firstName}
              <Box component="br" />
              <Box component="span" sx={{ color: '#E8192C' }}>
                {personal.lastName}
              </Box>
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.25)',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              {personal.title}
            </Typography>
          </Stack>
        </motion.div>

        {/* Right: links + social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <Stack spacing={4} alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
            {/* Resume download */}
            <Box
              component="a"
              href={personal.resume}
              download
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                px: 3,
                py: 1.5,
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'white',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 700,
                cursor: 'pointer',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: '#E8192C',
                  borderColor: '#E8192C',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <DownloadIcon sx={{ fontSize: 14 }} />
              Download Resume
            </Box>

            {/* Social icons */}
            <Stack direction="row" spacing={1}>
              <IconButton
                component="a"
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: 'rgba(255,255,255,0.35)',
                  '&:hover': { color: 'white', backgroundColor: 'transparent' },
                  transition: 'color 0.2s',
                  p: 0.5,
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href={personal.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: 'rgba(255,255,255,0.35)',
                  '&:hover': { color: 'white', backgroundColor: 'transparent' },
                  transition: 'color 0.2s',
                  p: 0.5,
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Stack>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.1)',
                fontSize: '0.6rem',
                letterSpacing: '0.12em',
              }}
            >
              © {new Date().getFullYear()} Reilly Thomson
            </Typography>
          </Stack>
        </motion.div>
      </Stack>
    </Box>
  );
}