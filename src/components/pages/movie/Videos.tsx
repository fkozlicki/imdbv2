import Carousel from '@/components/Carousel';
import SectionTitle from '@/components/SectionTitle';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Image from 'next/image';
import React from 'react';
import { Video } from '@/services/movie';

const Videos = ({ videos }: { videos: Video[] }) => {
	return (
		<Card sx={{ marginBottom: '24px', paddingY: '16px' }}>
			<SectionTitle title="Videos" />
			<Carousel xs={1.2} sm={2.3} md={2}>
				{videos.map((video) => (
					<Box
						key={video.id}
						sx={{
							paddingBottom: '56.5%',
							position: 'relative',
							width: '100%',
						}}
					>
						<Image
							src={`https://img.youtube.com/vi/${video.key}/0.jpg`}
							alt=""
							fill
							sizes="(max-width: 768px) 360px, (max-width: 1200px) 380px, 380px"
							style={{ objectFit: 'cover' }}
						/>
					</Box>
				))}
			</Carousel>
		</Card>
	);
};

export default Videos;
