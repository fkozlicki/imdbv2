import { Photo } from '@/services/movie';
import { PersonMovieCast, PersonShowCast } from '@/services/people';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
import Photos from '../movie/Photos';
import KnownFor from './KnownFor';

interface PersonContentProps {
	photos: Photo[];
	knownFor: (PersonShowCast | PersonMovieCast)[];
}

const PersonContent = ({ photos, knownFor }: PersonContentProps) => {
	return (
		<Container sx={{ marginBottom: 4 }}>
			<Grid container spacing={4}>
				<Grid item xs={12} md={8}>
					<KnownFor cast={knownFor} />
					<Photos photos={photos} />
				</Grid>
				<Grid item xs={12} md={4}>
					<Card sx={{ height: 420 }}>Soon</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default PersonContent;
