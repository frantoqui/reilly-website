'use client';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography, IconButton, Drawer } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '/resume/Reilly-Thomson-Resume.pdf', download: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '20px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
          transition: 'background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
        }}
      >
        {/* Logo */}
        <Typography
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          sx={{
            fontWeight: 800,
            fontSize: '0.875rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'white',
            cursor: 'pointer',
            userSelect: 'none',
            '&:hover span': { color: '#E8192C' },
            transition: 'color 0.2s',
          }}
        >
          R<Box component="span" sx={{ transition: 'color 0.2s' }}>T</Box>
        </Typography>

        {/* Desktop nav */}
        <Stack
          direction="row"
          spacing={4}
          sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
        >
          {navLinks.map((link) => (
            <Typography
              key={link.label}
              component="a"
              href={link.href}
              download={link.download || undefined}
              sx={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                position: 'relative',
                '&:hover': { color: '#fff' },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -2,
                  left: 0,
                  width: 0,
                  height: '1px',
                  backgroundColor: '#E8192C',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': { width: '100%' },
                transition: 'color 0.2s ease',
              }}
            >
              {link.label}
            </Typography>
          ))}
        </Stack>

        {/* Mobile menu */}
        <IconButton
          onClick={() => setMobileOpen(true)}
          sx={{ display: { xs: 'flex', md: 'none' }, color: 'white', p: 0 }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            PaperProps={{
              sx: {
                width: '100vw',
                backgroundColor: '#000',
                padding: '20px 28px',
              },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 8 }}>
              <Typography sx={{ fontWeight: 800, fontSize: '0.875rem', letterSpacing: '0.15em' }}>RT</Typography>
              <IconButton sx={{ color: 'white', p: 0 }} onClick={() => setMobileOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Stack spacing={4}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Typography
                    component="a"
                    href={link.href}
                    download={link.download || undefined}
                    onClick={() => setMobileOpen(false)}
                    sx={{
                      fontSize: 'clamp(2rem, 10vw, 3.5rem)',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '-0.03em',
                      color: 'white',
                      display: 'block',
                      '&:hover': { color: '#E8192C' },
                      transition: 'color 0.2s',
                    }}
                  >
                    {link.label}
                  </Typography>
                </motion.div>
              ))}
            </Stack>
          </Drawer>
        )}
      </AnimatePresence>
    </>
  );
}