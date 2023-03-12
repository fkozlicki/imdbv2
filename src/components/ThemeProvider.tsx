'use client';

import React from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material';
import { type ReactNode } from 'react';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	return <MUIThemeProvider theme={darkTheme}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;
