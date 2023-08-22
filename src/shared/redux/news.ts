// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {ArticleResponseType} from './types';
import {EverythingResponse, TopHeadLinesresponse} from './types';

// Define a service using a base URL and expected endpoints
export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://newsapi.org/v2/'}),
  endpoints: builder => ({
    getNewsByName: builder.query<EverythingResponse, string>({
      query: key => `everything?q=bitcoin&apiKey=${key}`,
    }),
    getTopHeadLinesByName: builder.query<TopHeadLinesresponse, string>({
      query: key => `top-headlines?country=us&apiKey=${key}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetNewsByNameQuery, useGetTopHeadLinesByNameQuery} = newsApi;
