import { ExtraInfo } from '@/app/movies/[id]/page';
import SectionTitle from '@/components/SectionTitle';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

const MoreInfo = ({ moreInfo }: { moreInfo: ExtraInfo }) => {
	const { budget, original_language, revenue, status } = moreInfo;
	return (
		<Card sx={{ paddingBlock: '16px' }}>
			<SectionTitle title="More info" />
			<Grid container spacing={2} padding={2}>
				<Grid item xs={6} md={12}>
					<Typography>Status</Typography>
					<Typography>{status}</Typography>
				</Grid>
				<Grid item xs={6} md={12}>
					<Typography>Original Language</Typography>
					<Typography>{original_language.english_name}</Typography>
				</Grid>
				{budget && (
					<Grid item xs={6} md={12}>
						<Typography>Budget</Typography>
						<Typography>{budget}</Typography>
					</Grid>
				)}
				{revenue && (
					<Grid item xs={6} md={12}>
						<Typography>Revenue</Typography>
						<Typography>{revenue}</Typography>
					</Grid>
				)}
			</Grid>
		</Card>
	);
};

export default MoreInfo;
