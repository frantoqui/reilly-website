'use client';
import { useState } from 'react';
import { Box, Typography, Grid, Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface Newsletter {
  id: string;
  brand: string;
  date: string;
  subject: string;
  from: string;
  body: string;
  signature: string;
  image: string;
}

interface NewsletterSectionProps {
  newsletters: Newsletter[];
}

function NewsletterCard({ nl, delay = 0 }: { nl: Newsletter; delay?: number }) {
  const [open, setOpen] = useState(false);
  const paragraphs = nl.body.split('\n\n').filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      <Box
        sx={{
          border: '1px solid rgba(255,255,255,0.08)',
          backgroundColor: '#080808',
          transition: 'border-color 0.2s',
          '&:hover': { borderColor: 'rgba(255,255,255,0.14)' },
        }}
      >
        {/* Email header bar */}
        <Box
          sx={{
            px: 3,
            py: 2,
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            backgroundColor: '#0d0d0d',
          }}
        >
          <MailOutlineIcon sx={{ fontSize: 14, color: '#E8192C' }} />
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography sx={{ fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'white' }}>
                {nl.brand}
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.62rem' }}>{nl.date}</Typography>
            </Stack>
            <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.68rem', mt: 0.25, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {nl.subject}
            </Typography>
          </Box>
        </Box>

        {/* Image */}
        <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16/8', overflow: 'hidden', backgroundColor: '#0d0d0d' }}>
          <Image
            src={nl.image}
            alt={nl.brand}
            fill
            style={{ objectFit: 'cover', opacity: 0.65 }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, #080808 0%, transparent 55%)',
            }}
          />
          <Box sx={{ position: 'absolute', bottom: 20, left: 24 }}>
            <Typography
              sx={{
                fontSize: { xs: '1.6rem', md: '2rem' },
                fontWeight: 700,
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                color: 'white',
                lineHeight: 1,
              }}
            >
              {nl.subject}
            </Typography>
          </Box>
        </Box>

        {/* Body — expandable */}
        <Box sx={{ px: 3, py: 2.5 }}>
          <AnimatePresence initial={false}>
            {!open ? (
              <motion.div
                key="preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.45)',
                    fontSize: '0.85rem',
                    lineHeight: 1.75,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {paragraphs[0]}
                </Typography>
              </motion.div>
            ) : (
              <motion.div
                key="full"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <Stack spacing={2}>
                  {paragraphs.map((para, i) => (
                    <Typography key={i} sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.8 }}>
                      {para}
                    </Typography>
                  ))}
                  {nl.signature && (
                    <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.82rem', lineHeight: 1.7, fontStyle: 'italic', whiteSpace: 'pre-line', mt: 1 }}>
                      {nl.signature}
                    </Typography>
                  )}
                </Stack>
              </motion.div>
            )}
          </AnimatePresence>

          <Box
            onClick={() => setOpen(!open)}
            sx={{
              mt: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
              color: open ? 'rgba(255,255,255,0.3)' : '#E8192C',
              transition: 'color 0.2s',
              '&:hover': { color: open ? 'white' : '#ff3347' },
            }}
          >
            {open ? <RemoveIcon sx={{ fontSize: 14 }} /> : <AddIcon sx={{ fontSize: 14 }} />}
            <Typography sx={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>
              {open ? 'Collapse' : 'Read Full Newsletter'}
            </Typography>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default function NewsletterSection({ newsletters }: NewsletterSectionProps) {
  return (
    <Box
      id="newsletters"
      sx={{
        px: { xs: '24px', sm: '40px', md: '60px' },
        py: { xs: '80px', md: '120px' },
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Header */}
      <Box sx={{ mb: { xs: 8, md: 12 } }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Typography
            variant="overline"
            sx={{ color: 'rgba(255,255,255,0.2)', letterSpacing: '0.22em', fontSize: '0.65rem', display: 'block', mb: 2 }}
          >
            Inaugural Launches
          </Typography>
          <Box sx={{ overflow: 'hidden' }}>
            <motion.div
              initial={{ y: '100%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 'clamp(2.5rem, 10vw, 6rem)', md: 'clamp(3rem, 6vw, 7rem)' },
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  lineHeight: 0.88,
                  textTransform: 'uppercase',
                  color: 'white',
                }}
              >
                News
                <Box component="span" sx={{ color: '#E8192C' }}>
                  letters
                </Box>
              </Typography>
            </motion.div>
          </Box>
          <Box sx={{ mt: 3, maxWidth: 520 }}>
            <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.9rem', lineHeight: 1.75 }}>
              Inaugural newsletters written to launch two platforms from zero — setting the tone and defining the voice.
            </Typography>
          </Box>
        </motion.div>
      </Box>

      <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
        {newsletters.map((nl, i) => (
          <Grid key={nl.id} size={{ xs: 12, md: 6 }}>
            <NewsletterCard nl={nl} delay={i * 0.12} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}