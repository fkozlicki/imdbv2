import { Photo } from '@/app/movies/[id]/page';
import About from '@/components/pages/person/About';
import PersonContent from '@/components/pages/person/PersonContent';
import axios from 'axios';
import React from 'react';

interface PersonCast {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	overview: string;
	character: string;
	credit_id: string;
	vote_count: number;
	vote_average: number;
	popularity: number;
	poster_path: string;
	media_type: string;
}

export interface PersonShowCast extends PersonCast {
	origin_country: string[];
	original_name: string;
	first_air_date: string;
	name: string;
	episode_count: number;
}

export interface PersonMovieCast extends PersonCast {
	original_title: string;
	release_date: string;
	title: string;
	video: boolean;
	order: number;
}

interface Person {
	adult: boolean;
	also_known_as: string[];
	biography: string;
	birthday: string;
	deathday: string | null;
	gender: number;
	homepage: string | null;
	id: number;
	known_for_department: string;
	name: string;
	place_of_birth: string;
	popularity: number;
	profile_path: string;
	images: {
		profiles: Photo[];
	};
	combined_credits: {
		cast: (PersonShowCast | PersonMovieCast)[];
	};
}

const fetchPerson = async (id: string) =>
	(
		await axios.get<Person>(`https://api.themoviedb.org/3/person/${id}`, {
			params: {
				api_key: process.env.API_KEY,
				append_to_response: 'combined_credits,images',
			},
		})
	).data;

const Person = async ({ params: { id } }: { params: { id: string } }) => {
	const data = await fetchPerson(id);
	const {
		name,
		profile_path,
		biography,
		birthday,
		images: { profiles },
		combined_credits: { cast },
	} = data;
	const knownFor = cast.sort((a, b) => b.vote_count - a.vote_count).slice(0, 4);

	return (
		<>
			<About
				name={name}
				image={profile_path}
				biography={biography}
				birthday={birthday}
			/>
			<PersonContent photos={profiles} knownFor={knownFor} />
		</>
	);
};

export default Person;
