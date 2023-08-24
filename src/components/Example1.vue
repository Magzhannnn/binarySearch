<template>
  <!-- <router-view></router-view> -->
  <div
    class="w-4/5 mx-auto border mb-8 border-blue-400 py-2 px-5 mt-5 flex flex-col items-center justify-center"
  >
    <input
      type="text"
      placeholder="Enter is name"
      v-model="inputSearch"
      class="px-2 outline-none w-[95%] border border-red-300 mx-auto"
    />
    <div
      v-for="(user, idx) in searchUsers"
      v-if="searchUsers.length"
      class="w-[95%] border-b py-1 border-black"
    >
      <div
        v-if="idx === 0"
        class="flex items-center justify-between border-b border-black"
      >
        <div class="flex-1">ID</div>
        <div class="flex-1">Name</div>
        <div class="flex-1">Age</div>
        <div class="flex-[2]">Address</div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex-1">{{ user.id }}</div>
        <div class="flex-1">{{ user.name }}</div>
        <div class="flex-1">{{ user.age }}</div>
        <div class="flex-[2]">
          {{ user.address.city }}, {{ user.address.street }}
        </div>
      </div>
    </div>
    <div v-else class="w-[95%] py-1">
      <div class="flex items-center justify-between border-b border-black">
        <div class="flex-1">ID</div>
        <div class="flex-1">Name</div>
        <div class="flex-1">Age</div>
        <div class="flex-[2]">Address</div>
      </div>
      <div class="text-red-700 text-2xl font-bold mt-5 text-center">
        User with this name is not in the list!
      </div>
    </div>
  </div>
</template>

<!-- MAGA CHORT -->

<script setup lang="ts">
import { usersData } from "@/users";
import { computed, ref } from "vue";

const inputSearch = ref("");

const searchUsers = computed(() =>
  usersData.filter((user) => {
    const inputData = inputSearch.value.toUpperCase();
    return user.name
      .toUpperCase()
      .slice(0, inputData.length)
      .includes(inputData);
  })
);
</script>

<style></style>
