import React from 'react';
import axios from 'axios';
import { Genre } from '../[id]/page';
import Chip from '@mui/material/Chip';
import SectionTitle from '@/components/SectionTitle';
import Box from '@mui/material/Box';
import Link from 'next/link';

const MovieGenres = async () => {
	const genres = (
		await axios.get<{ genres: Genre[] }>(
			`https://api.themoviedb.org/3/genre/movie/list`,
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
						href={`/movies/genres/${genre.name}`}
						clickable
					/>
				))}
			</Box>
		</div>
	);
};

export default MovieGenres;
