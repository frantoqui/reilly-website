'use client';
import { useState } from 'react';
import { Box, Typography, Stack, Avatar, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import Image from 'next/image';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';
import type { SocialPost } from '../data/socialPosts';

import 'swiper/css';
import 'swiper/css/pagination';

const CAPTION_LIMIT = 220;

interface SocialPostCardProps {
  post: SocialPost;
  delay?: number;
}

export default function SocialPostCard({ post, delay = 0 }: SocialPostCardProps) {
  const [expanded, setExpanded] = useState(false);
  const truncated = post.caption.length > CAPTION_LIMIT && !expanded;
  const displayCaption = truncated ? post.caption.slice(0, CAPTION_LIMIT) + '…' : post.caption;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      <Box
        sx={{
          border: '1px solid rgba(255,255,255,0.08)',
          backgroundColor: '#080808',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          transition: 'border-color 0.2s',
          '&:hover': { borderColor: 'rgba(255,255,255,0.15)' },
        }}
      >
        {/* Theme badge */}
        <Box
          sx={{
            px: 2,
            py: 0.75,
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Box sx={{ width: 3, height: 3, borderRadius: '50%', backgroundColor: '#E8192C' }} />
          <Typography sx={{ color: '#E8192C', fontSize: '0.55rem', letterSpacing: '0.22em', fontWeight: 700 }}>
            {post.theme}
          </Typography>
        </Box>

        {/* Header */}
        <Box sx={{ px: 2.5, pt: 2.5, pb: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar
            sx={{
              width: 36,
              height: 36,
              backgroundColor: post.accentColor ?? '#1a1a1a',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              border: '1px solid rgba(255,255,255,0.08)',
              flexShrink: 0,
            }}
          >
            {post.company.slice(0, 2)}
          </Avatar>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography sx={{ fontWeight: 700, fontSize: '0.85rem', color: 'white', lineHeight: 1.2 }}>
              {post.company}
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem', lineHeight: 1.4 }}>
              {post.role}
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.18)', fontSize: '0.6rem' }}>
              {post.timeAgo} · Instagram
            </Typography>
          </Box>
        </Box>

        {/* Caption */}
        <Box sx={{ px: 2.5, pb: 2 }}>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '0.8rem',
              lineHeight: 1.7,
              whiteSpace: 'pre-line',
            }}
          >
            {displayCaption}
          </Typography>
          {post.caption.length > CAPTION_LIMIT && (
            <Typography
              onClick={() => setExpanded(!expanded)}
              sx={{
                color: 'rgba(255,255,255,0.3)',
                fontSize: '0.75rem',
                cursor: 'pointer',
                mt: 0.5,
                '&:hover': { color: '#E8192C' },
                transition: 'color 0.2s',
              }}
            >
              {expanded ? 'less' : '...more'}
            </Typography>
          )}
          {post.credits && expanded && (
            <Typography sx={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.65rem', mt: 1.5, lineHeight: 1.6, fontStyle: 'italic' }}>
              {post.credits}
            </Typography>
          )}
        </Box>

        {/* Media */}
        {post.media.length > 0 && (
          <Box sx={{ position: 'relative', mx: 0 }}>
            <Swiper
              modules={[Pagination, A11y]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              style={
                {
                  '--swiper-pagination-color': '#E8192C',
                  '--swiper-pagination-bullet-inactive-color': 'rgba(255,255,255,0.2)',
                  '--swiper-pagination-bullet-inactive-opacity': '1',
                  '--swiper-pagination-bullet-size': '5px',
                } as React.CSSProperties
              }
            >
              {post.media.map((item, i) => (
                <SwiperSlide key={i}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '1/1',
                      backgroundColor: '#0d0d0d',
                    }}
                  >
                    {item.type === 'video' ? (
                      <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 600px) 100vw, 420px"
                      />
                    )}
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        )}

        {/* Engagement */}
        <Box sx={{ px: 2.5, pt: 1.5, pb: 2, mt: 'auto' }}>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)', mb: 1.5 }} />
          <Stack direction="row" spacing={3} alignItems="center">
            <Stack direction="row" spacing={0.75} alignItems="center">
              <FavoriteIcon sx={{ fontSize: 13, color: post.likes ? '#E8192C' : 'rgba(255,255,255,0.2)' }} />
              <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem' }}>
                {post.likes != null ? post.likes.toLocaleString() : '—'}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.75} alignItems="center">
              <ChatBubbleOutlineIcon sx={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }} />
              <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem' }}>
                {post.comments}
              </Typography>
            </Stack>
            <Box sx={{ flex: 1 }} />
            <Stack direction="row" spacing={1.5}>
              <RepeatIcon sx={{ fontSize: 13, color: 'rgba(255,255,255,0.12)', cursor: 'default' }} />
              <SendIcon sx={{ fontSize: 13, color: 'rgba(255,255,255,0.12)', cursor: 'default' }} />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </motion.div>
  );
}