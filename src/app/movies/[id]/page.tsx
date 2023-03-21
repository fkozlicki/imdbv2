import React from 'react';
import axios from 'axios';
import Intro from '@/components/pages/movie/Intro';
import Content from '@/components/pages/movie/Content';

export interface Cast {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string;
	cast_id: number;
	character: string;
	credit_id: string;
	order: number;
}

export interface Crew {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string;
	credit_id: string;
	department: string;
	job: string;
}

export interface Video {
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	published_at: string;
	id: string;
}

export interface Photo {
	aspect_ratio: number;
	file_path: string;
	height: number;
	iso_639_1: string;
	vote_average: number;
	vote_count: number;
	width: number;
}

export interface Genre {
	id: string;
	name: string;
}

export interface Review {
	author: string;
	author_details: {
		name: string;
		username: string;
		avatar_path: string;
		rating: number;
	};
	content: string;
	created_at: string;
	id: string;
	updated_at: string;
	url: string;
}

export interface Company {
	id: string;
	logo_path: string;
	name: string;
	origin_country: string;
}

export interface Country {
	name: string;
}

export interface Language {
	english_name: string;
	name: string;
}

export interface Media {
	adult: false;
	id: number;
	vote_average: number;
	vote_count: number;
	status: string;
	overview: string;
	poster_path: string;
	images: {
		backdrops: Photo[];
		logos: Photo[];
		posters: Photo[];
	};
	reviews: {
		results: Review[];
	};
	recommendations: {
		results: Movie[];
	};
	backdrop_path: string;
	homepage: string;
	tagline: string;
	popularity: number;
	original_language: string;
	genres: Genre[];
	production_companies: Company[];
	production_countries: Country[];
	videos: {
		results: Video[];
	};
	spoken_languages: Language[];
}

export interface Movie extends Media {
	original_title: string;
	title: string;
	release_date: string;
	runtime: number;
	budget: number;
	revenue: number;
	credits: {
		cast: Cast[];
		crew: Crew[];
	};
	similar: {
		results: Movie[];
	};
}

export interface Details {
	release_date: string;
	production_countries: Country[];
	spoken_languages: Language[];
	production_companies: Company[];
}

export interface ExtraInfo {
	status: string;
	original_language: Language;
	budget?: number;
	revenue?: number;
}

interface MovieProps {
	params: {
		id: string;
	};
}

const fetchMovie = async (id: string) =>
	(
		await axios.get<Movie>(`https://api.themoviedb.org/3/movie/${id}`, {
			params: {
				api_key: process.env.API_KEY,
				append_to_response:
					'videos,images,credits,similar,reviews,recommendations',
			},
		})
	).data;

const Movie = async ({ params: { id } }: MovieProps) => {
	const data = await fetchMovie(id);
	const {
		title,
		videos,
		release_date,
		overview,
		genres,
		vote_average,
		vote_count,
		runtime,
		images,
		credits: { cast, crew },
		poster_path,
		reviews,
		similar,
		recommendations,
		production_countries,
		spoken_languages,
		production_companies,
		status,
		budget,
		revenue,
	} = data;
	const trailer = videos.results.find((result) => result.type === 'Trailer');
	const details: Details = {
		release_date,
		production_countries,
		spoken_languages,
		production_companies,
	};
	const moreInfo = {
		status,
		original_language: spoken_languages[0],
		budget,
		revenue,
	};

	return (
		<>
			<Intro
				title={title}
				releaseDate={release_date}
				overview={overview}
				genres={genres}
				rating={vote_average}
				voteCount={vote_count}
				videosCount={videos.results.length}
				imagesCount={images.posters.length}
				trailer={trailer}
				runtime={runtime}
				image={poster_path}
				cast={cast.slice(0, 18)}
				crew={crew}
			/>
			<Content
				videos={videos.results}
				photos={images.posters}
				cast={cast.slice(0, 18)}
				reviews={reviews.results}
				similar={similar.results}
				recommendations={recommendations.results}
				details={details}
				moreInfo={moreInfo}
			/>
		</>
	);
};

export default Movie;
