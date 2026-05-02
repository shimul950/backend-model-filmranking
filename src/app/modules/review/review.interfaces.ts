export interface IcreateReview {
    mediaId: string;
    rating: number;
    content: string;
    spoiler: boolean;
    tagIds?: string[];
}

export interface IUpdateReview{
    rating: number;
    content: string;
    spoiler: boolean;
    tagIds?: string[];
}