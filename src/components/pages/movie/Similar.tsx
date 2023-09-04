import SectionTitle from '@/components/SectionTitle';
import { Movie } from '@/services/movie';
import { Show } from '@/services/show';
import Card from '@mui/material/Card';
import React from 'react';
import Carousel from '../../Carousel';
import MovieCard from '../../MovieCard';

interface SimilarProps {
	movies: (Movie | Show)[];
}

function isShow(cast: any): cast is Show {
	return (cast as Show).name !== undefined;
}

const Similar = ({ movies }: SimilarProps) => {
	return (
		<Card sx={{ marginBottom: '24px', paddingY: 2 }}>
			<SectionTitle title="More like this" />
			<Carousel xs={2.3} sm={4.3} md={4}>
				{movies.map((movie, index) => {
					const { poster_path, vote_average, id } = movie;
					if (isShow(movie)) {
						const { name } = movie;
						return (
							<MovieCard
								key={index}
								href={`/shows/${id}`}
								image={poster_path}
								rating={vote_average}
								title={name}
							/>
						);
					} else {
						const { title } = movie;
						return (
							<MovieCard
								key={index}
								href={`/movies/${id}`}
								image={poster_path}
								rating={vote_average}
								title={title}
							/>
						);
					}
				})}
			</Carousel>
		</Card>
	);
};

export default Similar;
