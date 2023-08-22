export type ArticleResponseType = {
  source?: {
    id?: any;
    name?: string;
  };
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
};

export type TopHeadLinesresponse = {
  status?: string;
  totalResults?: number;
  articles: ArticleResponseType[];
};

export type EverythingResponse = {
  status?: string;
  totalResults?: number;
  articles: ArticleResponseType[];
};
