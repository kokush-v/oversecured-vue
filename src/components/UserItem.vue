<template>
   <div>{{ formatDateNow(user.userId) }}</div>
   <div>{{ user.name }}</div>
   <div>{{ user.surname }}</div>
   <div class="btn" @click="$emit('open-form', user)">
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke-width="1.5"
         stroke="currentColor"
      >
         <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
         />
      </svg>
   </div>
   <div class="btn" @click="$emit('delete-user', user)">
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke-width="1.5"
         stroke="currentColor"
      >
         <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
         />
      </svg>
   </div>
</template>

<script>
export default {
   props: {
      user: {
         date: { type: String },
         name: { type: String },
         surname: { type: String },
      },
   },
   emits: ["open-form", "delete-user"],
   methods: {
      formatDateNow(date) {
         const currentDate = new Date(parseInt(date));
         return currentDate.toUTCString();
      },
   },
};
</script>

<style lang="scss" scoped>
div {
   width: 25%;
   text-align: center;
}
.btn {
   width: 32px;
   height: 32px;
   cursor: pointer;
}
</style>
