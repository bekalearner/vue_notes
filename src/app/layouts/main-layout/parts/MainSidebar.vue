<template>
  <sidebar class="bg-background border-foreground/5" variant="sidebar">
    <sidebar-header>
      <div class="flex items-center gap-2 pt-4 pb-2 px-2">
        <icon icon="lucide:notebook" class="w-6 h-6"></icon>
        <span class="font-semibold text-xl">Заметки</span>
      </div>
    </sidebar-header>
    <sidebar-content>
      <sidebar-group>
        <sidebar-group-label class="text-primary/80">
          Страницы
        </sidebar-group-label>
        <sidebar-menu>
          <router-link v-for="route in routes" :key="route.path" :to="route.path">
            <sidebar-menu-button class="hover:bg-primary/40 text-black dark:text-white transition" :class="{'bg-primary text-white dark:text-black hover:bg-primary font-semibold': $route.fullPath === route.path}">
              {{route.label}}
            </sidebar-menu-button>
          </router-link>
        </sidebar-menu>
      </sidebar-group>
    </sidebar-content>
  </sidebar>
</template>

<script setup lang="ts">
//Imports
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu, SidebarMenuButton,
} from "@/shared/ui/sidebar";
import { routes } from '@/app/providers/router'
import {Icon} from "@iconify/vue";
</script>
