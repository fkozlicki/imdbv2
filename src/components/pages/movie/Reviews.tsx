import SectionTitle from '@/components/SectionTitle';
import { Review } from '@/services/movie';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import React from 'react';

interface ReviewsProps {
	review: Review;
}

const Reviews = ({ review }: ReviewsProps) => {
	const { author, content, created_at } = review;

	return (
		<Card sx={{ marginBottom: '24px', paddingY: 2 }}>
			<SectionTitle title="User reviews" />
			<Box paddingX={2}>
				<Typography
					sx={{
						background: 'yellow',
					}}
					fontWeight={900}
					textTransform="uppercase"
					fontSize={12}
					paddingX={2}
					color="black"
					width="max-content"
					marginBottom={2}
				>
					Featured Review
				</Typography>
				<Typography marginBottom={2}>{content}</Typography>
				<Box>
					{author} - {created_at.substring(0, 10)}
				</Box>
			</Box>
		</Card>
	);
};

export default Reviews;
