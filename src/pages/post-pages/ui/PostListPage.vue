<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-between min-h-12">
      <h3 class="text-3xl font-bold">Посты</h3>
      <shad-dialog v-model:open="createDialogVisible.isVisible.value">
        <dialog-trigger>
          <shad-button>Создать Пост <icon icon="lucide:plus"/></shad-button>
        </dialog-trigger>
        <dialog-content class="min-w-[700px]">
          <dialog-header>
            <dialog-title>
              Создать Пост
            </dialog-title>
            <dialog-description>
              Заполните поля ниже чтобы создать пост
            </dialog-description>
          </dialog-header>
            <post-create-form @create="createDialogVisible.setIsVisible(false)"/>
        </dialog-content>
      </shad-dialog>
    </div>
    <shad-dialog v-model:open="updateDialogVisible.isVisible.value">
      <post-list :posts="postStore.posts" :post-actions="postStore.actions"/>
      <dialog-content class="min-w-[700px]">
        <dialog-header>
          <dialog-title>
            Редактировать пост
          </dialog-title>
          <dialog-description>
            Отредактируйте пост
          </dialog-description>
        </dialog-header>
        <post-edit-form @update="updateDialogVisible.setIsVisible(false)"/>
      </dialog-content>

    </shad-dialog>

  </div>

</template>

<script setup lang="ts">
//imports
import PostList from "@/entities/post/ui/PostList.vue";
import {usePostStore} from "@/entities/post/model";
import PostCreateForm from "@/features/post-create-form/ui/PostCreateForm.vue";
import {
  Dialog as ShadDialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger, DialogDescription
} from "@/shared/ui/dialog";
import {Button as ShadButton} from '@/shared/ui/button'
import {Icon} from "@iconify/vue";
import {useVisible} from "@/shared/use/useVisible.ts";
import PostEditForm from "@/features/post-edit-form/ui/PostEditForm.vue";

//Stores
const postStore = usePostStore()

//Composables
const createDialogVisible = useVisible()
const updateDialogVisible = useVisible()


</script>
