<script setup lang="ts">
import { toRefs, watch, computed } from "vue";
import type { ShallowRef } from "vue";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import type { Editor } from "@tiptap/vue-3";
import { TextStyle } from "@tiptap/extension-text-style";
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
    emit("update:modelValue", editor.value?.getHTML() ?? "");
  },
  // StarterKit enthält seit Tiptap 3 auch Underline und Strike. Link und TrailingNode sind neu und bleiben aus,
  // damit das erzeugte HTML wie bisher bleibt (keine Links, kein automatisch angehängter leerer Absatz).
  extensions: [StarterKit.configure({ link: false, trailingNode: false }), TextStyle],
  editorProps: {
    attributes: {
      class: "w-100 p-2 p-md-3",
    },
  },
});

watch(content, (value) => {
  if (value !== editor.value?.getHTML()) {
    // Seit Tiptap 3 löst setContent standardmäßig ein Update aus; Änderungen von außen sollen nicht zurückgemeldet werden
    editor.value?.commands.setContent(value, { emitUpdate: false });
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
