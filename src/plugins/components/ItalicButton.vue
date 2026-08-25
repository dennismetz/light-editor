<script setup lang="ts">
import type { Editor } from "@tiptap/core";
defineProps<{
  editor: Editor;
}>();
</script>

<template>
  <button
    type="button"
    @click="editor.chain().focus().toggleItalic().run()"
    :class="{ 'is-active': editor.isActive('italic') }"
    class="editor-btn"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="icon">
      <path
        d="M384 64.01c0 17.69-14.31 32-32 32h-58.67l-133.3 320H224c17.69 0 32 14.31 32 32s-14.31 32-32 32H32c-17.69 0-32-14.31-32-32s14.31-32 32-32h58.67l133.3-320H160c-17.69 0-32-14.31-32-32s14.31-32 32-32h192C369.7 32.01 384 46.33 384 64.01z"
      />
    </svg>
  </button>
</template>

<style scoped>
.icon {
  @apply w-2 h-2 md:w-4 md:h-4;
}

.editor-btn {
  @apply p-2 rounded-md text-gray-700 hover:bg-white dark:hover:bg-gray-300 duration-300;
}

.is-active {
  @apply bg-gray-700 text-white fill-white;
}
</style>
