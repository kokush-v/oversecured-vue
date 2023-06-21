<template>
   <div
      v-if="show"
      class="top-0 bottom-0 right-0 left-0 bg-opacity-25 bg-slate-700 fixed flex"
      @click.stop="hideModal"
   >
      <div
         @click.stop
         class="m-auto bg-white rounded-xl p-6 flex flex-row gap-6 w-4/12 h-1/3"
      >
         <slot></slot>
      </div>
   </div>
</template>

<script>
export default {
   name: "modal-window",
   props: {
      show: {
         type: Boolean,
         default: false,
      },
      confirmWord: {
         type: String,
      },
   },
   methods: {
      hideModal() {
         this.$emit("update:show", false);
         this.$emit("update:confirmWord", "");
      },
   },
};
</script>

<style lang="scss" scoped></style>
