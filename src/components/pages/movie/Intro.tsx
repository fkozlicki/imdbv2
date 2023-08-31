'use client';

import {
	Card,
	Chip,
	Typography,
	Box,
	Container,
	Button,
	styled,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import YouTube from 'react-youtube';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Cast, Crew, Genre, Video } from '@/services/movie';
import { AggregateCast, CreatedBy } from '@/services/show';

interface IntroProps {
	title: string;
	releaseDate: string;
	overview: string;
	genres: Genre[];
	rating: number;
	voteCount: number;
	videosCount: number;
	imagesCount: number;
	runtime: number;
	trailer?: Video;
	image: string;
	cast: (Cast | AggregateCast)[];
	crew?: Crew[];
	createdBy?: CreatedBy[];
}

const toHoursAndMinutes = (totalMinutes: number): string => {
	{
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;

		return `${hours > 0 ? `${hours}h ` : ''}${minutes}m`;
	}
};

const Intro = ({
	title,
	releaseDate,
	overview,
	genres,
	rating,
	voteCount,
	videosCount,
	imagesCount,
	runtime,
	trailer,
	image,
	cast,
	crew,
	createdBy,
}: IntroProps) => {
	const opts = {
		height: '100%',
		width: '100%',
		playerVars: {
			autoplay: 1,
			controls: 0,
			widget_referrer: 0,
			rel: 0,
			playsinline: 0,
			fs: 0,
			hl: 0,
		},
	};
	const director = crew?.find((person) => person.job === 'Director');
	const screenplay = crew?.find((person) => person.job === 'Screenplay');
	const story = crew?.find((person) => person.job === 'Story');
	const stars = cast.sort((a, b) => b.popularity - a.popularity).slice(0, 3);

	return (
		<Card sx={{ paddingBlock: '32px', marginBottom: '32px' }}>
			<Container
				sx={{
					marginBottom: '10px',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Box>
					<Typography
						sx={{
							fontSize: {
								xs: '32px',
								sm: '48px',
							},
						}}
					>
						{title}
					</Typography>
					<Typography fontSize={14}>
						{releaseDate.substring(0, 4)} • {toHoursAndMinutes(runtime)}
					</Typography>
				</Box>
				<Box
					sx={{
						display: {
							xs: 'none',
							md: 'block',
						},
					}}
				>
					<Typography
						textTransform="uppercase"
						fontSize={12}
						fontWeight={800}
						letterSpacing={1.5}
						color="text.secondary"
					>
						TMDB Rating
					</Typography>
					<Box paddingX="10px" display="flex" alignItems="center">
						<Box
							fontSize="28px"
							paddingX="5px"
							display="flex"
							alignItems="center"
						>
							<StarIcon color="warning" fontSize="inherit" />
						</Box>
						<Box>
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<Typography fontSize={20} fontWeight={600} lineHeight={1}>
									{rating.toFixed(1)}
								</Typography>
								<Typography
									color="text.secondary"
									lineHeight={1}
									marginLeft="5px"
								>
									/10
								</Typography>
							</Box>
							<Typography color="text.secondary" fontSize={12}>
								{voteCount}
							</Typography>
						</Box>
					</Box>
				</Box>
			</Container>
			<Container
				disableGutters
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					padding: { sm: '0 24px' },
					position: 'relative',
					marginBottom: '32px',
				}}
			>
				<Box
					sx={{
						height: 'auto',
						width: { xs: '25%', sm: 'calc(25% - 2px)', md: 'calc(20% - 4px)' },
						position: { xs: 'absolute', sm: 'static' },
						bottom: 'calc(53px + 10px)',
						left: '24px',
						zIndex: 1000,
					}}
				>
					<Box
						sx={{ paddingBottom: '148%', position: 'relative', width: '100%' }}
					>
						<Image
							src={`http://image.tmdb.org/t/p/w500/${image}`}
							alt=""
							fill
							sizes="(max-width: 768px) 150px, (max-width: 1200px) 230px, 230px"
						/>
					</Box>
				</Box>
				<Box
					sx={{
						height: '100%',
						width: {
							xs: '100%',
							sm: 'calc(75% - 2px)',
							md: 'calc(60% - 4px)',
						},
						marginRight: { md: '4px' },
						marginLeft: { sm: '4px' },
					}}
				>
					<Box
						sx={{
							paddingBottom: { xs: '66%', sm: '48.8%' },
							position: 'relative',
							width: '100%',
						}}
					>
						{trailer ? (
							<VideoPlayer
								videoId={trailer.key}
								opts={opts}
								onReady={(e) => e.target.mute()}
							/>
						) : (
							<Box
								sx={{
									position: 'absolute',
									top: '50%',
									left: '50%',
									transform: 'translate(-50%, -50%)',
								}}
							>
								No trailer available
							</Box>
						)}
					</Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						gap: '4px',
						flexDirection: { md: 'column' },
						flex: '1',
						marginTop: { sm: '4px', md: 0 },
					}}
				>
					<VideoLink LinkComponent={Link} href="/" variant="contained">
						{videosCount} videos
					</VideoLink>
					<VideoLink LinkComponent={Link} href="/" variant="contained">
						{imagesCount} photos
					</VideoLink>
				</Box>
			</Container>
			<Container sx={{ marginBottom: '24px' }}>
				<Box marginBottom="24px" display="flex" gap="10px">
					{genres.map(({ name }) => (
						<Chip
							key={name}
							label={name}
							variant="outlined"
							size="medium"
							sx={{ fontWeight: 600 }}
						/>
					))}
				</Box>
				<Typography>{overview}</Typography>
			</Container>
			<Container
				sx={{
					display: {
						md: 'none',
					},
					marginBottom: 2,
				}}
			>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
					<StarIcon color="warning" />
					{rating.toFixed(1)}/10 • {voteCount}
				</Box>
			</Container>
			<Container>
				<List>
					<Divider></Divider>
					{director && (
						<ListItem sx={{ paddingX: 0 }}>
							<ListItemText>
								<Typography
									component="span"
									marginRight="16px"
									fontWeight={600}
								>
									Director
								</Typography>
								<Typography component="span" marginRight="12px">
									{director?.name}
								</Typography>
							</ListItemText>
						</ListItem>
					)}
					{createdBy && createdBy.length > 0 && (
						<ListItem sx={{ paddingX: 0 }}>
							<ListItemText>
								<Typography
									component="span"
									marginRight="16px"
									fontWeight={600}
								>
									Created by
								</Typography>
								{createdBy.map((person, index) => (
									<Typography key={index} component="span" marginRight="12px">
										{person.name}
									</Typography>
								))}
							</ListItemText>
						</ListItem>
					)}
					<Divider></Divider>
					{screenplay && story && (
						<>
							<ListItem sx={{ paddingX: 0 }}>
								<ListItemText>
									<Typography
										component="span"
										marginRight="16px"
										fontWeight={600}
									>
										Writers
									</Typography>
									<Typography component="span" marginRight="12px">
										{screenplay.name} (screenplay by)
									</Typography>
									<Typography component="span" marginRight="12px">
										{story.name} (story by)
									</Typography>
								</ListItemText>
							</ListItem>
							<Divider></Divider>
						</>
					)}
					<ListItem sx={{ paddingX: 0 }}>
						<ListItemText>
							<Typography component="span" marginRight="16px" fontWeight={600}>
								Stars
							</Typography>
							{stars.map((star) => (
								<Typography component="span" key={star.name} marginRight="12px">
									{star.name}
								</Typography>
							))}
						</ListItemText>
					</ListItem>
					<Divider></Divider>
				</List>
			</Container>
		</Card>
	);
};

export default Intro;

const VideoLink = styled(Button)(({ theme }) => ({
	display: 'flex',
	flex: '1',
	borderTopLeftRadius: 0,
	borderTopRightRadius: 0,
	[theme.breakpoints.up('md')]: {
		borderTopRightRadius: '4px',
		borderBottomLeftRadius: 0,
	},
	background: theme.palette.action.selected,
	'&:hover': {
		background: theme.palette.action.disabled,
	},
	fontSize: 12,
	fontWeight: 600,
	color: theme.palette.text.primary,
	paddingBlock: theme.spacing(2),
}));

const VideoPlayer = styled(YouTube)(() => ({
	position: 'absolute',
	width: '100%',
	height: '100%',
	top: 0,
}));
