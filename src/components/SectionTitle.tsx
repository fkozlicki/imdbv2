import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface SectionTitleProps {
	title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
	return (
		<Box
			paddingLeft="16px"
			marginBottom={1.5}
			sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
		>
			<Box
				sx={{
					width: '4px',
					height: { xs: '24px', sm: '32px' },
					background: 'yellow',
				}}
			></Box>
			<Typography
				fontWeight={600}
				sx={{
					fontSize: {
						xs: '24px',
						sm: '32px',
					},
					color: 'text.primary',
				}}
			>
				{title}
			</Typography>
		</Box>
	);
};

export default SectionTitle;
