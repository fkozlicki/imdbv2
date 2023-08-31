import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import SectionTitle from '@/components/SectionTitle';

const loading = () => {
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
				{Array.from({ length: 12 }).map((_, index) => (
					<Skeleton
						key={index}
						variant="rectangular"
						sx={{
							borderRadius: '2rem',
						}}
						width={80}
						height={32}
					/>
				))}
			</Box>
		</Box>
	);
};

export default loading;
