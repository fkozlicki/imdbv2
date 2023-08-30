import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React from 'react';

interface AboutProps {
	name: string;
	image: string;
	biography: string;
	birthday: string;
}

const About = ({ name, image, biography, birthday }: AboutProps) => {
	return (
		<Card sx={{ paddingBlock: 4, marginBottom: 4 }}>
			<Container>
				<Typography
					sx={{
						fontSize: {
							xs: '32px',
							sm: '48px',
						},
					}}
				>
					{name}
				</Typography>
				<Box sx={{ display: 'flex', gap: 6 }}>
					<Box sx={{ width: 'calc(30%)' }}>
						<Box
							sx={{
								paddingBottom: '148%',
								position: 'relative',
								width: '100%',
							}}
						>
							<Image
								src={`http://image.tmdb.org/t/p/w500/${image}`}
								alt=""
								fill
								sizes="(max-width: 768px) 150px, (max-width: 1200px) 230px, 230px"
							/>
						</Box>
					</Box>
					<Box sx={{ width: '70%' }}>
						<Typography fontSize={18} fontWeight={600} marginBottom={1}>
							Biography:
						</Typography>
						<Typography marginBottom={2}>{biography}</Typography>
						<Typography>
							<Typography component="span" fontWeight={600} marginRight={1}>
								Born
							</Typography>
							{new Intl.DateTimeFormat('en-US', {
								month: 'long',
								day: '2-digit',
								year: 'numeric',
							}).format(new Date(birthday))}
						</Typography>
					</Box>
				</Box>
			</Container>
		</Card>
	);
};

export default About;
