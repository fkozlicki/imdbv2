import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CastPreviewProps {
	id: number;
	photo: string;
	name: string;
	character: string;
	episodes?: number;
}

const CastPreview = ({
	id,
	photo,
	name,
	character,
	episodes,
}: CastPreviewProps) => {
	return (
		<Link href={`/people/${id}`}>
			<Box
				sx={{
					display: { md: 'flex' },
					alignItems: { md: 'center' },
					gap: { md: '16px' },
				}}
			>
				<Box
					sx={{
						paddingBottom: { xs: '100%', md: '96px' },
						position: 'relative',
						width: { xs: '100%', md: '96px' },
						marginBottom: '10px',
					}}
				>
					{photo ? (
						<Image
							src={`http://image.tmdb.org/t/p/w500/${photo}`}
							alt=""
							fill
							style={{
								objectFit: 'cover',
								borderRadius: '100%',
								objectPosition: 'top',
							}}
						/>
					) : (
						<Avatar
							sx={{
								width: '100%',
								height: '100%',
								position: 'absolute',
								top: 0,
								left: 0,
								fontSize: '80px',
							}}
						>
							<PersonIcon fontSize="inherit" />
						</Avatar>
					)}
				</Box>
				<Box>
					<Typography
						fontSize={16}
						fontWeight={600}
						sx={{ textAlign: { xs: 'center', md: 'start' } }}
					>
						{name}
					</Typography>
					<Typography
						fontSize={14}
						color="GrayText"
						sx={{ textAlign: { xs: 'center', md: 'start' } }}
					>
						{character}
					</Typography>
					{episodes && (
						<Typography
							fontSize={14}
							color="GrayText"
							sx={{ textAlign: { xs: 'center', md: 'start' } }}
						>
							Episodes: {episodes}
						</Typography>
					)}
				</Box>
			</Box>
		</Link>
	);
};

export default CastPreview;
