<template>
   <form
      @submit.prevent="$emit('submit-search')"
      className="relative block w-1/5"
   >
      <span class="absolute m-1">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="gray"
            class="w-7 h-7"
         >
            <path
               stroke-linecap="round"
               stroke-linejoin="round"
               d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
         </svg>
      </span>

      <input
         className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
         placeholder="Пошук..."
         :value="text"
         @input="updateInput"
         type="text"
         name="search"
      />
   </form>
</template>

<script>
export default {
   name: "search-bar",
   props: {
      text: [String, Number],
   },
   methods: {
      updateInput(event) {
         this.$emit("update:text", event.target.value.trim());
      },
   },
   setup() {
      return {};
   },
};
</script>

<style lang="scss" scoped></style>
