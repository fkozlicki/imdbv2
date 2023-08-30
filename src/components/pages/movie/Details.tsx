import { Details } from '@/app/movies/[id]/page';
import SectionTitle from '@/components/SectionTitle';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import React from 'react';

interface DetailsProps {
	details: Details;
}

const Details = ({ details }: DetailsProps) => {
	const {
		release_date,
		production_countries,
		spoken_languages,
		production_companies,
	} = details;

	return (
		<Card sx={{ marginBottom: '24px', paddingY: 2 }}>
			<SectionTitle title="Details" />
			<List>
				<Divider></Divider>
				<ListItem>
					<ListItemText>
						<Typography component="span" marginRight="16px" fontWeight={600}>
							Release date
						</Typography>
						<Typography component="span" marginRight="12px">
							{release_date}
						</Typography>
					</ListItemText>
				</ListItem>
				<Divider></Divider>
				<ListItem>
					<ListItemText>
						<Typography component="span" marginRight="16px" fontWeight={600}>
							Country of origin
						</Typography>
						{production_countries.map(({ name }) => (
							<Typography key={name} component="span" marginRight="12px">
								{name}
							</Typography>
						))}
					</ListItemText>
				</ListItem>
				<Divider></Divider>
				<ListItem>
					<ListItemText>
						<Typography component="span" marginRight="16px" fontWeight={600}>
							Language
						</Typography>
						{spoken_languages.map(({ name, english_name }) => (
							<Typography key={name} component="span" marginRight="12px">
								{english_name}
							</Typography>
						))}
					</ListItemText>
				</ListItem>
				<Divider></Divider>
				<ListItem>
					<ListItemText>
						<Typography component="span" marginRight="16px" fontWeight={600}>
							Production companies
						</Typography>
						{production_companies.map(({ name }) => (
							<Typography key={name} component="span" marginRight="12px">
								{name}
							</Typography>
						))}
					</ListItemText>
				</ListItem>
				<Divider></Divider>
			</List>
		</Card>
	);
};

export default Details;
