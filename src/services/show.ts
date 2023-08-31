import axios from 'axios';
import { Genre, Media, Preview } from './movie';

export interface ShowPreview extends Preview {
	first_air_date: string;
	name: string;
}

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

export const fetchShows = async (category: string) =>
	(
		await axios.get<{ results: ShowPreview[] }>(
			`https://api.themoviedb.org/3/tv/${category}`,
			{
				params: {
					api_key: process.env.API_KEY,
				},
			}
		)
	).data.results;

export const fetchShow = async (id: string) =>
	(
		await axios.get<Show>(`https://api.themoviedb.org/3/tv/${id}`, {
			params: {
				api_key: process.env.API_KEY,
				append_to_response:
					'videos,images,similar,reviews,recommendations,aggregate_credits',
			},
		})
	).data;

export const fetchShowGenres = async () =>
	(
		await axios.get<{ genres: Genre[] }>(
			`https://api.themoviedb.org/3/genre/tv/list`,
			{
				params: {
					api_key: process.env.API_KEY,
				},
			}
		)
	).data.genres;

export const fetchShowsByGenre = async (genre: string) =>
	(
		await axios.get<{
			page: number;
			results: ShowPreview[];
			total_pages: number;
			total_results: number;
		}>('https://api.themoviedb.org/3/discover/tv', {
			params: {
				api_key: process.env.API_KEY,
				with_genres: genre,
			},
		})
	).data.results;

const fetchPopularShows = async (page: number) =>
	(
		await axios.get<{ results: ShowPreview[] }>(
			`https://api.themoviedb.org/3/tv/popular`,
			{
				params: {
					api_key: process.env.API_KEY,
					page,
				},
			}
		)
	).data.results;

export const fetch100PopularShows = async () =>
	(
		await Promise.all([
			fetchPopularShows(1),
			fetchPopularShows(2),
			fetchPopularShows(3),
			fetchPopularShows(4),
			fetchPopularShows(5),
		])
	).flatMap((shows) => shows);

export const fetchTopShows = async () =>
	(
		await axios.get<{ results: ShowPreview[] }>(
			`https://api.themoviedb.org/3/tv/top_rated`,
			{
				params: {
					api_key: process.env.API_KEY,
				},
			}
		)
	).data.results;
