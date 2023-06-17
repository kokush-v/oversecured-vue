<template>
   <select
      :value="modelValue"
      @change="changeOption"
      class="h-10 rounded-lg p-1"
   >
      <option disabled value="">Сортувати таблицю за...</option>
      <option
         v-for="option in options"
         :key="option.value"
         :value="option.value"
      >
         {{ option.name }}
      </option>
   </select>
</template>

<script>
export default {
   name: "table-select",
   props: {
      modelValue: {
         type: String,
      },
      options: {
         type: Array,
         default: () => [],
      },
   },
   methods: {
      changeOption(event) {
         this.$emit("update:model-value", event.target.value);
      },
   },
};
</script>

<style lang="scss" scoped></style>
