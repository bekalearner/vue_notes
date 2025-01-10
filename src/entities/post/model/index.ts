import { defineStore } from "pinia"
import { ref } from 'vue'

import type { Post } from "../types"
import {getAll} from "@/entities/post/api";
import type {DropdownMenuActions} from "@/shared/types/dropdown-menu";


export const usePostStore = defineStore('post', () => {
  // Reactive Data
  const posts = ref<Post[]>(getAll())

  const selectedPost = ref<Post>({
    id: 0,
    title: '',
    body: '',
    createdAt: '',
    updatedAt: '',
  })

  //None Reactive Data
  const actions: DropdownMenuActions[] = [
    {
      label: 'Редактировать',
      action: (postId) => {
        selectedPost.value = posts.value.find(post => post.id === postId) as Post
      },
      icon: 'edit',
      type: 'trigger'
    },
    {
      label: 'Удалить',
      action: deletePost,
      icon: 'trash',
      type: 'action',
      color: 'text-red-500'
    },
  ]

  //Methods
  function deletePost(postId: Post['id']): void {
    posts.value = posts.value.filter(post => post.id !== postId)
    save()
  }

  function createPost(post: Post): void {
    posts.value.push(post)
    save()
  }

  function updatePost(updatedPost: Post) {
    posts.value = posts.value.map(post => post.id === updatedPost.id ? {...post, ...updatedPost} : post)
    save()
  }

  function save() {
    localStorage.setItem('posts', JSON.stringify(posts.value))
  }


  return {
    posts,
    deletePost,
    createPost,
    updatePost,
    actions,
    selectedPost
  }
})
