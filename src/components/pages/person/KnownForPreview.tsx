import Star from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

interface KnownForPreviewProps {
	title: string;
	year: string;
	image: string;
	episodes?: number;
	isShow?: boolean;
	href: string;
	rating: number;
	character: string;
}

const KnownForPreview = ({
	title,
	image,
	href,
	rating,
	character,
	year,
	episodes,
	isShow,
}: KnownForPreviewProps) => {
	return (
		<Link href={href}>
			<Box
				sx={{
					display: 'flex',
					border: 1,
					borderColor: 'divider',
					borderRadius: 1,
				}}
			>
				<Box sx={{ display: 'flex' }}>
					<Image
						src={`http://image.tmdb.org/t/p/w150_and_h225_bestv2/${image}`}
						alt=""
						width={68}
						height={102}
					/>
				</Box>
				<Box sx={{ paddingY: 1, paddingX: 2 }}>
					<Typography fontWeight={600} lineHeight={1.25}>
						{title}
					</Typography>
					<Typography sx={{ display: 'inline-flex', alignItems: 'center' }}>
						<Box
							fontSize={16}
							component="span"
							sx={{
								display: 'inline-flex',
								alignItems: 'center',
								lineHeight: 1.25,
								marginRight: 0.5,
							}}
						>
							<Star fontSize="inherit" sx={{ marginBottom: 0.3 }} />
						</Box>
						<Typography component="span" fontSize={14} marginRight={1.25}>
							{rating.toFixed(1)}
						</Typography>
						{isShow && (
							<Typography component="span" fontSize={14}>
								TV Series
							</Typography>
						)}
					</Typography>
					<Typography fontSize={14}>{character}</Typography>
					<Typography fontSize={14}>
						{year.substring(0, 4)} {episodes && `• ${episodes} episodes`}
					</Typography>
				</Box>
			</Box>
		</Link>
	);
};

export default KnownForPreview;
