import { Photo } from '@/app/movies/[id]/page';
import Carousel from '@/components/Carousel';
import SectionTitle from '@/components/SectionTitle';
import { Box, Card } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Photos = ({ photos }: { photos: Photo[] }) => {
	return (
		<Card sx={{ marginBottom: '24px', paddingY: '16px' }}>
			<SectionTitle title="Photos" />
			<Carousel xs={2.3} sm={4.3} md={4}>
				{photos.map((photo, index) => (
					<Link key={index} href={`/photo`}>
						<Box
							sx={{
								paddingBottom: '100%',
								position: 'relative',
								width: '100%',
							}}
						>
							<Image
								src={`http://image.tmdb.org/t/p/w500/${photo.file_path}`}
								alt=""
								fill
								style={{
									objectFit: 'cover',
								}}
							/>
						</Box>
					</Link>
				))}
			</Carousel>
		</Card>
	);
};

export default Photos;
