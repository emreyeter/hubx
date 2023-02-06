


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Question } from '../types/question-type'

type QuestionResponse = Question[]

export const questionApi = createApi({
  reducerPath: 'questionApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummy-api-jtg6bessta-ey.a.run.app/',  }),
  endpoints: (builder) => ({
    getQuestions: builder.query<QuestionResponse, void>({
      query: () => `getQuestions`,
    }),
  }),
})

export const { useGetQuestionsQuery } = questionApi
