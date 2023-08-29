import { Genre } from '@/app/movies/[id]/page';
import SectionTitle from '@/components/SectionTitle';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';

const ShowsGenres = async () => {
	const genres = (
		await axios.get<{ genres: Genre[] }>(
			`https://api.themoviedb.org/3/genre/tv/list`,
			{
				params: {
					api_key: process.env.API_KEY,
				},
			}
		)
	).data.genres;

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
