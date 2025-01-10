<template>
  <div class="flex">
    <sidebar-provider>
      <main-sidebar/>
      <div class="flex-1 flex flex-col items-start">
        <main-header>
          <template #sidebarTrigger>
            <sidebar-trigger></sidebar-trigger>
          </template>
        </main-header>
        <main class="min-w-full px-12 mt-5">
          <slot></slot>
        </main>
      </div>

    </sidebar-provider>

  </div>

</template>

<script setup lang="ts">
import {SidebarProvider, SidebarTrigger} from "@/shared/ui/sidebar";
import MainSidebar from "@/app/layouts/main-layout/parts/MainSidebar.vue";
import MainHeader from "@/app/layouts/main-layout/parts/MainHeader.vue";

</script>

<style scoped>

</style>
