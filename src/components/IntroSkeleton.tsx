import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Skeleton from '@mui/material/Skeleton';
import React from 'react';

const IntroSkeleton = () => {
	return (
		<Card sx={{ paddingBlock: '32px', marginBottom: '32px' }}>
			<Container
				sx={{
					marginBottom: '10px',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Box>
					<Skeleton animation="wave" width={350} height={72}></Skeleton>
					<Skeleton animation="wave" width={50}></Skeleton>
				</Box>
				<Box
					sx={{
						display: {
							xs: 'none',
							md: 'block',
						},
					}}
				>
					<Skeleton animation="wave" width={90}></Skeleton>
					<Skeleton animation="wave" width={90} height={50}></Skeleton>
				</Box>
			</Container>
			<Container
				disableGutters
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					padding: { sm: '0 24px' },
					position: 'relative',
					marginBottom: '32px',
				}}
			>
				<Box
					sx={{
						height: 'auto',
						width: { xs: '25%', sm: 'calc(25% - 2px)', md: 'calc(20% - 4px)' },
						position: { xs: 'absolute', sm: 'static' },
						bottom: 'calc(53px + 10px)',
						left: '24px',
						zIndex: 1000,
					}}
				>
					<Box
						sx={{ paddingBottom: '148%', position: 'relative', width: '100%' }}
					>
						<Skeleton
							variant="rectangular"
							sx={{
								position: 'absolute',
								top: 0,
								width: '100%',
								height: '100%',
							}}
						></Skeleton>
					</Box>
				</Box>
				<Box
					sx={{
						height: '100%',
						width: {
							xs: '100%',
							sm: 'calc(75% - 2px)',
							md: 'calc(60% - 4px)',
						},
						marginRight: { md: '4px' },
						marginLeft: { sm: '4px' },
					}}
				>
					<Box
						sx={{
							paddingBottom: { xs: '66%', sm: '48.8%' },
							position: 'relative',
							width: '100%',
						}}
					>
						<Skeleton
							variant="rectangular"
							sx={{
								position: 'absolute',
								top: 0,
								width: '100%',
								height: '100%',
							}}
						></Skeleton>
					</Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						gap: '4px',
						flexDirection: { md: 'column' },
						flex: '1',
						marginTop: { sm: '4px', md: 0 },
					}}
				>
					<Box sx={{ flex: '1', background: 'grey' }}>videos</Box>
					<Box sx={{ flex: '1', background: 'grey' }}>photos</Box>
				</Box>
			</Container>
			<Container sx={{ marginBottom: '24px' }}>
				<Box marginBottom="24px" display="flex" gap="10px">
					<Skeleton
						width={64}
						height={32}
						variant="rectangular"
						sx={{
							borderRadius: '2rem',
						}}
					/>
					<Skeleton
						width={64}
						height={32}
						variant="rectangular"
						sx={{
							borderRadius: '2rem',
						}}
					/>
					<Skeleton
						width={64}
						height={32}
						variant="rectangular"
						sx={{
							borderRadius: '2rem',
						}}
					/>
				</Box>
				<Skeleton></Skeleton>
			</Container>
			<Container
				sx={{
					display: {
						md: 'none',
					},
					marginBottom: 2,
				}}
			>
				<Skeleton height={60}></Skeleton>
			</Container>
			<Container>
				<List>
					<Divider></Divider>
					<ListItem sx={{ paddingX: 0 }}>
						<Skeleton animation="wave" width="100%"></Skeleton>
					</ListItem>
					<Divider></Divider>
					<ListItem sx={{ paddingX: 0 }}>
						<Skeleton animation="wave" width="100%"></Skeleton>
					</ListItem>
					<Divider></Divider>
					<ListItem sx={{ paddingX: 0 }}>
						<Skeleton animation="wave" width="100%"></Skeleton>
					</ListItem>
					<Divider></Divider>
				</List>
			</Container>
		</Card>
	);
};

export default IntroSkeleton;
