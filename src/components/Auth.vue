<template>
  <div>{{ router.currentRoute.value.path }}</div>
</template>

<script setup lang="ts">
import router from "@/router/routes";
</script>
