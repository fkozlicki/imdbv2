import React, { SyntheticEvent, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material';
import Link from 'next/link';

export default function Accordions() {
	const [expanded, setExpanded] = useState<string | false>(false);

	const handleChange =
		(panel: string) => (_: SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<div>
			<StyledAccordion
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
			>
				<StyledAccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography>Movies</Typography>
				</StyledAccordionSummary>
				<StyledAccordionDetails>
					<StyledLink href="/movies/popular">Most Popular Movies</StyledLink>
					<StyledLink href="/movies/genres">Browse Movies By Genre</StyledLink>
					<StyledLink href="/movies/top">Top Movies</StyledLink>
				</StyledAccordionDetails>
			</StyledAccordion>
			<StyledAccordion
				expanded={expanded === 'panel2'}
				onChange={handleChange('panel2')}
			>
				<StyledAccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2bh-content"
					id="panel2bh-header"
				>
					<Typography>TV Shows</Typography>
				</StyledAccordionSummary>
				<StyledAccordionDetails>
					<StyledLink href="">What&apos;s on TV & Streaming</StyledLink>
					<StyledLink href="/shows/top">Top TV Shows</StyledLink>
					<StyledLink href="/shows/popular">Most Popular TV Shows</StyledLink>
					<StyledLink href="/shows/genres">Browse TV Shows by Genre</StyledLink>
				</StyledAccordionDetails>
			</StyledAccordion>
			<StyledAccordion
				expanded={expanded === 'panel3'}
				onChange={handleChange('panel3')}
			>
				<StyledAccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel3bh-content"
					id="panel3bh-header"
				>
					<Typography>Celebs</Typography>
				</StyledAccordionSummary>
				<StyledAccordionDetails>
					<StyledLink href="/people/trending">Trending Celebs</StyledLink>
					<StyledLink href="/people/popular">Most Popular Celebs</StyledLink>
				</StyledAccordionDetails>
			</StyledAccordion>
		</div>
	);
}

const StyledLink = styled(Link)(({ theme }) => ({
	padding: '10px 16px',
	display: 'block',
	'&:hover': {
		background: theme.palette.action.hover,
	},
}));

const StyledAccordionDetails = styled(AccordionDetails)(() => ({
	padding: 0,
}));

const StyledAccordion = styled(Accordion)(() => ({
	margin: '0 !important',
}));

const StyledAccordionSummary = styled(AccordionSummary)(() => ({
	'.MuiAccordionSummary-content': {
		marginBlock: '12px !important',
	},
	minHeight: '48px !important',
}));
