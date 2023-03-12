import MoviesCarousel from '@/components/MoviesCarousel';
import axios from 'axios';

export interface MoviePreview {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: false;
	vote_average: number;
	vote_count: number;
}

const fetchMovies = (category: string) =>
	axios.get(`https://api.themoviedb.org/3/movie/${category}`, {
		params: {
			api_key: process.env.API_KEY,
		},
	});

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
	} = await Promise.all([
		fetchMovies('popular'),
		fetchMovies('upcoming'),
		fetchMovies('top_rated'),
	]);

	return (
		<main style={{ paddingBlock: '50px' }}>
			<MoviesCarousel title="Popular Movies" movies={popular} />
			<MoviesCarousel title="Upcoming Movies" movies={upcoming} />
			<MoviesCarousel title="Top Rated Movies" movies={top_rated} />
		</main>
	);
}
