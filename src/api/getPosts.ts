import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import { queryClient, axios } from './config'
import { GetPostsReq, GetPostsRes } from './types'

const getPosts = async (req: GetPostsReq) => {
  const posts = await axios
    .get<GetPostsRes>(`posts`, {
      params: req,
    })
    .then((res) => res.data)
    .catch((error) => {
      throw error
    })

  return posts
}

export const getPostsQueryOptions = (req: GetPostsReq) =>
  queryOptions({
    queryKey: ['get-posts', req],
    queryFn: () => getPosts(req),
  })

export const useGetPostsQuery = (req: GetPostsReq) =>
  useQuery(getPostsQueryOptions(req))

export const useGetPostsSuspenseQuery = (req: GetPostsReq) =>
  useSuspenseQuery(getPostsQueryOptions(req))

export const prefetchGetPostsQuery = (req: GetPostsReq) => {
  return queryClient.prefetchQuery(getPostsQueryOptions(req))
}

export const ensureGetPostsQueryData = (req: GetPostsReq) => {
  return queryClient.ensureQueryData(getPostsQueryOptions(req))
}
