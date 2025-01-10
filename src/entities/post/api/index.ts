import type {Post} from "@/entities/post/types";

export function getAll(): Post[] {
  const data = JSON.parse(localStorage.getItem('posts') as string)

  if (Array.isArray(data)) {
    return data
  }
  return []
}

export function getPost(id: number): Post | null{
  const posts: Post[] = JSON.parse(localStorage.getItem('posts') as string)

  const post: Post | undefined = posts.find(post => post.id === id)

  return post ? post : null
}
