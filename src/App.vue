<template>
   <div
      class="w-4/5 h-screen m-auto border border-slate-600 shadow-lg shadow-gray-500"
   >
      <UserHeader @filter-change="sortData" />
      <UserList :userList="users" />
   </div>
</template>

<script>
import UserHeader from "./components/UserHeader.vue";
import UserList from "./components/UserList.vue";

export default {
   components: { UserHeader, UserList },
   data() {
      return {
         users: [
            { date: "168699772639", name: "Jhon", surname: "Burdony" },
            { date: "126997772639", name: "Ben", surname: "Bimbom" },
            { date: "136997772639", name: "Olaf", surname: "Joom" },
         ],
      };
   },
   methods: {
      sortData(value) {
         this.users.sort((u1, u2) => {
            return u1[value].localeCompare(u2[value]);
         });
      },
   },
};
</script>

<style lang="scss" scoped></style>
