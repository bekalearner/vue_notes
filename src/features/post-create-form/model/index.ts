import { ref, } from 'vue'

import { type Post } from "@/entities/post/types"
import { usePostStore } from '@/entities/post/model'

export const useCreatePostForm = () => {
  //Stores
  const postStore = usePostStore()

  //Reactive Data
  const newPost = ref<Pick<Post, 'title' | 'body'>>({
   title: '',
   body: '',
  })

  //Methods
  function createPost(post: Post) {
    postStore.createPost(post)
    reset()
  }

  function reset() {
    newPost.value = {
      title: '',
      body: ''
    }
  }

  return {
    newPost,
    createPost
  }
}
