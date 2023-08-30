import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';

interface MovieCardProps {
	image: string;
	rating: number;
	title: string;
	href: string;
}

const MovieCard = ({ image, rating, title, href }: MovieCardProps) => {
	return (
		<Link href={href}>
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
