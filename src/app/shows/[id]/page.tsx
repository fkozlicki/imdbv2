import {
	Company,
	Country,
	Details,
	Genre,
	Language,
	Movie,
	Photo,
	Review,
	Video,
} from '@/app/movies/[id]/page';
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

interface ShowProps {
	params: { id: string };
}

export interface AggregateCast {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string;
	roles: [
		{
			credit_id: string;
			character: string;
			episode_count: number;
		}
	];
	total_episode_count: number;
	order: number;
}

export interface CreatedBy {
	id: number;
	credit_id: string;
	name: string;
	gender: number;
	profile_path: string;
}

interface Season {
	air_date: string;
	episode_count: number;
	id: number;
	name: string;
	overview: string;
	poster_path: string;
	season_number: number;
}

export interface Episode {
	id: number;
	name: string;
	overview: string;
	vote_average: number;
	vote_count: number;
	air_date: string;
	episode_number: number;
	production_code: '';
	runtime: number;
	season_number: number;
	show_id: number;
	still_path: string;
}

interface Network {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

interface Show {
	adult: boolean;
	backdrop_path: string;
	created_by: CreatedBy[];
	episode_run_time: number[];
	first_air_date: string;
	genres: Genre[];
	homepage: string;
	id: number;
	name: string;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	last_episode_to_air: Episode;
	next_episode_to_air?: Episode;
	networks: Network[];
	number_of_episodes: number;
	number_of_seasons: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: Company[];
	production_countries: Country[];
	seasons: Season[];
	spoken_languages: Language[];
	status: string;
	tagline: string;
	type: string;
	vote_average: number;
	vote_count: number;
	videos: { results: Video[] };
	images: {
		backdrops: Photo[];
		logos: Photo[];
		posters: Photo[];
	};
	aggregate_credits: {
		cast: AggregateCast[];
	};
	similar: {
		results: Movie[];
	};
	reviews: {
		results: Review[];
	};
	recommendations: {
		results: Movie[];
	};
}

const Show = async ({ params: { id } }: ShowProps) => {
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

export default Show;
