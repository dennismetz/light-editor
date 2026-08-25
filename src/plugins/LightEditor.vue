<script setup lang="ts">
import { toRefs, watch, computed } from "vue";
import type { ShallowRef } from "vue";
import type { Editor } from "@tiptap/core";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import Strike from "@tiptap/extension-strike";
import StarterKit from "@tiptap/starter-kit";
import components from "./components";
import type { Component } from "./components";

const props = defineProps<{
  modelValue: string;
  classic?: boolean;
  advanced?: boolean;
  basic?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const { modelValue: content, classic, advanced } = toRefs(props);

function renderCondition(component: Component) {
  if (component.type === "advanced" && advanced.value) {
    return true;
  } else if (component.type === "classic" && classic.value) {
    return true;
  } else if (component.type === "basic") {
    return true;
  } else {
    return false;
  }
}

const fileteredComponents = computed(() => {
  return components.filter(renderCondition);
});

const editor: ShallowRef<Editor | undefined> = useEditor({
  content: content.value,
  onUpdate: () => {
    // HTML
    emit("update:modelValue", editor.value.getHTML());
  },
  extensions: [StarterKit, Underline, TextStyle, Strike],
  editorProps: {
    attributes: {
      class: "w-100 p-2 p-md-3",
    },
  },
});

watch(content, (value) => {
  if (value !== editor.value?.getHTML()) {
    editor.value?.commands.setContent(value);
  }
});
</script>
<template>
  <div v-if="editor" class="editor-container border rounded overflow-hidden d-flex flex-column">
    <div class="editor-toolbox d-flex flex-wrap align-items-center gap-1 gap-md-2 p-2 border-bottom bg-light">
      <component
        v-for="component in fileteredComponents"
        :key="component.name"
        :is="component.component"
        :editor="editor"
      />
    </div>

    <editor-content :editor="editor" />
  </div>
</template>

<style scoped></style>
