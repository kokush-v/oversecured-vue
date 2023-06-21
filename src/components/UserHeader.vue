<template>
   <header class="bg-slate-600 flex justify-around items-center">
      <span class="flex items-center gap-10">
         <h1 class="text-white text-2xl">User <b>SERVICE</b></h1>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="black"
            class="w-10 h-10 border bg-white border-white rounded-full p-1 cursor-pointer"
            @click="displayModal"
         >
            <path
               stroke-linecap="round"
               stroke-linejoin="round"
               d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
         </svg>
      </span>

      <search-bar v-model:text="searchbarText" @submit-search="updateInput" />
      <table-select v-model="selectedSort" :options="sortOtions" />
   </header>
</template>

<script>
export default {
   data() {
      return {
         searchbarText: "",
         sortOtions: [
            { value: "userId", name: "За датою" },
            { value: "name", name: "За іменем" },
            { value: "surname", name: "За прізвищем" },
         ],
         selectedSort: "",
      };
   },

   methods: {
      displayModal() {
         this.$emit("open-form", true, 0);
      },

      updateInput() {
         this.$emit("search", this.searchbarText);
      },
   },

   watch: {
      selectedSort() {
         this.$emit("filter-change", this.selectedSort);
      },
   },
};
</script>

<style lang="scss" scoped>
header {
   height: 8%;
   h1 {
      b {
         color: rgb(229, 99, 99);
      }
   }
}
</style>
