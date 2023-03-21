import { Box, Container, Drawer, IconButton } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import Close from '@mui/icons-material/Close';
import Accordions from './ui/Accordions';

interface MenuProps {
	isOpen: boolean;
	closeMenu: () => void;
}

const Menu = ({ isOpen, closeMenu }: MenuProps) => {
	return (
		<>
			<Drawer anchor="left" open={isOpen} sx={{ display: { sm: 'none' } }}>
				<Box sx={{ height: '100vh', background: '#1f1f1f', width: '280px' }}>
					<Container
						sx={{ display: 'flex', justifyContent: 'end', paddingY: '5px' }}
					>
						<IconButton onClick={closeMenu}>
							<Close />
						</IconButton>
					</Container>
					<Accordions />
				</Box>
			</Drawer>
			<Drawer
				anchor="top"
				open={isOpen}
				sx={{ display: { xs: 'none', sm: 'block' } }}
			>
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
							<IconButton
								LinkComponent={Link}
								sx={{
									background: '#f5c518',
									borderRadius: '5px',
									padding: 0,
								}}
								href="/"
							>
								<Image src="/imdb-logo.svg" alt="logo" width={64} height={32} />
							</IconButton>
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
								<SectionHeader>Movies</SectionHeader>
								<StyledLink href="/popular/movies">
									Most Popular Movies
								</StyledLink>
								<Typography>Top 250 Movies</Typography>
								<Typography>Browse Movies by Genre</Typography>
							</Grid>
							<Grid item xs={4}>
								<SectionHeader>TV Shows</SectionHeader>
								<Typography>What&apos;s on TV & Streaming</Typography>
								<Typography>Top 250 TV Shows</Typography>
								<StyledLink href="/popular/shows">
									Most Popular TV Shows
								</StyledLink>
								<Typography>Browse TV Shows by Genre</Typography>
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
		</>
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
