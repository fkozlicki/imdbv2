import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React from 'react';

interface PersonPreviewProps {
	imageUrl: string;
	name: string;
	department: string;
	knownFor: {
		title: string;
	}[];
}

const PersonPreview = ({
	imageUrl,
	name,
	department,
	knownFor,
}: PersonPreviewProps) => {
	const _knownFor = knownFor
		.map((movieOrShow) => {
			if ('name' in movieOrShow) {
				return movieOrShow.name;
			} else {
				return movieOrShow.title;
			}
		})
		.join(', ');

	return (
		<Box
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: '16px',
			}}
		>
			<Box sx={{ display: 'flex', borderRadius: '100%', overflow: 'hidden' }}>
				<Image
					src={`http://image.tmdb.org/t/p/w235_and_h235_bestv2/${imageUrl}`}
					alt=""
					width={60}
					height={60}
				/>
			</Box>
			<Box>
				<Typography>{name}</Typography>
				<Typography fontSize={14}>{department}</Typography>
				<Typography fontSize={14}>{_knownFor}</Typography>
			</Box>
		</Box>
	);
};

export default PersonPreview;
