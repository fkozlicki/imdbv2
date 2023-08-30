import { Cast } from '@/app/movies/[id]/page';
import Carousel from '@/components/Carousel';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import React from 'react';
import Grid from '@mui/material/Grid';
import SectionTitle from '@/components/SectionTitle';
import { AggregateCast } from '@/app/shows/[id]/page';
import CastPreview from './CastPreview';

interface TopCastProps {
	cast: (Cast | AggregateCast)[];
}

function isAggregateCast(cast: any): cast is AggregateCast {
	return (cast as AggregateCast).total_episode_count !== undefined;
}

const TopCast = ({ cast }: TopCastProps) => {
	return (
		<Card sx={{ marginBottom: '24px', paddingY: '16px' }}>
			<SectionTitle title="Top Cast" />
			<Box sx={{ display: { md: 'none' } }}>
				<Carousel xs={2.3} sm={4.3} md={4}>
					{cast.map((person, index) => {
						const { id, name, profile_path } = person;
						if (isAggregateCast(person)) {
							const {
								total_episode_count,
								roles: {
									'0': { character },
								},
							} = person;
							return (
								<CastPreview
									key={index}
									id={id}
									name={name}
									photo={profile_path}
									character={character}
									episodes={total_episode_count}
								/>
							);
						} else {
							const character = person.character;
							return (
								<CastPreview
									key={index}
									id={id}
									name={name}
									photo={profile_path}
									character={character}
								/>
							);
						}
					})}
				</Carousel>
			</Box>
			<Box sx={{ display: { xs: 'none', md: 'block' } }}>
				<Grid container spacing={4} padding={2}>
					{cast.map((person, index) => {
						const { id, name, profile_path } = person;
						if (isAggregateCast(person)) {
							const {
								total_episode_count,
								roles: {
									'0': { character },
								},
							} = person;
							return (
								<Grid key={index} item xs={6}>
									<CastPreview
										key={index}
										id={id}
										name={name}
										photo={profile_path}
										character={character}
										episodes={total_episode_count}
									/>
								</Grid>
							);
						} else {
							const character = person.character;
							return (
								<Grid key={index} item xs={6}>
									<CastPreview
										key={index}
										id={id}
										name={name}
										photo={profile_path}
										character={character}
									/>
								</Grid>
							);
						}
					})}
				</Grid>
			</Box>
		</Card>
	);
};

export default TopCast;
