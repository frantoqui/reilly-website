'use client';
import { Box, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import LanguageIcon from '@mui/icons-material/Language';

interface Webpage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  domain: string;
  image: string;
  year: string;
}

interface WebpagesSectionProps {
  pages: Webpage[];
}

export default function WebpagesSection({ pages }: WebpagesSectionProps) {
  return (
    <Box
      id="webpages"
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
            Digital · David Zwirner
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
                Web
                <Box component="span" sx={{ color: '#E8192C' }}>
                  pages
                </Box>
              </Typography>
            </motion.div>
          </Box>
          <Box sx={{ mt: 3, maxWidth: 480 }}>
            <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.9rem', lineHeight: 1.75 }}>
              Dedicated exhibition and artist pages developed for David Zwirner Gallery.
            </Typography>
          </Box>
        </motion.div>
      </Box>

      {/* Cards */}
      <Grid container spacing={{ xs: 3, md: 4 }}>
        {pages.map((page, i) => (
          <Grid key={page.id} size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
            >
              <Box
                component="a"
                href={page.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backgroundColor: '#080808',
                  textDecoration: 'none',
                  color: 'white',
                  height: '100%',
                  transition: 'border-color 0.25s',
                  '&:hover': { borderColor: 'rgba(255,255,255,0.2)' },
                  '&:hover .arrow-icon': { transform: 'translate(3px, -3px)' },
                  '&:hover .preview-img': { transform: 'scale(1.03)' },
                }}
              >
                {/* Image preview */}
                <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', backgroundColor: '#111' }}>
                  <Box
                    className="preview-img"
                    sx={{ position: 'absolute', inset: 0, transition: 'transform 0.5s ease' }}
                  >
                    <Image
                      src={page.image}
                      alt={page.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </Box>
                  {/* Overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)',
                    }}
                  />
                  {/* Domain chip */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.75,
                      px: 1.25,
                      py: 0.5,
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <LanguageIcon sx={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.58rem', letterSpacing: '0.1em' }}>
                      {page.domain}
                    </Typography>
                  </Box>
                </Box>

                {/* Content */}
                <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <Stack spacing={1.5} sx={{ flex: 1 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: '1rem', lineHeight: 1.3, color: 'white', pr: 2 }}>
                          {page.title}
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', letterSpacing: '0.08em', mt: 0.5 }}>
                          {page.subtitle} · {page.year}
                        </Typography>
                      </Box>
                      <NorthEastIcon
                        className="arrow-icon"
                        sx={{
                          fontSize: 16,
                          color: 'rgba(255,255,255,0.3)',
                          flexShrink: 0,
                          mt: 0.25,
                          transition: 'transform 0.25s ease',
                        }}
                      />
                    </Stack>
                    <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', lineHeight: 1.7 }}>
                      {page.description}
                    </Typography>
                  </Stack>

                  <Box sx={{ mt: 2.5, pt: 2, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <Typography sx={{ color: '#E8192C', fontSize: '0.65rem', letterSpacing: '0.15em', fontWeight: 700, textTransform: 'uppercase' }}>
                      View Page →
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}