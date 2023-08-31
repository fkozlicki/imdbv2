import MovieItemSkeleton from '@/components/MovieItemSkeleton';
import Box from '@mui/material/Box';
import React from 'react';

const loading = () => {
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
			{Array.from({ length: 10 }).map((_, index) => (
				<MovieItemSkeleton key={index} />
			))}
		</Box>
	);
};

export default loading;
