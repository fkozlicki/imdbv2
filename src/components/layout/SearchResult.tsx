'use client';

import { Box, Typography, Paper } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { useRouter } from 'next/navigation';

interface SearchResultProps {
	image: string | null;
	title: string;
	href: string;
	overview?: string;
	year?: string;
}

const SearchResult = ({
	image,
	title,
	overview,
	year,
	href,
}: SearchResultProps) => {
	const { push } = useRouter();

	return (
		<Box
			onClick={() => push(href)}
			sx={{
				display: 'flex',
				padding: '8px',
				borderBottom: 1,
				borderColor: 'divider',
				gap: '16px',
				cursor: 'pointer',
			}}
		>
			<Box sx={{ display: 'flex' }}>
				{image ? (
					<Image
						src={`http://image.tmdb.org/t/p/w92/${image}`}
						alt=""
						width={48}
						height={72}
					/>
				) : (
					<Paper
						elevation={0}
						sx={{
							width: '48px',
							height: '72px',
							background: 'background.paper',
							display: 'grid',
							placeItems: 'center',
							color: 'action.hover',
						}}
					>
						<LocalMoviesIcon fontSize="medium" />
					</Paper>
				)}
			</Box>
			<Box>
				<Typography>{title}</Typography>
				{year && (
					<Typography fontSize={14} color="text.secondary">
						{year.substring(0, 4)}
					</Typography>
				)}
				{overview && (
					<Typography fontSize={14} color="text.secondary">
						{overview}
					</Typography>
				)}
			</Box>
		</Box>
	);
};

export default SearchResult;
