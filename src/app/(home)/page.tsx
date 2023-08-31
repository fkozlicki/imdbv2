import MoviesCarousel from '@/components/pages/home/MoviesCarousel';
import { fetchMovies } from '@/services/movie';
import { fetchShows } from '@/services/show';
import Box from '@mui/material/Box';

export default async function Home() {
	const [popularMovies, upcomingMovies, topRatedMovies, popularShows] =
		await Promise.all([
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
			<MoviesCarousel title="Popular Movies" previews={popularMovies} />
			<MoviesCarousel title="Upcoming Movies" previews={upcomingMovies} />
			<MoviesCarousel title="Top Rated Movies" previews={topRatedMovies} />
			<MoviesCarousel title="Popular TV Shows" previews={popularShows} />
		</Box>
	);
}
