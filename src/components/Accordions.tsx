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
				<AccordionDetails>
					<Typography>Top 250 Movies</Typography>
					<Typography>Top 250 Movies</Typography>
					<Typography>Top 250 Movies</Typography>
				</AccordionDetails>
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
					<Typography>Movies</Typography>
				</StyledAccordionSummary>
				<AccordionDetails>
					<Typography>Top 250 Movies</Typography>
					<Typography>Top 250 Movies</Typography>
					<Typography>Top 250 Movies</Typography>
				</AccordionDetails>
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
					<Typography>Movies</Typography>
				</StyledAccordionSummary>
				<AccordionDetails>
					<Typography>Top 250 Movies</Typography>
					<Typography>Top 250 Movies</Typography>
					<Typography>Top 250 Movies</Typography>
				</AccordionDetails>
			</StyledAccordion>
		</div>
	);
}

const StyledAccordion = styled(Accordion)(({}) => ({
	margin: '0 !important',
}));
const StyledAccordionSummary = styled(AccordionSummary)(({}) => ({
	'.MuiAccordionSummary-content': {
		marginBlock: '12px !important',
	},
	minHeight: '48px !important',
}));
