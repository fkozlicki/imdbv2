import axios from 'axios';
import React from 'react';
import PopularTable from '@/components/PopularTable';
import { ShowPreview } from '@/app/page';

const getPopularShows = (page: number) =>
	axios.get<{ results: ShowPreview[] }>(
		`https://api.themoviedb.org/3/tv/popular`,
		{
			params: {
				api_key: process.env.API_KEY,
				page,
			},
		}
	);

const PopularShows = async () => {
	const results = await Promise.all([
		getPopularShows(1),
		getPopularShows(2),
		getPopularShows(3),
		getPopularShows(4),
		getPopularShows(5),
	]);

	const shows = results.map((result) => result.data.results).flatMap((e) => e);

	return <PopularTable data={shows} />;
};

export default PopularShows;
