<template>
   <div class="list px-10 py-5 overflow-y-auto overflow-x-hidden">
      <div>
         <transition-group name="user-list">
            <div
               v-if="userList.length > 0"
               v-for="user in userList"
               :key="user.userId"
               class="text-xl w-full flex items-center gap-10 my-2 bg-slate-100 p-5 rounded-xl"
            >
               <UserItem
                  :user="user"
                  @open-form="$emit('open-form', user)"
                  @delete-user="$emit('delete-user', user)"
               />
            </div>
            <div v-else-if="this.loading" class="flex flex-col items-center">
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
                  class="w-10"
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
               <b class="text-slate-500">Завантаження...</b>
            </div>
            <div v-else class="w-full text-center">
               <b class="text-slate-500 text-xl">(Таблиця пуста)</b>
            </div>
         </transition-group>
      </div>
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
      loading: {
         type: Boolean,
         default: true,
      },
   },
};
</script>

<style lang="scss" scoped>
.list {
   height: 92%;

   &::-webkit-scrollbar {
      width: 8px;
      background-color: #f5f5f5;
   }

   &::-webkit-scrollbar-thumb {
      background-color: #475569b6;
   }

   &::-webkit-scrollbar-thumb:hover {
      background-color: #2a3646b6;
   }

   &::-webkit-scrollbar-thumb:active {
      background-color: #23344bb6;
   }
}

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
