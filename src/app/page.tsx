import MoviesCarousel from '@/components/pages/home/MoviesCarousel';
import Box from '@mui/material/Box';
import axios from 'axios';

interface Preview {
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

export interface ShowPreview extends Preview {
	first_air_date: string;
	name: string;
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
		<Box
			component="main"
			sx={{
				paddingBlock: '50px',
			}}
		>
			<MoviesCarousel title="Popular Movies" previews={popular} />
			<MoviesCarousel title="Upcoming Movies" previews={upcoming} />
			<MoviesCarousel title="Top Rated Movies" previews={top_rated} />
			<MoviesCarousel title="Popular TV Shows" previews={popular_shows} />
		</Box>
	);
}
