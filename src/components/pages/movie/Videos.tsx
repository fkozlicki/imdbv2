'use client';

import { Video } from '@/app/movies/[id]/page';
import Carousel from '@/components/Carousel';
import SectionTitle from '@/components/SectionTitle';
import { Box, Card } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Videos = ({ videos }: { videos: Video[] }) => {
	return (
		<Card sx={{ marginBottom: '24px', paddingY: '16px' }}>
			<SectionTitle title="Videos" />
			<Carousel xs={1.2} sm={2.3} md={2}>
				{videos.map((video) => (
					<Link key={video.id} href={`/video/${video.id}`}>
						<Box
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
								style={{ objectFit: 'cover' }}
							/>
						</Box>
					</Link>
				))}
			</Carousel>
		</Card>
	);
};

export default Videos;
