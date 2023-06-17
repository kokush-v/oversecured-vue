<template>
   <div class="px-10 py-5">
      <transition-group name="user-list">
         <div
            v-for="user in userList"
            class="text-xl w-full flex items-center gap-10 my-2 bg-slate-100 p-5 rounded-xl"
         >
            <UserItem :user="user" :key="user.date" /></div
      ></transition-group>
   </div>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
   components: {
      UserItem,
   },
   props: {
      userList: {
         type: Array,
         default: () => [],
      },
   },
};
</script>

<style lang="scss" scoped>
.user-list-item {
   display: inline-block;
   margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
   transition: all 0.3s ease;
}
.user-list-enter-from,
.user-list-leave-to {
   opacity: 0;
   transform: translateX(60px);
}
.user-list-move {
   transition: transform 0.2s ease;
}
</style>
