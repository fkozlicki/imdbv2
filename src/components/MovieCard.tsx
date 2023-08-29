import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';

interface MovieCardProps {
	id: number;
	image: string;
	rating: number;
	title: string;
}

const MovieCard = ({ id, image, rating, title }: MovieCardProps) => {
	return (
		<Link href={`/movies/${id}`}>
			<Card sx={{ background: '#1a1a1a', width: '100%', height: '100%' }}>
				<Box
					sx={{ paddingBottom: '148%', position: 'relative', width: '100%' }}
				>
					<Image src={`http://image.tmdb.org/t/p/w500/${image}`} alt="" fill />
				</Box>
				<CardContent>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: '5px',
						}}
					>
						<StarIcon
							fontSize="small"
							sx={{
								color: 'yellow',
							}}
						/>
						<Typography fontSize={16} color="grey" fontWeight={600}>
							{rating}
						</Typography>
					</Box>
					<Typography fontWeight={400} color="white">
						{title}
					</Typography>
				</CardContent>
			</Card>
		</Link>
	);
};

export default MovieCard;
