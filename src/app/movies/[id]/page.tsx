import React from 'react';
import axios from 'axios';
import Intro from '@/components/pages/movie/Intro';
import Content from '@/components/pages/movie/Content';

export interface Cast {
	id: number;
	name: string;
	popularity: number;
	profile_path: string;
	character: string;
}

export interface Crew {
	name: string;
	job: string;
}

export interface Video {
	id: number;
	key: string;
	type: string;
}

export interface Photo {
	file_path: string;
}

export interface Genre {
	id: string;
	name: string;
}

export interface Review {
	author: string;
	author_details: {
		rating: number;
	};
	content: string;
	created_at: string;
}

export interface Company {
	name: string;
}

export interface Country {
	name: string;
}

export interface Language {
	english_name: string;
	name: string;
}

export interface Media {
	id: number;
	vote_average: number;
	vote_count: number;
	status: string;
	overview: string;
	poster_path: string;
	images: {
		posters: Photo[];
	};
	reviews: {
		results: Review[];
	};
	recommendations: {
		results: Movie[];
	};
	genres: Genre[];
	production_companies: Company[];
	production_countries: Country[];
	videos: {
		results: Video[];
	};
	spoken_languages: Language[];
}

export interface Movie extends Media {
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
