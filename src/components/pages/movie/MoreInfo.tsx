import SectionTitle from '@/components/SectionTitle';
import { Language } from '@/services/movie';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

interface MoreInfoProps {
	budget?: number;
	revenue?: number;
	status: string;
	originalLanguage: Language;
}

const MoreInfo = ({
	budget,
	originalLanguage,
	revenue,
	status,
}: MoreInfoProps) => {
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
					<Typography>{originalLanguage.english_name}</Typography>
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
