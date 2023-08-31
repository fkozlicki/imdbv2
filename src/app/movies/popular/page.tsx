import React from 'react';
import MoviesTable from '@/components/MoviesTable';
import { fetch100PopularMovies } from '@/services/movie';

const PopularMovies = async () => {
	const movies = await fetch100PopularMovies();

	return <MoviesTable data={movies} />;
};

export default PopularMovies;
