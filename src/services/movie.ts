import axios from 'axios';

export interface Preview {
	vote_count: number;
	vote_average: number;
	poster_path: string;
	overview: string;
	id: number;
	genre_ids: number[];
}

export interface MoviePreview extends Preview {
	release_date: string;
	title: string;
}

export interface Cast {
	id: number;
	name: string;
	popularity: number;
	profile_path: string;
	character: string;
}

export interface Crew {
	name: string;
	job: string;
}

export interface Video {
	id: number;
	key: string;
	type: string;
}

export interface Photo {
	file_path: string;
}

export interface Genre {
	id: string;
	name: string;
}

export interface Review {
	author: string;
	author_details: {
		rating: number;
	};
	content: string;
	created_at: string;
}

export interface Company {
	name: string;
}

export interface Country {
	name: string;
}

export interface Language {
	english_name: string;
	name: string;
}

export interface Media {
	id: number;
	vote_average: number;
	vote_count: number;
	status: string;
	overview: string;
	poster_path: string;
	images: {
		posters: Photo[];
	};
	reviews: {
		results: Review[];
	};
	recommendations: {
		results: Movie[];
	};
	genres: Genre[];
	production_companies: Company[];
	production_countries: Country[];
	videos: {
		results: Video[];
	};
	spoken_languages: Language[];
}

export interface Movie extends Media {
	title: string;
	release_date: string;
	runtime: number;
	budget: number;
	revenue: number;
	credits: {
		cast: Cast[];
		crew: Crew[];
	};
	similar: {
		results: Movie[];
	};
}

export const fetchMovies = async (category: string) =>
	(
		await axios.get<{ results: MoviePreview[] }>(
			`https://api.themoviedb.org/3/movie/${category}`,
			{
				params: {
					api_key: process.env.API_KEY,
				},
			}
		)
	).data.results;

export const fetchMovie = async (id: string) =>
	(
		await axios.get<Movie>(`https://api.themoviedb.org/3/movie/${id}`, {
			params: {
				api_key: process.env.API_KEY,
				append_to_response:
					'videos,images,credits,similar,reviews,recommendations',
			},
		})
	).data;

export const fetchMovieGenres = async () =>
	(
		await axios.get<{ genres: Genre[] }>(
			`https://api.themoviedb.org/3/genre/movie/list`,
			{
				params: {
					api_key: process.env.API_KEY,
				},
			}
		)
	).data.genres;

export const fetchMoviesByGenre = async (genre: string) =>
	(
		await axios.get<{
			page: number;
			results: MoviePreview[];
			total_pages: number;
			total_results: number;
		}>('https://api.themoviedb.org/3/discover/movie', {
			params: {
				api_key: process.env.API_KEY,
				with_genres: genre,
			},
		})
	).data.results;

const fetchPopularMovies = async (page: number) =>
	(
		await axios.get<{ results: MoviePreview[] }>(
			'https://api.themoviedb.org/3/movie/popular',
			{
				params: {
					api_key: process.env.API_KEY,
					page,
				},
			}
		)
	).data.results;

export const fetch100PopularMovies = async () =>
	(
		await Promise.all([
			fetchPopularMovies(1),
			fetchPopularMovies(2),
			fetchPopularMovies(3),
			fetchPopularMovies(4),
			fetchPopularMovies(5),
		])
	).flatMap((movies) => movies);

export const fetchTopMovies = async () =>
	(
		await axios.get<{ results: MoviePreview[] }>(
			`https://api.themoviedb.org/3/movie/top_rated`,
			{
				params: {
					api_key: process.env.API_KEY,
				},
			}
		)
	).data.results;
