import SectionTitle from '@/components/SectionTitle';
import { Company, Country, Language } from '@/services/movie';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import React from 'react';

interface DetailsProps {
	releaseDate: string;
	productionCountries: Country[];
	spokenLanguages: Language[];
	productionCompanies: Company[];
}

const Details = ({
	productionCompanies,
	productionCountries,
	releaseDate,
	spokenLanguages,
}: DetailsProps) => {
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
							{releaseDate}
						</Typography>
					</ListItemText>
				</ListItem>
				<Divider></Divider>
				<ListItem>
					<ListItemText>
						<Typography component="span" marginRight="16px" fontWeight={600}>
							Country of origin
						</Typography>
						{productionCountries.map(({ name }) => (
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
						{spokenLanguages.map(({ name, english_name }) => (
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
						{productionCompanies.map(({ name }) => (
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
