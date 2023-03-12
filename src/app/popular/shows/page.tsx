import axios from 'axios';
import React from 'react';
import PopularTable from '@/components/PopularTable';

export interface Show {
	backdrop_path: string;
	first_air_date: string;
	genre_ids: number[];
	id: number;
	name: string;
	origin_country: string[];
	original_language: string[];
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	vote_average: number;
	vote_count: number;
}

const getPopularShows = (page: number) =>
	axios.get(`https://api.themoviedb.org/3/tv/popular`, {
		params: {
			api_key: process.env.API_KEY,
			page,
		},
	});

const PopularShows = async () => {
	const results = await Promise.all([
		getPopularShows(1),
		getPopularShows(2),
		getPopularShows(3),
		getPopularShows(4),
		getPopularShows(5),
	]);

	const shows = results
		.map((result) => result.data.results)
		.flatMap((e) => e) as Show[];

	return <PopularTable data={shows} />;
};

export default PopularShows;
