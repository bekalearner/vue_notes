import {usePostStore} from "@/entities/post/model";
import { computed } from 'vue'

export const useEditPostForm = () => {
  //Store
  const postStore = usePostStore()

  const updatingPost = computed(() => {
    return {...postStore.selectedPost}
  })

  return {
    postStore,
    updatingPost
  }
}
