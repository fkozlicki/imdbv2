'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Menu from './Menu';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Container from '@mui/material/Container/Container';
import Image from 'next/image';
import { Box, Card, Typography } from '@mui/material';
import Close from '@mui/icons-material/Close';
import SearchResultPreview from './SearchResult';
import { useClickAway } from '@/hooks/useClickAway';
import { getSearch, type SearchResult } from '@/services/search';
import SearchResultSkeleton from './SearchResultSkeleton';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const pathname = usePathname();
	const [search, setSearch] = useState<string>('');
	const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [result, setResult] = useState<SearchResult[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [searchOpen, setSearchOpen] = useState<boolean>(false);
	const searchRef = useClickAway<HTMLDivElement>(() => {
		closeDropdown();
	});

	useEffect(() => {
		handleMenuClose();
		closeSearch();
		closeDropdown();
		setSearch('');
	}, [pathname]);

	useEffect(() => {
		fetchSearch();
	}, [search]);

	const fetchSearch = async () => {
		if (search.length < 1) {
			setResult([]);
			return;
		}

		setLoading(true);
		try {
			const data = await getSearch(search);

			setResult(data.slice(0, 8));
		} catch (error) {
			console.error(error);
			setError('Searching failed. Try again or refresh the page.');
		}
		setLoading(false);
	};

	const closeSearch = () => {
		setSearchOpen(false);
	};

	const openSearch = () => {
		setSearchOpen(true);
	};

	const openDropdown = () => {
		setDropdownOpen(true);
	};

	const closeDropdown = () => {
		setDropdownOpen(false);
	};

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	const handleMenuOpen = () => {
		setMenuOpen(true);
	};

	const handleMenuClose = () => {
		setMenuOpen(false);
	};

	return (
		<AppBar
			position="static"
			sx={{ backgroundImage: 'none', position: 'relative' }}
		>
			<Container sx={{ paddingY: 0.5 }}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						padding: {
							sm: '8px 0',
						},
					}}
				>
					<IconButton
						size="large"
						color="inherit"
						aria-label="open drawer"
						sx={{
							display: 'flex',
							alignItems: 'center',
							borderRadius: 1,
							padding: {
								sm: '4px 8px',
							},
						}}
						onClick={handleMenuOpen}
					>
						<MenuIcon />
						<Typography
							fontSize={14}
							fontWeight={600}
							marginLeft={1}
							sx={{
								display: {
									xs: 'none',
									sm: 'inline',
								},
							}}
						>
							Menu
						</Typography>
					</IconButton>
					<IconButton
						LinkComponent={Link}
						sx={{
							background: '#f5c518',
							borderRadius: '5px',
							padding: 0,
							marginLeft: {
								xs: 1,
								sm: 0,
							},
							order: {
								sm: -1,
							},
							marginRight: {
								sm: 1,
							},
						}}
						href="/"
					>
						<Image src="/imdb-logo.svg" alt="logo" width={64} height={32} />
					</IconButton>
					<IconButton
						onClick={openSearch}
						sx={{ display: { sm: 'none' }, marginLeft: 'auto' }}
					>
						<SearchIcon fontSize="medium" />
					</IconButton>
					<Search open={searchOpen} onFocus={openDropdown} ref={searchRef}>
						<StyledInputBase
							value={search}
							onChange={handleSearchChange}
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
						/>
						<SearchIconWrapper>
							<SearchIcon fontSize="small" />
						</SearchIconWrapper>
						<IconButton onClick={closeSearch} sx={{ display: { sm: 'none' } }}>
							<Close fontSize="medium" />
						</IconButton>
						<SearchDropdown
							open={dropdownOpen}
							sx={{ zIndex: 1100, boxShadow: 10 }}
						>
							{loading && <SearchResultSkeleton />}
							{error && <Box sx={{ padding: '8px' }}>{error}</Box>}
							{result.length > 0 &&
								!loading &&
								!error &&
								result.map((el, index) => {
									if (el.media_type === 'tv') {
										return (
											<SearchResultPreview
												key={index}
												image={el.poster_path}
												title={el.name}
												href={`/shows/${el.id}`}
											/>
										);
									}
									if (el.media_type === 'person') {
										return (
											<SearchResultPreview
												key={index}
												image={el.profile_path}
												title={el.name}
												href={`/people/${el.id}`}
											/>
										);
									}
									if (el.media_type === 'movie') {
										return (
											<SearchResultPreview
												key={index}
												image={el.poster_path}
												title={el.title}
												year={el.release_date}
												href={`movies/${el.id}`}
											/>
										);
									}
								})}
						</SearchDropdown>
					</Search>
				</Box>
			</Container>
			<Menu isOpen={menuOpen} closeMenu={handleMenuClose} />
		</AppBar>
	);
}

const SearchDropdown = styled(Card)<{ open: boolean }>(({ theme, open }) => ({
	display: open ? 'block' : 'none',
	width: '100%',
	boxShadow: theme.shadows[7],
	position: 'absolute',
	top: '100%',
	left: 0,
}));

const Search = styled('div')<{ open: boolean }>(({ theme, open }) => ({
	position: 'absolute',
	top: 0,
	left: 0,
	color: theme.palette.common.white,
	backgroundColor: theme.palette.background.default,
	marginLeft: 0,
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	paddingInline: theme.spacing(1),
	visibility: open ? 'visible' : 'hidden',

	[theme.breakpoints.up('sm')]: {
		padding: 0,
		visibility: 'visible',
		position: 'relative',
		flex: 1,
		backgroundColor: theme.palette.common.white,
		color: theme.palette.common.black,
		borderRadius: theme.shape.borderRadius,
		marginLeft: theme.spacing(1),
		width: 'auto',
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.95),
		},
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	display: 'none',
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
	},
	padding: theme.spacing(0, 2),
	pointerEvents: 'none',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	height: '100%',
	width: '100%',
	'& .MuiInputBase-input': {
		padding: theme.spacing(0.5, 2, 0.5, 0),
		paddingLeft: '1em',
		transition: theme.transitions.create('width'),
		width: '100%',
	},
}));
