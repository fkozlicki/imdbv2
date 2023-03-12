'use client';

import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Menu from './Menu';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Container from '@mui/material/Container/Container';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const pathname = usePathname();

	useEffect(() => {
		handleMenuClose();
	}, [pathname]);

	const handleMenuOpen = () => {
		setMenuOpen(true);
	};

	const handleMenuClose = () => {
		setMenuOpen(false);
	};

	return (
		<AppBar
			position="sticky"
			sx={{
				background: 'background',
			}}
		>
			<Container>
				<Toolbar disableGutters>
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
						size="large"
						color="inherit"
						aria-label="open drawer"
						sx={{
							marginX: 2,
							display: 'flex',
							alignItems: 'center',
							borderRadius: 1,
							padding: '4px 8px',
						}}
						onClick={handleMenuOpen}
					>
						<MenuIcon />
						<Typography fontSize={14} fontWeight={600} marginLeft={1}>
							Menu
						</Typography>
					</IconButton>
					<Search>
						<SearchIconWrapper>
							<SearchIcon fontSize="small" />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>
				</Toolbar>
			</Container>
			<Menu isOpen={menuOpen} closeMenu={handleMenuClose} />
		</AppBar>
	);
}

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: theme.palette.common.white,
	color: theme.palette.common.black,
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.95),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	right: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(0.5, 2, 0.5, 0),
		paddingLeft: '1em',
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '30ch',
			'&:focus': {
				width: '40ch',
			},
		},
	},
}));
