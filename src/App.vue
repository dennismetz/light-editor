<template>
  <header
    class="flex justify-between items-center dark:bg-slate-500 bg-indigo-500 p-4"
  >
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="50"
      height="50"
    />
  </header>

  <main class="p-10 flex flex-col space-y-4 md:space-y-8">
	  <div class="about">
		  <div class="grid grid-cols-2 gap-2 md:gap-4">
			  <light-editor v-model="content" />
			  <light-editor v-model="content" />
		  </div>
		  <div class="prose lg:prose-xl" v-html="content"></div>
	  </div>
  </main>
</template>

<style scoped>
.about {
	@apply flex flex-col space-y-4 md:space-y-4;
}

.is-active {
	@apply bg-indigo-500 text-white;
}

.icon {
	@apply w-4 h-4;
}

.editor-btn {
	@apply bg-gray-200 p-2 rounded-md text-gray-700;
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import LightEditor from "@/plugins/LightEditor.vue";
const content = ref("");
</script>
