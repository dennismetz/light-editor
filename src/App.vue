<template>
  <main class="container py-4 d-flex flex-column gap-3 gap-md-4">
    <div class="about d-flex flex-column gap-3">
      <div class="row">
        <div class="col-12 col-md-8">
          <light-editor v-model="content" />
        </div>
      </div>
      <div class="mt-3" v-html="content"></div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LightEditor from "@/plugins/LightEditor.vue";
const content = ref("");
</script>
