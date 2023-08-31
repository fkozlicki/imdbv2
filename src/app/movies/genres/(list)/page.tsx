import React from 'react';
import Chip from '@mui/material/Chip';
import SectionTitle from '@/components/SectionTitle';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { fetchMovieGenres } from '@/services/movie';

const MovieGenres = async () => {
	const genres = await fetchMovieGenres();

	return (
		<Box
			sx={{
				margin: 'auto',
				maxWidth: '1200px',
				paddingInline: '24px',
				paddingBlock: '60px',
			}}
		>
			<SectionTitle title="Genres" />
			<Box
				sx={{
					display: 'flex',
					gap: '14px',
					flexWrap: 'wrap',
				}}
			>
				{genres.map((genre) => (
					<Chip
						key={genre.id}
						label={genre.name}
						component={Link}
						href={`/movies/genres/${genre.name}`}
						clickable
					/>
				))}
			</Box>
		</Box>
	);
};

export default MovieGenres;
