export interface ICreateMedia {
  title: string;
  synopsis: string;
  releaseYear: number;
  director: string;
  cast: string[];
  duration: number;
  language: string;
  country: string;

  pricing?: "FREE" | "PREMIUM";
  youtubeLink?: string;

  genreIds?: string[];
  platformIds?: string[];
}

export interface IUpdateMedia {
  title?: string;
  synopsis?: string;
  releaseYear?: number;
  director?: string;
  cast?: string[];
  duration?: number;
  language?: string;
  country?: string;
  pricing?: "FREE" | "PREMIUM";
  youtubeLink?: string;
  genreIds?: string[];
  platformIds?: string[];
}