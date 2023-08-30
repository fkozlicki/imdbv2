import { PersonMovieCast, PersonShowCast } from '@/app/people/[id]/page';
import SectionTitle from '@/components/SectionTitle';
import { Card, Grid } from '@mui/material';
import React from 'react';
import KnownForPreview from './KnownForPreview';

interface KnownForProps {
	cast: (PersonShowCast | PersonMovieCast)[];
}

function isShowCast(cast: any): cast is PersonShowCast {
	return (cast as PersonShowCast).name !== undefined;
}

const KnownFor = ({ cast }: KnownForProps) => {
	return (
		<Card sx={{ marginBottom: 4, paddingY: 2 }}>
			<SectionTitle title="Known for" />
			<Grid container paddingX={2} spacing={2}>
				{cast.map((data, index) => {
					const { vote_average, character, poster_path, id } = data;
					if (isShowCast(data)) {
						const { first_air_date, episode_count, name } = data;
						return (
							<Grid key={index} item xs={12} md={6}>
								<KnownForPreview
									title={name}
									year={first_air_date}
									image={poster_path}
									href={`/shows/${id}`}
									isShow
									rating={vote_average}
									character={character}
									episodes={episode_count}
								/>
							</Grid>
						);
					} else {
						const { release_date, title } = data;
						return (
							<Grid key={index} item xs={12} md={6}>
								<KnownForPreview
									title={title}
									year={release_date}
									image={poster_path}
									href={`/movies/${id}`}
									rating={vote_average}
									character={character}
								/>
							</Grid>
						);
					}
				})}
			</Grid>
		</Card>
	);
};

export default KnownFor;
