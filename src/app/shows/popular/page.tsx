import React from 'react';
import PopularTable from '@/components/PopularTable';
import { fetch100PopularShows } from '@/services/show';

const PopularShows = async () => {
	const shows = await fetch100PopularShows();

	return <PopularTable data={shows} />;
};

export default PopularShows;
