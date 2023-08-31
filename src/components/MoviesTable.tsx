'use client';

import { Box, Typography } from '@mui/material';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import React from 'react';
import Table from './Table';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';
import { MoviePreview } from '@/app/(home)/page';

const PopularTable = ({ data }: { data: MoviePreview[] }) => {
	const columns: ColumnDef<MoviePreview>[] = [
		{
			header: '',
			accessorKey: 'poster_path',
			cell: ({
				getValue,
				row: {
					original: { id },
				},
			}) => (
				<Link href={`/movies/${id}`}>
					<Box display={'flex'}>
						<Image
							src={`http://image.tmdb.org/t/p/w500/${getValue<string>()}`}
							alt=""
							width={45}
							height={67}
						/>
					</Box>
				</Link>
			),
		},
		{
			header: 'Name',
			accessorKey: 'title',
			cell: ({
				getValue,
				row: {
					original: { id, release_date },
					index,
				},
			}) => (
				<Box>
					<Box>
						<Link href={`/movies/${id}`}>
							<Typography component="span">{getValue<string>()} </Typography>
						</Link>
						<Typography component="span" color="GrayText">
							({release_date.substring(0, 4)})
						</Typography>
					</Box>
					<Typography fontSize={14}>{index + 1}</Typography>
				</Box>
			),
		},
		{
			header: 'Rating',
			accessorKey: 'vote_average',
			cell: ({ getValue }) => (
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-end',
						gap: '8px',
					}}
				>
					<StarIcon />
					<Typography>{getValue<string>()}</Typography>
				</Box>
			),
		},
		{
			id: 'last',
		},
	];

	return <Table columns={columns} data={data} />;
};

export default PopularTable;
