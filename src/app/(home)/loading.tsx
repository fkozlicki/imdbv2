import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import CardContent from '@mui/material/CardContent';
import SectionTitle from '@/components/SectionTitle';

const Loading = () => {
	return (
		<Box
			component="main"
			sx={{
				paddingBlock: '50px',
			}}
		>
			<Container sx={{ marginBottom: 6 }}>
				<SectionTitle title="Popular Movies" />
				<Box
					sx={{
						display: 'flex',
						gap: '8px',
					}}
				>
					{Array.from({ length: 6 }).map((_, index) => (
						<MovieSkeleton key={index} />
					))}
				</Box>
			</Container>
			<Container sx={{ marginBottom: 6 }}>
				<SectionTitle title="Upcoming Movies" />
				<Box
					sx={{
						display: 'flex',
						gap: '8px',
					}}
				>
					{Array.from({ length: 6 }).map((_, index) => (
						<MovieSkeleton key={index} />
					))}
				</Box>
			</Container>
		</Box>
	);
};

export default Loading;

const MovieSkeleton = () => (
	<Card sx={{ background: '#1a1a1a', width: '100%', height: '100%' }}>
		<Box
			sx={{
				paddingBottom: '148%',
				position: 'relative',
				width: '100%',
			}}
		>
			<Skeleton
				sx={{
					position: 'absolute',
					top: 0,
					height: '100%',
					width: '100%',
					transform: 'none',
					borderRadius: 0,
				}}
			/>
		</Box>
		<CardContent>
			<Skeleton animation="wave" />
			<Skeleton animation="wave" />
		</CardContent>
	</Card>
);
