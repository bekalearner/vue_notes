<template>
  <shad-table>
    <table-header>
      <table-row>
        <table-head>
          №
        </table-head>
        <table-head>
          Наименование
        </table-head>
        <table-head>
          Дата создания
        </table-head>
        <table-head>
          Дата редактирования
        </table-head>
        <table-head>
          Действия
        </table-head>
      </table-row>
    </table-header>
    <table-body v-if="posts.length">
      <table-row v-for="(post, index) in posts" :key="post.id">
        <table-cell>
          {{index + 1}}
        </table-cell>
        <table-cell class="text-primary">
          {{post.title}}
        </table-cell>
        <table-cell>
          {{post.createdAt}}
        </table-cell>
        <table-cell>
          {{post.updatedAt}}
        </table-cell>
        <table-cell>
          <dropdown-menu>
            <dropdown-menu-trigger>
              <shad-button variant="ghost">
                <icon icon="radix-icons:dots-vertical" class="w-6 h-6"/>
              </shad-button>
            </dropdown-menu-trigger>
            <dropdown-menu-content v-if="postActions">
              <dropdown-menu-group>
                <template v-for="action in postActions" :key="action.label" >
                  <dialog-trigger v-if="action.type === 'trigger'">
                    <dropdown-menu-item @click="action.action(post.id)" :class="`flex justify-between ${action.color}`">
                      {{ action.label }}
                      <icon :icon="`lucide:${action.icon}`"></icon>
                    </dropdown-menu-item>
                  </dialog-trigger>
                  <dropdown-menu-item v-else @click="action.action(post.id)" :class="`flex justify-between ${action.color}`">
                    {{ action.label }}
                    <icon :icon="`lucide:${action.icon}`"></icon>
                  </dropdown-menu-item>
                </template>
              </dropdown-menu-group>
            </dropdown-menu-content>
          </dropdown-menu>
        </table-cell>
      </table-row>
    </table-body>
    <table-empty :colspan="5" v-else>
      No Data
      <icon icon="lucide:inbox" class=" ml-2 w-6 h-6"/>
    </table-empty>
  </shad-table>
</template>

<script setup lang="ts">
//imports
import {defineProps, type PropType} from 'vue'
import type {Post} from "@/entities/post/types"

import {Table as ShadTable, TableBody, TableCell, TableEmpty, TableHead, TableHeader, TableRow} from '@/shared/ui/table'
import { Button as ShadButton} from '@/shared/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/shared/ui/dropdown-menu";
import {Icon} from "@iconify/vue";
import type {DropdownMenuActions} from "@/shared/types/dropdown-menu";
import {DialogTrigger} from "@/shared/ui/dialog";

defineProps({
  posts: {
    type: Object as PropType<Post[]>,
    required: true,
  },
  postActions: {
    type: Array as PropType<DropdownMenuActions[]>,
    required: true,
  }
})
</script>

<style scoped>

</style>
