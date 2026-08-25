<script setup lang="ts"></script>

<template>
  <Teleport to="body">
    <div class="modal-container">
      <div class="modal">
        <div class="modal-header">
          <slot name="header" />
        </div>
        <div class="modal-body"><slot /></div>
        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-container {
  @apply grid place-content-center w-screen h-screen fixed top-0 right-0 bottom-0 left-0 bg-black/[0.3] p-4 md:p-8;
}

.modal {
  @apply bg-white w-full rounded-md md:rounded-xl flex flex-col gap-2 md:gap-4 items-center justify-center;
}

.modal-header {
  @apply p-2 md:p-4;
}

.modal-body {
  @apply p-2 md:p-4 flex flex-col gap-2 md:gap-4;
}

.modal-footer {
  @apply p-2 md:p-4 flex justify-center items-center gap-2 md:gap-4;
}
</style>
