'use client';

import {
	Paper,
	TableContainer,
	Table as MUITable,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from '@mui/material';
import { Container } from '@mui/system';
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';

interface TableProps<T> {
	data: T[];
	columns: ColumnDef<T, string>[];
}

const Table = <T extends unknown>({ data, columns }: TableProps<T>) => {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<Container sx={{ marginY: '32px' }}>
			<TableContainer component={Paper}>
				<MUITable aria-label="simple table">
					<colgroup>
						<col width={45} />
						<col />
						<col />
					</colgroup>
					<TableHead>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header, index) => (
									<TableCell
										align={index === 1 ? 'left' : 'right'}
										key={header.id}
										sx={{ paddingLeft: 0 }}
									>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
											  )}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableHead>
					<TableBody>
						{table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								{row.getVisibleCells().map((cell, index) => (
									<TableCell
										align={index === 1 ? 'left' : 'right'}
										key={cell.id}
										sx={{ paddingY: 0, paddingLeft: 0 }}
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</MUITable>
			</TableContainer>
		</Container>
	);
};

export default Table;
