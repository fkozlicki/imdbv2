import { Details, Media } from '@/app/movies/[id]/page';
import Content from '@/components/pages/movie/Content';
import Intro from '@/components/pages/movie/Intro';
import axios from 'axios';
import React from 'react';

const fetchShow = async (id: string) =>
	(
		await axios.get<Show>(`https://api.themoviedb.org/3/tv/${id}`, {
			params: {
				api_key: process.env.API_KEY,
				append_to_response:
					'videos,images,similar,reviews,recommendations,aggregate_credits',
			},
		})
	).data;

export interface AggregateCast {
	id: number;
	name: string;
	profile_path: string;
	roles: [
		{
			character: string;
		}
	];
	total_episode_count: number;
	popularity: number;
}

export interface CreatedBy {
	id: number;
	name: string;
}

export interface Episode {
	id: number;
	name: string;
	vote_average: number;
	vote_count: number;
	air_date: string;
	episode_number: number;
	season_number: number;
}

export interface Show extends Media {
	name: string;
	created_by: CreatedBy[];
	episode_run_time: number[];
	languages: string[];
	first_air_date: string;
	last_episode_to_air: Episode;
	next_episode_to_air?: Episode;
	number_of_episodes: number;
	number_of_seasons: number;
	aggregate_credits: {
		cast: AggregateCast[];
	};
	similar: {
		results: Show[];
	};
}

interface ShowProps {
	params: { id: string };
}

const ShowPage = async ({ params: { id } }: ShowProps) => {
	const data = await fetchShow(id);
	const {
		name,
		videos,
		overview,
		genres,
		vote_average,
		vote_count,
		images,
		aggregate_credits: { cast },
		poster_path,
		reviews,
		similar,
		recommendations,
		production_countries,
		spoken_languages,
		production_companies,
		status,
		first_air_date,
		episode_run_time,
		created_by,
		last_episode_to_air,
		next_episode_to_air,
	} = data;
	const trailer = videos.results.find((result) => result.type === 'Trailer');
	const details: Details = {
		release_date: first_air_date,
		production_countries,
		spoken_languages,
		production_companies,
	};
	const moreInfo = {
		status,
		original_language: spoken_languages[0],
	};
	const episodes = {
		next: next_episode_to_air,
		last: last_episode_to_air,
	};

	return (
		<>
			<Intro
				title={name}
				releaseDate={first_air_date}
				overview={overview}
				genres={genres}
				rating={vote_average}
				voteCount={vote_count}
				videosCount={videos.results.length}
				imagesCount={images.posters.length}
				trailer={trailer}
				runtime={episode_run_time[0]}
				image={poster_path}
				cast={cast.slice(0, 18)}
				createdBy={created_by}
			/>
			<Content
				videos={videos.results}
				photos={images.posters}
				cast={cast.slice(0, 18)}
				reviews={reviews.results}
				similar={similar.results}
				recommendations={recommendations.results}
				details={details}
				moreInfo={moreInfo}
				episodes={episodes}
			/>
		</>
	);
};

export default ShowPage;
