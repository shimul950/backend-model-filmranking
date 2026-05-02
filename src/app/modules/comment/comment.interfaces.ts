export interface ICreateComment {
  reviewId: string;
  content: string;
  parentId?: string;
}

export interface IUpdateComment {
  content?: string;
}
