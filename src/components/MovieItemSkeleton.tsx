import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const MovieItemSkeleton = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				gap: '16px',
			}}
		>
			<Skeleton variant="rectangular" width={84} height={126}></Skeleton>
			<Box sx={{ flex: 1 }}>
				<Skeleton animation="wave"></Skeleton>

				<Skeleton animation="wave"></Skeleton>
				<Skeleton animation="wave"></Skeleton>
				<Skeleton height={60} animation="wave"></Skeleton>
			</Box>
		</Box>
	);
};

export default MovieItemSkeleton;
