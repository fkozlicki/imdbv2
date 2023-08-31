import Details from '@/components/pages/movie/Details';
import Intro from '@/components/pages/movie/Intro';
import MoreInfo from '@/components/pages/movie/MoreInfo';
import Photos from '@/components/pages/movie/Photos';
import Recommendations from '@/components/pages/movie/Recommendations';
import Reviews from '@/components/pages/movie/Reviews';
import Similar from '@/components/pages/movie/Similar';
import TopCast from '@/components/pages/movie/TopCast';
import Videos from '@/components/pages/movie/Videos';
import Episodes from '@/components/pages/show/Episodes';
import { fetchShow } from '@/services/show';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';

interface ShowProps {
	params: { id: string };
}

const ShowPage = async ({ params: { id } }: ShowProps) => {
	const {
		name,
		videos: { results: videos },
		overview,
		genres,
		vote_average,
		vote_count,
		images: { posters: photos },
		aggregate_credits: { cast },
		poster_path,
		reviews,
		similar: { results: similar },
		recommendations: { results: recommendations },
		production_countries,
		spoken_languages,
		production_companies,
		status,
		first_air_date,
		episode_run_time,
		created_by,
		last_episode_to_air,
		next_episode_to_air,
	} = await fetchShow(id);
	const trailer = videos.find((result) => result.type === 'Trailer');
	const review = reviews.results.sort((a) => a.author_details.rating)[0];

	return (
		<>
			<Intro
				title={name}
				releaseDate={first_air_date}
				overview={overview}
				genres={genres}
				rating={vote_average}
				voteCount={vote_count}
				videosCount={videos.length}
				imagesCount={photos.length}
				trailer={trailer}
				runtime={episode_run_time[0]}
				image={poster_path}
				cast={cast.slice(0, 18)}
				createdBy={created_by}
			/>
			<Container sx={{ marginBottom: 4 }}>
				<Grid container spacing={4}>
					<Grid item xs={12} md={8}>
						<Episodes last={last_episode_to_air} next={next_episode_to_air} />
						{videos.length > 0 && <Videos videos={videos} />}
						<Photos photos={photos} />
						<TopCast cast={cast} />
						{review && <Reviews review={review} />}
						<Details
							productionCompanies={production_companies}
							productionCountries={production_countries}
							releaseDate={first_air_date}
							spokenLanguages={spoken_languages}
						/>
						{similar.length > 0 && <Similar movies={similar} />}
						<Recommendations movies={recommendations} />
					</Grid>
					<Grid item xs={12} md={4}>
						<MoreInfo originalLanguage={spoken_languages[0]} status={status} />
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default ShowPage;
