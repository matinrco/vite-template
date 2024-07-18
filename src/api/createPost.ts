import { useMutation } from '@tanstack/react-query'
import { queryClient, axios, AxiosResponse } from './config'
import { CreatePostsReq, CreatePostsRes } from './types'

const createPost = async (req: CreatePostsReq) => {
  const post = await axios
    .post<CreatePostsRes, AxiosResponse<CreatePostsRes>, CreatePostsReq>(
      'https://jsonplaceholder.typicode.com/posts',
      req,
    )
    .then((res) => res.data)
    .catch((error) => {
      throw error
    })

  return post
}

export const useCreatePostMutation = () =>
  useMutation({
    mutationKey: ['create-post'],
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-posts'] })
      // you can call for each query you'd like to invalidate
      // queryClient.invalidateQueries({ queryKey: ['another-query'] })
    },
  })
