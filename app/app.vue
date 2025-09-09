<script setup lang="ts">

import MyLink from "~/components/MyLink.vue";
</script>

<template>
  <div>
      <div class="navbar bg-accent shadow-lg justify-center">
          <div class="navbar-center">
              <ul class="menu menu-horizontal gap-5 menu-sm">
                  <MyLink link="/fetch" label="$fetch"/>
                  <MyLink link="/useFetch" label="useFetch"/>
              </ul>
          </div>
      </div>
      <div class="mt-10 px-5">
          <NuxtPage />
      </div>
  </div>
</template>