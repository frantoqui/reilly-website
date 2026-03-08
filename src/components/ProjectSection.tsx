'use client';
import { useRef } from 'react';
import { Box, Typography, Grid, Stack, Chip } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import type { Project } from '../data/projects';

function MediaCard({ item, index }: { item: Project['media'][number]; index: number }) {
  if (item.type === 'video') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: index * 0.06, ease: 'easeOut' }}
        style={{ height: '100%' }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            minHeight: 280,
            overflow: 'hidden',
            backgroundColor: '#0a0a0a',
          }}
        >
          <video
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 8,
              right: 10,
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: '#E8192C',
            }}
          />
        </Box>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: 'easeOut' }}
      style={{ height: '100%' }}
    >
      <Box
        component={motion.div}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.4 }}
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          minHeight: item.featured ? { xs: 260, md: 360 } : { xs: 220, md: 280 },
          overflow: 'hidden',
          backgroundColor: '#111',
          cursor: 'default',
        }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Box>
    </motion.div>
  );
}

function ProjectMedia({ media }: { media: Project['media'] }) {
  const images = media.filter((m) => m.type === 'image');
  const videos = media.filter((m) => m.type === 'video');
  const featured = images.find((m) => m.featured);
  const rest = images.filter((m) => !m.featured);

  return (
    <Stack spacing={1.5}>
      {/* Featured image full width */}
      {featured && (
        <Box sx={{ width: '100%', aspectRatio: '16/9', position: 'relative', overflow: 'hidden', minHeight: { xs: 220, md: 420 } }}>
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: '100%' }}
          >
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </motion.div>
        </Box>
      )}

      {/* Grid of remaining images */}
      {rest.length > 0 && (
        <Grid container spacing={1.5}>
          {rest.map((item, i) => (
            <Grid
              key={i}
              size={{
                xs: item.wide ? 12 : item.tall ? 6 : 6,
                sm: item.wide ? 8 : item.tall ? 4 : 4,
                md: item.wide ? 8 : item.tall ? 4 : 4,
              }}
            >
              <MediaCard item={item} index={i} />
            </Grid>
          ))}
          {videos.map((item, i) => (
            <Grid key={`v-${i}`} size={{ xs: 12, sm: 6, md: 6 }}>
              <MediaCard item={item} index={rest.length + i} />
            </Grid>
          ))}
        </Grid>
      )}

      {/* Videos only (no rest images) */}
      {rest.length === 0 && videos.length > 0 && (
        <Grid container spacing={1.5}>
          {videos.map((item, i) => (
            <Grid key={`v-${i}`} size={{ xs: 12, sm: 6, md: 6 }}>
              <MediaCard item={item} index={i} />
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  );
}

interface ProjectSectionProps {
  project: Project;
  index: number;
}

export default function ProjectSection({ project, index }: ProjectSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.2'] });
  const titleX = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <Box
      ref={ref}
      sx={{
        px: { xs: '24px', sm: '40px', md: '60px' },
        py: { xs: '80px', md: '120px' },
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Header row */}
      <Grid container spacing={{ xs: 4, md: 8 }} sx={{ mb: { xs: 5, md: 8 } }} alignItems="flex-end">
        <Grid size={{ xs: 12, md: 7 }}>
          <Box sx={{ overflow: 'hidden' }}>
            <motion.div style={{ x: titleX, opacity: titleOpacity }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: 'clamp(2.5rem, 10vw, 7rem)', md: 'clamp(3rem, 7vw, 8rem)' },
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: 0.88,
                  color: 'white',
                  textTransform: 'uppercase',
                }}
              >
                {project.client}
              </Typography>
            </motion.div>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
                <Typography
                  variant="caption"
                  sx={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em', fontSize: '0.62rem' }}
                >
                  {project.role}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: 'rgba(255,255,255,0.15)', letterSpacing: '0.15em', fontSize: '0.62rem' }}
                >
                  {project.year}
                </Typography>
              </Stack>

              {project.badge && (
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 1.5,
                    py: 0.5,
                    border: '1px solid rgba(232,25,44,0.3)',
                    backgroundColor: 'rgba(232,25,44,0.06)',
                    width: 'fit-content',
                  }}
                >
                  <Box sx={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: '#E8192C' }} />
                  <Typography sx={{ color: '#E8192C', fontSize: '0.55rem', letterSpacing: '0.2em', fontWeight: 700 }}>
                    {project.badge}
                  </Typography>
                </Box>
              )}
            </Stack>
          </motion.div>
        </Grid>
      </Grid>

      {/* Main content: media + description */}
      <Grid container spacing={{ xs: 6, md: 8 }}>
        {/* Media */}
        <Grid size={{ xs: 12, md: 8 }}>
          <ProjectMedia media={project.media} />
        </Grid>

        {/* Description + achievements */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ position: { md: 'sticky' }, top: { md: '120px' } }}>
            <Stack spacing={5}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.55)',
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    lineHeight: 1.8,
                  }}
                >
                  {project.description}
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Stack spacing={2}>
                  <Typography
                    variant="overline"
                    sx={{ color: 'rgba(255,255,255,0.18)', fontSize: '0.6rem', letterSpacing: '0.18em' }}
                  >
                    Highlights
                  </Typography>
                  <Stack spacing={2}>
                    {project.achievements.map((item, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <Box
                          sx={{
                            width: 4,
                            height: 4,
                            borderRadius: '50%',
                            backgroundColor: '#E8192C',
                            flexShrink: 0,
                            mt: '7px',
                          }}
                        />
                        <Typography
                          sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', letterSpacing: '0.05em', lineHeight: 1.6 }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </motion.div>
            </Stack>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom index */}
      <Box
        sx={{
          mt: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{ color: 'rgba(255,255,255,0.06)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
        >
          Project {String(index + 1).padStart(2, '0')} / 04
        </Typography>
        <Box sx={{ height: '1px', flex: 1, mx: 3, backgroundColor: 'rgba(255,255,255,0.04)' }} />
      </Box>
    </Box>
  );
}