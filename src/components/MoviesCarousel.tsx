'use client';

import { MoviePreview, ShowPreview } from '@/app/page';
import { Container, Typography } from '@mui/material';
import React from 'react';
import Carousel from './Carousel';
import MovieCard from './MovieCard';
import SectionTitle from './SectionTitle';

interface MoviesCarouselProps {
	title: string;
	previews: (MoviePreview | ShowPreview)[];
}

const isShow = (preview: any): preview is ShowPreview => {
	return (preview as ShowPreview).name !== undefined;
};

const MoviesCarousel = ({ title, previews }: MoviesCarouselProps) => {
	return (
		<Container sx={{ marginBottom: 6 }}>
			<SectionTitle title={title} />
			<Carousel xs={2.3} sm={4.5} md={6}>
				{previews.map((preview, index) => {
					const { id, poster_path, vote_average } = preview;
					if (isShow(preview)) {
						const { name } = preview;
						return (
							<MovieCard
								key={index}
								id={id}
								image={poster_path}
								rating={vote_average}
								title={name}
							/>
						);
					} else {
						const { title } = preview;
						return (
							<MovieCard
								key={index}
								id={id}
								image={poster_path}
								rating={vote_average}
								title={title}
							/>
						);
					}
				})}
			</Carousel>
		</Container>
	);
};

export default MoviesCarousel;
