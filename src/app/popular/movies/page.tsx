import axios from 'axios';
import React from 'react';
import MoviesTable from '@/components/MoviesTable';
import { MoviePreview } from '@/app/page';

const getPopularMovies = (page: number) =>
	axios.get<{ results: MoviePreview[] }>(
		'https://api.themoviedb.org/3/movie/popular',
		{
			params: {
				api_key: process.env.API_KEY,
				page,
			},
		}
	);

const PopularMovies = async () => {
	const results = await Promise.all([
		getPopularMovies(1),
		getPopularMovies(2),
		getPopularMovies(3),
		getPopularMovies(4),
		getPopularMovies(5),
	]);

	const movies = results.map((result) => result.data.results).flatMap((e) => e);

	return <MoviesTable data={movies} />;
};

export default PopularMovies;
