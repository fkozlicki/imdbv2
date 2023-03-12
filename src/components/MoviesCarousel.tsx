'use client';

import { MoviePreview } from '@/app/page';
import { Container, Typography } from '@mui/material';
import React from 'react';
import Carousel from './Carousel';
import MovieCard from './MovieCard';

interface MoviesCarouselProps {
	title: string;
	movies: MoviePreview[];
}

const MoviesCarousel = ({ title, movies }: MoviesCarouselProps) => {
	return (
		<Container sx={{ marginBottom: 6 }}>
			<Typography fontSize={28} fontWeight={600} marginBottom={2}>
				{title}
			</Typography>
			<Carousel xs={2.3} sm={4.5} md={6}>
				{movies.map(({ poster_path, title, vote_average, id }, index) => (
					<MovieCard
						key={index}
						id={id}
						image={poster_path}
						rating={vote_average}
						title={title}
					/>
				))}
			</Carousel>
		</Container>
	);
};

export default MoviesCarousel;
