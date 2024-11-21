export interface MovieProps {
  id: string;
  original_title: string;
  backdrop_path: string;
  poster_path: string;
  runtime: number;
  genres: GenresProps[];
  overview: string;
  tagline: string;
}

export interface GenresProps {
  name: string;
}

export interface MemberProps {
  id: string;
  name: string;
  profile_path: string;
}

export interface MoviesListProps {
  movies: MovieProps[];
}

export interface MovieDetailsProps {
  movie: MovieProps;
}

export interface MovieGenresProps {
  genres: GenresProps[];
}

export interface MemberCastProps {
  member: MemberProps;
}
