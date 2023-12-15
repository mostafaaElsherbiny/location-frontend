<template>
  <div id="app">
    <div class="container mx-auto">
      <Sidebar/>
      <div class="p-4 sm:ml-64">
        <div
          class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
        >
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import Sidebar from "./components/layouts/Sidebar.vue";

onMounted(() => {
  initFlowbite();
});
</script>
