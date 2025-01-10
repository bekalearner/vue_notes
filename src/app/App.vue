<template>
<div :class=" {'min-h-screen': true}">
  <main-layout>
    <router-view/>
  </main-layout>
</div>
</template>

<script setup lang="ts">
import MainLayout from "@/app/layouts/main-layout/MainLayout.vue";
</script>
