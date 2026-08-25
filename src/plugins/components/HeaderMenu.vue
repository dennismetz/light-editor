<script setup lang="ts">
import type { Editor } from "@tiptap/core";
import { ref } from "vue";
defineProps<{
  editor: Editor;
}>();
const headerMenuIsOpen = ref(false);
function toggleHeaderMenu() {
  headerMenuIsOpen.value = !headerMenuIsOpen.value;
}
</script>

<template>
  <div class="position-relative d-inline-block">
    <button
      type="button"
      class="btn btn-sm btn-light"
      @click="toggleHeaderMenu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        class="icon"
      >
        <path
          d="M448 448c0 17.69-14.33 32-32 32h-96c-17.67 0-32-14.31-32-32s14.33-32 32-32h16v-144h-224v144H128c17.67 0 32 14.31 32 32s-14.33 32-32 32H32c-17.67 0-32-14.31-32-32s14.33-32 32-32h16v-320H32c-17.67 0-32-14.31-32-32s14.33-32 32-32h96c17.67 0 32 14.31 32 32s-14.33 32-32 32H112v112h224v-112H320c-17.67 0-32-14.31-32-32s14.33-32 32-32h96c17.67 0 32 14.31 32 32s-14.33 32-32 32h-16v320H416C433.7 416 448 430.3 448 448z"
        />
      </svg>
    </button>
    <div
      class="dropdown-menu show position-absolute top-100 start-0 d-flex flex-row gap-1 p-1"
      v-if="headerMenuIsOpen"
    >
      <button
        type="button"
        class="btn btn-sm btn-light"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ active: editor.isActive('heading', { level: 1 }) }"
      >
        H1
      </button>
      <button
        type="button"
        class="btn btn-sm btn-light"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ active: editor.isActive('heading', { level: 2 }) }"
      >
        H2
      </button>
      <button
        type="button"
        class="btn btn-sm btn-light"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ active: editor.isActive('heading', { level: 3 }) }"
      >
        H3
      </button>
      <button
        type="button"
        class="btn btn-sm btn-light"
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{ active: editor.isActive('heading', { level: 4 }) }"
      >
        H4
      </button>
      <button
        type="button"
        class="btn btn-sm btn-light"
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{ active: editor.isActive('heading', { level: 5 }) }"
      >
        H5
      </button>
      <button
        type="button"
        class="btn btn-sm btn-light"
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
        :class="{ active: editor.isActive('heading', { level: 6 }) }"
      >
        H6
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
