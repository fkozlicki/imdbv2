'use client';

import React, { useRef } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { type ReactNode } from 'react';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import { Box, styled } from '@mui/material';

interface CarouselProps {
	children: ReactNode[];
	xs: number;
	sm: number;
	md: number;
}

const Carousel = ({ children, xs, sm, md }: CarouselProps) => {
	const next = useRef<HTMLButtonElement>(null);
	const prev = useRef<HTMLButtonElement>(null);

	return (
		<Swiper
			speed={450}
			modules={[Navigation]}
			spaceBetween={12}
			breakpoints={{
				0: {
					slidesPerView: xs,
					slidesPerGroup: Math.floor(xs),
				},
				600: {
					slidesPerView: sm,
					slidesPerGroup: Math.floor(sm),
				},
				1024: {
					slidesPerView: md,
					slidesPerGroup: Math.floor(md),
				},
			}}
			onInit={(swiper) => {
				// @ts-ignore
				swiper.params.navigation.prevEl = prev.current;
				// @ts-ignore
				swiper.params.navigation.nextEl = next.current;
				swiper.navigation.init();
				swiper.navigation.update();
			}}
		>
			{children.map((el, index) => (
				<SwiperSlide key={index} style={{ height: 'auto' }}>
					{el}
				</SwiperSlide>
			))}
			<SwiperButton variant="left" ref={prev}>
				<Box fontSize={48} display="flex" paddingY="10px">
					<NavigateBeforeRoundedIcon fontSize="inherit" />
				</Box>
			</SwiperButton>
			<SwiperButton variant="right" ref={next}>
				<Box fontSize={48} display="flex" paddingY="10px">
					<NavigateNextRoundedIcon fontSize="inherit" />
				</Box>
			</SwiperButton>
		</Swiper>
	);
};

const SwiperButton = styled('button')<{ variant: 'left' | 'right' }>(
	({ theme, variant }) => ({
		border: '1px solid white',
		borderRadius: '4px',
		background: '#00000065',
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		left: variant === 'left' ? '0' : '',
		right: variant === 'right' ? '0' : '',
		zIndex: 100,
		cursor: 'pointer',
		'&:hover': {
			color: theme.palette.warning.light,
		},
		'&:disabled': {
			display: 'none',
		},
	})
);

export default Carousel;
