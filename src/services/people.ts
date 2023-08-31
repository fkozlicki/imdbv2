import axios from 'axios';
import { Photo } from './movie';

interface PersonPreview {
	id: string;
	profile_path: string;
	name: string;
	known_for_department: string;
	known_for: {
		title: string;
	}[];
}

interface PersonCast {
	id: number;
	character: string;
	vote_count: number;
	vote_average: number;
	poster_path: string;
}

export interface PersonShowCast extends PersonCast {
	first_air_date: string;
	name: string;
	episode_count: number;
}

export interface PersonMovieCast extends PersonCast {
	release_date: string;
	title: string;
}

interface Person {
	biography: string;
	birthday: string;
	name: string;
	profile_path: string;
	images: {
		profiles: Photo[];
	};
	combined_credits: {
		cast: (PersonShowCast | PersonMovieCast)[];
	};
}

export const fetchTrendingPeople = async () =>
	(
		await axios.get<{ results: PersonPreview[] }>(
			`https://api.themoviedb.org/3/trending/person/week`,
			{
				params: {
					api_key: process.env.API_KEY,
				},
			}
		)
	).data.results;

export const fetchPopularPeople = async () =>
	(
		await axios.get<{ results: PersonPreview[] }>(
			`https://api.themoviedb.org/3/person/popular`,
			{
				params: {
					api_key: process.env.API_KEY,
				},
			}
		)
	).data.results;

export const fetchPerson = async (id: string) =>
	(
		await axios.get<Person>(`https://api.themoviedb.org/3/person/${id}`, {
			params: {
				api_key: process.env.API_KEY,
				append_to_response: 'combined_credits,images',
			},
		})
	).data;
