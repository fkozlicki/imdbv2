import React from 'react';
import Box from '@mui/material/Box';
import MovieItem from '@/components/MovieItem';
import { fetchTopShows } from '@/services/show';

const page = async () => {
	const movies = await fetchTopShows();

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
