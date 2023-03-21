import MoviesCarousel from '@/components/MoviesCarousel';
import axios from 'axios';

interface Preview {
	vote_count: number;
	vote_average: number;
	poster_path: string;
	popularity: number;
	overview: string;
	original_language: string;
	id: number;
	genre_ids: number[];
	backdrop_path: string;
}

export interface MoviePreview extends Preview {
	adult: boolean;
	original_title: string;
	release_date: string;
	title: string;
	video: false;
}

export interface ShowPreview extends Preview {
	first_air_date: string;
	name: string;
	origin_country: string[];
	original_name: string;
}

const fetchMovies = (category: string) =>
	axios.get<{ results: MoviePreview[] }>(
		`https://api.themoviedb.org/3/movie/${category}`,
		{
			params: {
				api_key: process.env.API_KEY,
			},
		}
	);
const fetchShows = (category: string) =>
	axios.get<{ results: ShowPreview[] }>(
		`https://api.themoviedb.org/3/tv/${category}`,
		{
			params: {
				api_key: process.env.API_KEY,
			},
		}
	);

export default async function Home() {
	const {
		'0': {
			data: { results: popular },
		},
		'1': {
			data: { results: upcoming },
		},
		'2': {
			data: { results: top_rated },
		},
		'3': {
			data: { results: popular_shows },
		},
	} = await Promise.all([
		fetchMovies('popular'),
		fetchMovies('upcoming'),
		fetchMovies('top_rated'),
		fetchShows('popular'),
	]);

	return (
		<main style={{ paddingBlock: '50px' }}>
			<MoviesCarousel title="Popular Movies" previews={popular} />
			<MoviesCarousel title="Upcoming Movies" previews={upcoming} />
			<MoviesCarousel title="Top Rated Movies" previews={top_rated} />
			<MoviesCarousel title="Popular TV Shows" previews={popular_shows} />
		</main>
	);
}
