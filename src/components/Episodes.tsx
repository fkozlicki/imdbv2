import { Episode } from '@/app/shows/[id]/page';
import { Box, Card, Grid, Typography } from '@mui/material';
import React from 'react';
import EpisodePreview from './EpisodePreview';
import SectionTitle from './SectionTitle';

interface EpisodesProps {
	last: Episode;
	next?: Episode;
}

const Episodes = ({ last, next }: EpisodesProps) => {
	return (
		<Card sx={{ paddingY: 2, marginBottom: 3 }}>
			<SectionTitle title="Episodes" />
			<Grid container spacing={2} paddingX={2}>
				<Grid item xs={12} sm={6}>
					<EpisodePreview
						title="Last"
						airDate={last.air_date}
						episode={last.episode_number}
						name={last.name}
						rating={last.vote_average}
						season={last.season_number}
					/>
				</Grid>
				{next && (
					<Grid item xs={12} sm={6}>
						<EpisodePreview
							title="Next"
							airDate={next.air_date}
							episode={next.episode_number}
							name={next.name}
							rating={next.vote_average}
							season={next.season_number}
						/>
					</Grid>
				)}
			</Grid>
		</Card>
	);
};

export default Episodes;
