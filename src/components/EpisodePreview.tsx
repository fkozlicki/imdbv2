import { Card, Typography } from '@mui/material';
import React from 'react';

interface EpisodePreviewProps {
	airDate: string;
	season: number;
	episode: number;
	name: string;
	rating: number;
	title: string;
}

const EpisodePreview = ({
	airDate,
	season,
	episode,
	name,
	rating,
	title,
}: EpisodePreviewProps) => {
	return (
		<Card sx={{ padding: 2, boxShadow: 6 }}>
			<Typography
				textTransform="uppercase"
				fontSize={14}
				fontWeight={600}
				color="black"
				paddingX={2}
				marginBottom={1}
				sx={{ background: 'yellow', display: 'inline-block' }}
			>
				{title}
			</Typography>
			<Typography fontSize={14} color="GrayText" marginBottom={1}>
				{new Intl.DateTimeFormat('en-US', {
					weekday: 'short',
					month: 'short',
					day: '2-digit',
					year: 'numeric',
				}).format(new Date(airDate))}
			</Typography>
			<Typography fontWeight={700} marginBottom={2}>
				S{season}.E{episode} - {name}
			</Typography>
			<Typography>{rating}/10</Typography>
		</Card>
	);
};

export default EpisodePreview;
