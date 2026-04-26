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