'use client';

import React from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { type ReactNode } from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
	display: 'swap',
});

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
});

const ThemeRegistry = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

export default ThemeRegistry;
