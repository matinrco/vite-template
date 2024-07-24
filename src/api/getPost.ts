import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import { queryClient, axios } from './config'
import { GetPostReq, GetPostRes } from './types'

export class PostNotFoundError extends Error {}

const getPost = async (req: GetPostReq) => {
  const posts = await axios
    .get<GetPostRes>('https://jsonplaceholder.typicode.com/posts', {
      params: req,
    })
    .then((res) => res.data)
    .catch((error) => {
      if (error.status === 404) {
        throw new PostNotFoundError(`Post with id "${req.id}" not found!`)
      }
      throw error
    })

  return posts
}

export const getPostQueryOptions = (req: GetPostReq) =>
  queryOptions({
    queryKey: ['get-post', req],
    queryFn: () => getPost(req),
  })

export const useGetPostQuery = (req: GetPostReq) =>
  useQuery(getPostQueryOptions(req))

export const useGetPostSuspenseQuery = (req: GetPostReq) =>
  useSuspenseQuery(getPostQueryOptions(req))

export const prefetchGetPostQuery = (req: GetPostReq) => {
  return queryClient.prefetchQuery(getPostQueryOptions(req))
}

export const ensureGetPostQueryData = (req: GetPostReq) => {
  return queryClient.ensureQueryData(getPostQueryOptions(req))
}
