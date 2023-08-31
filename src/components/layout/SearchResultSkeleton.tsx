import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import React from 'react';

const SearchResultSkeleton = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				padding: '8px',
				borderBottom: 1,
				borderColor: 'divider',
				gap: '16px',
				cursor: 'pointer',
			}}
		>
			<Skeleton variant="rectangular" width={48} height={72}></Skeleton>
			<Box sx={{ flex: 1 }}>
				<Skeleton animation="wave" sx={{ maxWidth: 400 }}></Skeleton>
				<Skeleton animation="wave" width={100}></Skeleton>
				<Skeleton animation="wave" width={100}></Skeleton>
			</Box>
		</Box>
	);
};

export default SearchResultSkeleton;
