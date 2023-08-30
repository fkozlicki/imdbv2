import PersonPreview from '@/components/PersonPreview';
import Box from '@mui/material/Box';
import axios from 'axios';
import React from 'react';
import Person from '../[id]/page';

// https://api.themoviedb.org/3/movie/top_rated

interface PersonPreview {
	id: string;
	profile_path: string;
	name: string;
	known_for_department: string;
	known_for: {
		title: string;
	}[];
}

const fetchPeople = async () =>
	axios.get<{ results: PersonPreview[] }>(
		`
		https://api.themoviedb.org/3/trending/person/week`,
		{
			params: {
				api_key: process.env.API_KEY,
			},
		}
	);

const page = async () => {
	const people = (await fetchPeople()).data;

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				maxWidth: 'lg',
				margin: 'auto',
				paddingY: '50px',
				gap: '24px',
			}}
		>
			{people.results.map(
				({ id, profile_path, known_for_department, name, known_for }) => (
					<PersonPreview
						key={id}
						name={name}
						imageUrl={profile_path}
						department={known_for_department}
						knownFor={known_for}
					/>
				)
			)}
		</Box>
	);
};

export default page;
