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
      <div class="flex relative">
         <search-bar
            v-model:text="searchbarText"
            @submit-search="updateInput"
         />
         <span v-if="loading" class="w-7 absolute right-2 top-1 p-1">
            <svg
               version="1.1"
               id="L7"
               xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               x="0px"
               y="0px"
               viewBox="0 0 100 100"
               enable-background="new 0 0 100 100"
               xml:space="preserve"
            >
               <path
                  fill="#2a3646b6"
                  d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
               >
                  <animateTransform
                     attributeName="transform"
                     attributeType="XML"
                     type="rotate"
                     dur="2s"
                     from="0 50 50"
                     to="360 50 50"
                     repeatCount="indefinite"
                  />
               </path>
               <path
                  fill="#2a3646b6"
                  d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
               >
                  <animateTransform
                     attributeName="transform"
                     attributeType="XML"
                     type="rotate"
                     dur="1s"
                     from="0 50 50"
                     to="-360 50 50"
                     repeatCount="indefinite"
                  />
               </path>
               <path
                  fill="#2a3646b6"
                  d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z"
               >
                  <animateTransform
                     attributeName="transform"
                     attributeType="XML"
                     type="rotate"
                     dur="2s"
                     from="0 50 50"
                     to="360 50 50"
                     repeatCount="indefinite"
                  />
               </path>
            </svg>
         </span>
      </div>
      <div class="flex items-center gap-5">
         <span>
            <svg
               viewBox="0 0 21 21"
               xmlns="http://www.w3.org/2000/svg"
               transform="rotate(270)"
               class="w-8 h-8 cursor-pointer"
               @click="$emit('reverse-list')"
            >
               <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
               <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               ></g>
               <g id="SVGRepo_iconCarrier">
                  <g
                     fill="none"
                     fill-rule="evenodd"
                     stroke="#fff"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     transform="translate(4 2)"
                  >
                     <path d="m4.5 8.5-4 4 4 4"></path>
                     <path d="m12.5 12.5h-12"></path>
                     <path d="m8.5.5 4 4-4 4"></path>
                     <path d="m12.5 4.5h-12"></path>
                  </g>
               </g>
            </svg>
         </span>
         <table-select v-model="selectedSort" :options="sortOtions" />
      </div>
   </header>
</template>

<script>
export default {
   data() {
      return {
         sortOtions: [
            { value: "userId", name: "За датою" },
            { value: "name", name: "За іменем" },
            { value: "surname", name: "За прізвищем" },
         ],
         selectedSort: "",
         searchbarText: this.searchBar,
      };
   },

   props: {
      searchBar: {
         type: String,
      },
      loading: {
         type: Boolean,
      },
   },

   methods: {
      displayModal() {
         this.$emit("open-form", true, 0);
      },

      updateInput() {
         this.$emit("update:searchBar", this.searchbarText);
         this.$emit("update:loading", true);
         this.$emit("search");
      },
   },

   watch: {
      selectedSort() {
         this.$emit("filter-change", this.selectedSort);
      },
      searchBar() {
         this.searchbarText = this.searchBar;
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
