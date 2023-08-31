import SectionTitle from '@/components/SectionTitle';
import { fetchShowGenres } from '@/services/show';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Link from 'next/link';
import React from 'react';

const ShowsGenres = async () => {
	const genres = await fetchShowGenres();

	return (
		<div
			style={{
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
						href={`/shows/genres/${genre.name}`}
						clickable
					/>
				))}
			</Box>
		</div>
	);
};

export default ShowsGenres;
