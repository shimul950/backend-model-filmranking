export interface ICreateWebSeries {
  title: string;
  synopsis: string;
  posterUrl?: string;
  releaseYear: number;
  language: string;
  country: string;
  pricing?: "FREE" | "PREMIUM";
  status?: "RELEASED" | "UPCOMING" | "ARCHIVED";
}

export interface ICreateSeason {
  seasonNumber: number;
  title?: string;
  synopsis?: string;
  posterUrl?: string;
  youtubeTrailer?: string;
  releaseDate?: string | Date;
}

export interface ICreateEpisode {
  episodeNumber: number;
  title: string;
  synopsis?: string;
  duration?: number;
  stillUrl?: string;
  videoUrl?: string;
}
