// src/Components/CardCarousel.jsx
import React, { useState, Children } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Box, IconButton, Stack } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

export default function CardCarousel({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: { perView: 1, spacing: 8 },
    breakpoints: {
      '(min-width: 600px)': { slides: { perView: 2, spacing: 16 } },
      '(min-width: 900px)': { slides: { perView: 3, spacing: 16 } },
      '(min-width: 1200px)': { slides: { perView: 4, spacing: 24 } },
    },
    slideChanged(s) { setCurrentSlide(s.track.details.rel); },
    created() { setLoaded(true); },
  });

  const slideCount = instanceRef.current
    ? instanceRef.current.track.details.slides.length
    : Children.count(children);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        px: { xs: 0, sm: 2, md: 4 },
        pt: 2,
        pb: 4,
        overflowX: 'visible',
        overflowY: 'visible',
      }}
    >
      {/* slider viewport */}
      <Box
        ref={sliderRef}
        className="keen-slider"
        sx={{
          overflowX: 'hidden',
          overflowY: 'visible',
          height: 'auto',
          boxShadow: 'none',
          background: 'transparent',
        }}
      >
        {Children.map(children, (child, idx) => (
          <Box
            key={idx}
            className="keen-slider__slide"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              overflow: 'visible',
              height: 'auto',
              background: 'transparent',
              boxShadow: 'none',
            }}
          >
            {child}
          </Box>
        ))}
      </Box>

      {/* prev arrow */}
      {loaded && instanceRef.current && (
        <IconButton
          onClick={() => instanceRef.current.prev()}
          sx={{
            position: 'absolute',
            top: '50%',
            left: { xs: 'auto', sm: -22, md: -32 },
            transform: 'translateY(-50%)',
            zIndex: 100,
            width: 36,
            height: 36,
            backgroundColor: '#00000080',
            color: '#fff',
            '&:hover': { backgroundColor: '#000000CC' },
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          <ChevronLeft />
        </IconButton>
      )}

      {/* next arrow */}
      {loaded && instanceRef.current && (
        <IconButton
          onClick={() => instanceRef.current.next()}
          sx={{
            position: 'absolute',
            top: '50%',
            right: { xs: 'auto', sm: -22, md: -32 },
            transform: 'translateY(-50%)',
            zIndex: 100,
            width: 36,
            height: 36,
            backgroundColor: '#00000080',
            color: '#fff',
            '&:hover': { backgroundColor: '#000000CC' },
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          <ChevronRight />
        </IconButton>
      )}

      {/* pagination dots */}
      {loaded && instanceRef.current && (
        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2 }}>
          {Array.from({ length: slideCount }).map((_, idx) => (
            <Box
              key={idx}
              onClick={() => instanceRef.current.moveToIdx(idx)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: currentSlide === idx ? 'primary.main' : 'grey.400',
                cursor: 'pointer',
              }}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
}
