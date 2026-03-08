'use client';
import { useRef } from 'react';
import { Box, Typography, Grid, Stack, IconButton } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, A11y } from 'swiper/modules';
import Image from 'next/image';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import type { Project } from '../data/projects';

import 'swiper/css';

interface ProjectSectionProps {
  project: Project;
  index: number;
}

export default function ProjectSection({ project, index }: ProjectSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.2'] });
  const titleX = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);

  const featured = project.media.find((m) => m.featured) ?? project.media[0];
  const carousel = project.media.filter((m) => m !== featured);

  return (
    <Box
      ref={ref}
      sx={{
        px: { xs: '24px', sm: '40px', md: '60px' },
        py: { xs: '80px', md: '60px' },
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* ── Header ── */}
      <Grid container spacing={{ xs: 4, md: 8 }} sx={{ mb: { xs: 6, md: 10 } }} alignItems="flex-end">
        <Grid size={{ xs: 12, md: 7 }}>
          <motion.div style={{ x: titleX, opacity: titleOpacity }}>
            <Typography
              sx={{
                fontSize: { xs: 'clamp(2.5rem, 11vw, 7rem)', md: 'clamp(3rem, 7vw, 8rem)' },
                fontWeight: 700,
                letterSpacing: '-0.04em',
                lineHeight: 0.88,
                color: 'white',
                textTransform: 'uppercase',
              }}
            >
              {project.client}
            </Typography>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
                <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {project.role}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.62rem', letterSpacing: '0.15em' }}>
                  {project.year}
                </Typography>
              </Stack>
              {project.badge && (
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 1.5, py: 0.6, border: '1px solid rgba(232,25,44,0.3)', backgroundColor: 'rgba(232,25,44,0.05)', width: 'fit-content' }}>
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

      {/* ── Main layout: media left, description right ── */}
      <Grid container spacing={{ xs: 6, md: 8 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack spacing={2}>
            {/* Featured / main image */}
            <motion.div
              initial={{ opacity: 0, scale: 1.03 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/9',
                  overflow: 'hidden',
                  backgroundColor: '#111',
                  minHeight: { xs: 220, md: 400 },
                }}
              >
                {featured.type === 'video' ? (
                  <video
                    src={featured.src}
                    autoPlay muted loop playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <Image
                    src={featured.src}
                    alt={featured.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 65vw"
                    priority={index < 2}
                  />
                )}
              </Box>
            </motion.div>

            {/* ── Carousel ── */}
            {carousel.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box sx={{ position: 'relative' }}>
                  {/* Nav buttons */}
                  <IconButton
                    ref={prevRef}
                    size="small"
                    sx={{
                      position: 'absolute',
                      left: 8,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 10,
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: 'white',
                      width: 32,
                      height: 32,
                      '&:hover': { backgroundColor: '#E8192C', borderColor: '#E8192C' },
                      transition: 'all 0.2s',
                    }}
                  >
                    <ArrowBackIosNewIcon sx={{ fontSize: 12 }} />
                  </IconButton>
                  <IconButton
                    ref={nextRef}
                    size="small"
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 10,
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: 'white',
                      width: 32,
                      height: 32,
                      '&:hover': { backgroundColor: '#E8192C', borderColor: '#E8192C' },
                      transition: 'all 0.2s',
                    }}
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
                  </IconButton>

                  <Swiper
                    modules={[Navigation, Autoplay, A11y]}
                    slidesPerView={2.3}
                    spaceBetween={8}
                    loop
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    onInit={(swiper) => {
                      if (typeof swiper.params.navigation !== 'boolean' && swiper.params.navigation) {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                      }
                    }}
                    navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                    breakpoints={{
                      0: { slidesPerView: 1.4 },
                      600: { slidesPerView: 2.3 },
                      900: { slidesPerView: 2.8 },
                    }}
                    style={{ paddingLeft: 0, paddingRight: 0 }}
                  >
                    {carousel.map((item, i) => (
                      <SwiperSlide key={i}>
                        <Box
                          sx={{
                            position: 'relative',
                            width: '100%',
                            aspectRatio: '4/3',
                            overflow: 'hidden',
                            backgroundColor: '#0d0d0d',
                          }}
                        >
                          {item.type === 'video' ? (
                            <video
                              src={item.src}
                              autoPlay muted loop playsInline
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          ) : (
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              style={{ objectFit: 'cover' }}
                              sizes="30vw"
                            />
                          )}
                        </Box>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Box>
              </motion.div>
            )}
          </Stack>
        </Grid>

        {/* Description + achievements */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ position: { md: 'sticky' }, top: { md: '60px' } }}>
            <Stack spacing={5}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8 }}>
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
                  <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.18)', fontSize: '0.6rem', letterSpacing: '0.18em' }}>
                    Highlights
                  </Typography>
                  <Stack spacing={2}>
                    {project.achievements.map((item, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <Box sx={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: '#E8192C', flexShrink: 0, mt: '7px' }} />
                        <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', lineHeight: 1.6 }}>
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

    </Box>
  );
}