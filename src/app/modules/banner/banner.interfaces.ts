export interface ICreateBanner {
  title: string;
  synopsis?: string;
  imageUrl: string;
  posterUrl?: string;
  rating?: number;
  releaseYear?: number;
  duration?: number;
  genre?: string;
  pricing?: "FREE" | "PREMIUM";
  youtubeLink?: string;
  director?: string;
  linkUrl?: string;
  isActive?: boolean;
  order?: number;
}

export interface IUpdateBanner extends Partial<ICreateBanner> {}

export interface IBannerFilterRequest {
  searchTerm?: string;
  isActive?: string | boolean;
  genre?: string;
}
