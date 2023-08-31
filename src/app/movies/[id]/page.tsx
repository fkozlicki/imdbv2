import React from 'react';
import Intro from '@/components/pages/movie/Intro';
import { fetchMovie } from '@/services/movie';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Videos from '@/components/pages/movie/Videos';
import Photos from '@/components/pages/movie/Photos';
import TopCast from '@/components/pages/movie/TopCast';
import Reviews from '@/components/pages/movie/Reviews';
import Recommendations from '@/components/pages/movie/Recommendations';
import MoreInfo from '@/components/pages/movie/MoreInfo';
import Similar from '@/components/pages/movie/Similar';
import Details from '@/components/pages/movie/Details';

interface MovieProps {
	params: {
		id: string;
	};
}

const Movie = async ({ params: { id } }: MovieProps) => {
	const {
		title,
		videos: { results: videos },
		release_date,
		overview,
		genres,
		vote_average,
		vote_count,
		runtime,
		images: { posters: photos },
		credits: { cast, crew },
		poster_path,
		reviews,
		similar: { results: similar },
		recommendations: { results: recommendations },
		production_countries,
		spoken_languages,
		production_companies,
		status,
		budget,
		revenue,
	} = await fetchMovie(id);
	const trailer = videos.find((result) => result.type === 'Trailer');
	const review = reviews.results.sort((a) => a.author_details.rating)[0];

	return (
		<>
			<Intro
				title={title}
				releaseDate={release_date}
				overview={overview}
				genres={genres}
				rating={vote_average}
				voteCount={vote_count}
				videosCount={videos.length}
				imagesCount={photos.length}
				trailer={trailer}
				runtime={runtime}
				image={poster_path}
				cast={cast.slice(0, 18)}
				crew={crew}
			/>
			<Container sx={{ marginBottom: 4 }}>
				<Grid container spacing={4}>
					<Grid item xs={12} md={8}>
						<Videos videos={videos} />
						<Photos photos={photos} />
						<TopCast cast={cast.slice(0, 18)} />
						{review && <Reviews review={review} />}
						<Details
							productionCompanies={production_companies}
							productionCountries={production_countries}
							releaseDate={release_date}
							spokenLanguages={spoken_languages}
						/>
						{similar.length > 0 && <Similar movies={similar} />}
						<Recommendations movies={recommendations} />
					</Grid>
					<Grid item xs={12} md={4}>
						<MoreInfo
							budget={budget}
							revenue={revenue}
							status={status}
							originalLanguage={spoken_languages[0]}
						/>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Movie;
