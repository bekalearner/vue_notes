<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-2">
      <div>
        <shad-label for="post-title">Загаловок</shad-label>
        <shad-input id="post-title" v-model.trim="model.newPost.value.title" placeholder="Загаловок..."/>
      </div>
      <div>
        <shad-label for="post-body">Пост</shad-label>
        <shad-textarea  id="post-body" v-model.trim="model.newPost.value.body" placeholder="Описание..."/>
      </div>
    </div>
    <shad-button @click="handleSubmit">Создать</shad-button>
  </div>
</template>

<script setup lang="ts">
//imports
import { defineEmits } from 'vue';

import {Input as ShadInput} from '@/shared/ui/input'
import {Label as ShadLabel} from '@/shared/ui/label'
import {Textarea as ShadTextarea} from "@/shared/ui/textarea";
import {Button as ShadButton} from '@/shared/ui/button'
import {useCreatePostForm} from "@/features/post-create-form/model";
import {formatDate} from "@/shared/lib/date";

const model = useCreatePostForm()

//Emits
const emit = defineEmits(['create'])

//methods
function handleSubmit() {
  if(model.newPost.value.title && model.newPost.value.body) {
    model.createPost({id: Number(new Date()), createdAt: formatDate(new Date()), updatedAt: formatDate(new Date()), ...model.newPost.value})
    emit('create')
  } else {
    alert('You left title or body field empty')
  }

}

</script>

<style scoped>

</style>
