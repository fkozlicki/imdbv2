import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';

interface MovieItemProps {
	imageUrl: string;
	title: string;
	rating: number;
	description: string;
	votes: number;
}

const MovieItem = ({
	imageUrl,
	title,
	rating,
	description,
	votes,
}: MovieItemProps) => {
	return (
		<Box
			sx={{
				display: 'flex',
				gap: '16px',
			}}
		>
			{imageUrl && (
				<Image
					src={`http://image.tmdb.org/t/p/w150_and_h225_bestv2/${imageUrl}`}
					alt=""
					width={84}
					height={126}
				/>
			)}
			<Box>
				<Typography fontWeight={700} fontSize={20} marginBottom={1}>
					{title}
				</Typography>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '5px',
						marginBottom: 1,
					}}
				>
					<StarIcon
						fontSize="small"
						sx={{
							color: 'yellow',
						}}
					/>
					<Typography fontSize={16} color="grey" fontWeight={600}>
						{rating.toFixed(1)}
					</Typography>
				</Box>
				<Typography fontSize={16} marginBottom={1}>
					{description}
				</Typography>
				<Typography fontSize={14}>
					<Typography
						color="grey"
						fontSize={14}
						component="span"
						marginRight="4px"
					>
						Votes:
					</Typography>
					{votes}
				</Typography>
			</Box>
		</Box>
	);
};

export default MovieItem;
