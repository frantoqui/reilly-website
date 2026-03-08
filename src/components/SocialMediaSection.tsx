'use client';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import SocialPostCard from './SocialPostCard';
import type { SocialPost } from '../data/socialPosts';

interface SocialMediaSectionProps {
  posts: SocialPost[];
}

export default function SocialMediaSection({ posts }: SocialMediaSectionProps) {
  return (
    <Box
      id="social"
      sx={{
        px: { xs: '24px', sm: '40px', md: '60px' },
        py: { xs: '80px', md: '60px' },
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Section Header */}
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
            Selected Work
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
                Social{' '}
                <Box component="span" sx={{ color: '#E8192C' }}>
                  Media
                </Box>
              </Typography>
            </motion.div>
          </Box>
          <Box sx={{ mt: 3, maxWidth: 520 }}>
            <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.9rem', lineHeight: 1.75 }}>
              Top-performing posts across platforms — measured by engagement, press pick-up, and audience growth.
            </Typography>
          </Box>
        </motion.div>
      </Box>

      {/* Posts grid */}
      <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
        {posts.map((post, i) => (
          <Grid key={post.id} size={{ xs: 12, sm: 6, lg: 3 }}>
            <SocialPostCard post={post} delay={i * 0.1} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}