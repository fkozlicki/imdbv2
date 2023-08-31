import MovieItem from '@/components/MovieItem';
import { fetchShowsByGenre } from '@/services/show';
import Box from '@mui/material/Box';
import React from 'react';

const ShowsByGenre = async ({
	params: { name },
}: {
	params: { name: string };
}) => {
	const shows = await fetchShowsByGenre(name);

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
			{shows.map(
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

export default ShowsByGenre;
