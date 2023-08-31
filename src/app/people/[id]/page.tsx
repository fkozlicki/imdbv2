import About from '@/components/pages/person/About';
import PersonContent from '@/components/pages/person/PersonContent';
import { fetchPerson } from '@/services/people';

import React from 'react';

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
