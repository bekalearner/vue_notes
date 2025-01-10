<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-2">
      <div>
        <shad-label for="post-title">Загаловок</shad-label>
        <shad-input id="post-title" v-model.trim="model.updatingPost.value.title" placeholder="Загаловок..."/>
      </div>
      <div>
        <shad-label for="post-body">Пост</shad-label>
        <shad-textarea  id="post-body" v-model.trim="model.updatingPost.value.body" placeholder="Описание..."/>
      </div>
    </div>
    <shad-button @click="handleSubmit">Сохранить</shad-button>
  </div>
</template>

<script setup lang="ts">
//imports
import { defineEmits } from 'vue';

import {Input as ShadInput} from '@/shared/ui/input'
import {Label as ShadLabel} from '@/shared/ui/label'
import {Textarea as ShadTextarea} from "@/shared/ui/textarea";
import {Button as ShadButton} from '@/shared/ui/button'
import {useEditPostForm} from "@/features/post-edit-form/model";
import {formatDate} from "@/shared/lib/date";

const model = useEditPostForm()

//Props


//Emits
const emit = defineEmits(['update'])

//methods
function handleSubmit() {
  if (model.updatingPost.value.title && model.updatingPost.value.body) {
    model.postStore.updatePost({...model.updatingPost.value, updatedAt: formatDate(new Date())})
    emit('update')
  } else {
    alert('You left title or body field empty')
  }

}
</script>

<style scoped>

</style>
