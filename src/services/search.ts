import axios from 'axios';

interface SearchedPerson {
	id: number;
	media_type: 'person';
	name: string;
	profile_path: string;
}

interface SearchedShow {
	id: number;
	media_type: 'tv';
	name: string;
	poster_path: string;
	first_air_date: string;
}

interface SearchedMovie {
	id: number;
	media_type: 'movie';
	title: string;
	poster_path: string;
	release_date: string;
}

export type SearchResult = SearchedPerson | SearchedShow | SearchedMovie;

export const getSearch = async (value: string) =>
	(
		await axios.get<{
			results: SearchResult[];
		}>(`https://api.themoviedb.org/3/search/multi`, {
			params: {
				api_key: process.env.NEXT_PUBLIC_API_KEY,
				query: value,
			},
		})
	).data.results;
