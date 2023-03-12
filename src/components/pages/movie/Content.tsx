'use client';

import type {
	Movie,
	Cast,
	Photo,
	Review,
	Video,
	Details,
	ExtraInfo,
} from '@/app/movies/[id]/page';
import { AggregateCast, Episode } from '@/app/shows/[id]/page';
import Episodes from '@/components/Episodes';
import Similar from '@/components/pages/movie/Similar';
import { Container, Grid } from '@mui/material';
import React from 'react';
import DetailsList from './Details';
import MoreInfo from './MoreInfo';
import Photos from './Photos';
import Recommendations from './Recommendations';
import Reviews from './Reviews';
import TopCast from './TopCast';
import Videos from './Videos';

interface ContentProps {
	videos: Video[];
	photos: Photo[];
	cast: (Cast | AggregateCast)[];
	reviews: Review[];
	similar: Movie[];
	recommendations: Movie[];
	details: Details;
	moreInfo: ExtraInfo;
	episodes?: {
		last: Episode;
		next?: Episode;
	};
}

const Content = ({
	videos,
	photos,
	cast,
	reviews,
	similar,
	recommendations,
	details,
	moreInfo,
	episodes,
}: ContentProps) => {
	return (
		<Container sx={{ marginBottom: 4 }}>
			<Grid container spacing={4}>
				<Grid item xs={12} md={8}>
					{episodes && <Episodes last={episodes.last} next={episodes.next} />}
					<Videos videos={videos} />
					<Photos photos={photos} />
					<TopCast cast={cast} />
					{reviews.length > 0 && <Reviews reviews={reviews} />}
					<DetailsList details={details} />
					{similar.length > 0 && <Similar movies={similar} />}
					<Recommendations movies={recommendations} />
				</Grid>
				<Grid item xs={12} md={4}>
					<MoreInfo moreInfo={moreInfo} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Content;
