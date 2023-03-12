import { Box, Container, Drawer, IconButton } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import Link from 'next/link';

interface MenuProps {
	isOpen: boolean;
	closeMenu: () => void;
}

const Menu = ({ isOpen, closeMenu }: MenuProps) => {
	return (
		<Drawer anchor="top" open={isOpen}>
			<Box sx={{ height: '100vh', background: '#1f1f1f' }}>
				<Container sx={{ paddingBlock: '3rem' }}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							marginBottom: '2rem',
						}}
					>
						<Box
							sx={{
								background: '#f5c518',
								padding: '10px',
								borderRadius: '5px',
							}}
						>
							LOGO
						</Box>
						<IconButton
							aria-label="close menu"
							onClick={closeMenu}
							sx={{
								background: '#f5c518',
								'&:hover': {
									background: '#cea514',
								},
								color: 'black',
							}}
						>
							<CloseIcon />
						</IconButton>
					</Box>
					<Grid container spacing={4} color="white">
						<Grid item xs={4}>
							<SectionHeader>Most Popular</SectionHeader>
							<StyledLink href="/popular/movies">
								Most Popular Movies
							</StyledLink>
							<StyledLink href="/popular/shows">
								Most Popular TV Shows
							</StyledLink>
							<Typography>Most Popular Video Games</Typography>
							<Typography>Most Popular Music Videos</Typography>
							<Typography>Most Popular Podcasts</Typography>
						</Grid>
						<Grid item xs={4}>
							<SectionHeader>TV Shows</SectionHeader>
							<Typography>What&apos;s on TV & Streaming</Typography>
							<Typography>Top 250 TV Shows</Typography>
							<Typography>TV Shows</Typography>
							<Typography>TV Shows</Typography>
						</Grid>
						<Grid item xs={4}>
							<SectionHeader>Movies</SectionHeader>
							<Typography>Browse Movies by Genre</Typography>
							<Typography>Top 250 Movies</Typography>
							<Typography>Movies</Typography>
							<Typography>Movies</Typography>
						</Grid>
						<Grid item xs={4}>
							<SectionHeader>Celebs</SectionHeader>
							<Typography>Born Today</Typography>
							<Typography>Most Popular Celebs</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Drawer>
	);
};

export default Menu;

const SectionHeader = styled(Typography)(() => ({
	fontSize: '24px',
	fontWeight: 700,
	marginBottom: 10,
}));

const StyledLink = styled(Link)(() => ({
	display: 'block',
	padding: '5px 0',
	'&:hover': {
		textDecoration: 'underline',
	},
}));
