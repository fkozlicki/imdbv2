import PersonPreview from '@/components/PersonPreview';
import { fetchPopularPeople } from '@/services/people';
import Box from '@mui/material/Box';
import React from 'react';

const PopularPeople = async () => {
	const people = await fetchPopularPeople();

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
			{people.map(
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

export default PopularPeople;
