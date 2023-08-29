import { MoviePreview } from '@/app/page';
import MovieCard from '@/components/MovieCard';
import MovieItem from '@/components/MovieItem';
import Box from '@mui/material/Box';
import axios from 'axios';
import React from 'react';

const MoviesByGenre = async ({
	params: { name },
}: {
	params: { name: string };
}) => {
	const movies = (
		await axios.get<{
			page: number;
			results: MoviePreview[];
			total_pages: number;
			total_results: number;
		}>('https://api.themoviedb.org/3/discover/movie', {
			params: {
				api_key: process.env.API_KEY,
				with_genres: name,
			},
		})
	).data;

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
			{movies.results.map(
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
