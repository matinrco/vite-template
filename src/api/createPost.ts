import { useMutation } from '@tanstack/react-query'
import { CreatePostsReq, CreatePostsRes } from './types'

const mutationKey = ['create-post']

const mutationFn = async (req: CreatePostsReq) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(req),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })

  return (await res.json()) as CreatePostsRes
}

export const useCreatePostMutation = () =>
  useMutation({
    mutationFn,
    mutationKey,
  })
