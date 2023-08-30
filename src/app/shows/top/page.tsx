import axios from 'axios';
import React from 'react';
import type { ShowPreview } from '@/app/page';
import Box from '@mui/material/Box';
import MovieItem from '@/components/MovieItem';

const fetchTopMovies = () =>
	axios.get<{ results: ShowPreview[] }>(
		`https://api.themoviedb.org/3/tv/top_rated`,
		{
			params: {
				api_key: process.env.API_KEY,
			},
		}
	);

const page = async () => {
	const movies = (await fetchTopMovies()).data;

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
				({ id, poster_path, vote_average, name, overview, vote_count }) => (
					<MovieItem
						key={id}
						imageUrl={poster_path}
						title={name}
						description={overview}
						rating={vote_average}
						votes={vote_count}
					/>
				)
			)}
		</Box>
	);
};

export default page;
