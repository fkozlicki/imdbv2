import MovieItem from '@/components/MovieItem';
import { fetchMoviesByGenre } from '@/services/movie';
import Box from '@mui/material/Box';
import React from 'react';

const MoviesByGenre = async ({
	params: { name },
}: {
	params: { name: string };
}) => {
	const movies = await fetchMoviesByGenre(name);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				maxWidth: 'lg',
				margin: 'auto',
				paddingY: '50px',
				gap: '24px',
			}}
		>
			{movies.map(
				({ id, poster_path, vote_average, title, overview, vote_count }) => (
					<MovieItem
						key={id}
						imageUrl={poster_path}
						title={title}
						description={overview}
						rating={vote_average}
						votes={vote_count}
					/>
				)
			)}
		</Box>
	);
};

export default MoviesByGenre;
