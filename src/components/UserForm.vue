<template>
   <form
      @submit.prevent
      class="main-form flex flex-col gap-6 w-full h-full items-center justify-center"
      action=""
   >
      <div class="relative w-5/6">
         <input
            v-bind:value="user.name"
            name="userName"
            type="text"
            @input="user.name = $event.target.value.trim()"
         />
         <label for="userName">Ім'я</label>
      </div>
      <div class="relative w-5/6">
         <input
            v-bind:value="user.surname"
            name="userSurname"
            type="text"
            @input="user.surname = $event.target.value.trim()"
         />
         <label for="userName">Прізвище</label>
      </div>
      <div class="w-5/6 flex justify-center">
         <input
            v-if="!loading"
            type="submit"
            :value="editUser.userId === undefined ? 'Додати' : 'Змінити'"
            :disabled="user.name && user.surname ? false : true"
            @click="formSubmit"
         />
         <div v-else>
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
         </div>
      </div>
   </form>
</template>

<script>
export default {
   data() {
      return {
         loading: false,
         user: {
            userId: this?.editUser?.userId,
            name: this?.editUser?.name,
            surname: this?.editUser?.surname,
         },
      };
   },

   props: {
      editUser: {
         userId: {
            type: Number,
         },
         name: {
            type: String,
         },
         surname: {
            type: String,
         },
      },
   },
   methods: {
      formSubmit() {
         this.loading = true;
         if (this.editUser.userId === undefined) {
            this.createUser();
         } else {
            this.updateUser();
         }
      },
      updateUser() {
         this.$emit("update", this.user);
      },
      createUser() {
         this.$emit("create", this.user);
      },
   },
};
</script>

<style lang="scss">
.main-form {
   label {
      position: absolute;
      top: -7px;
      left: 5px;
      background-color: white;
      padding: 0.2em 0.5em;

      transition: all 0.2s linear;
   }

   input[type="text"],
   select {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
   }

   input[type="text"]:focus {
      + label {
         top: -25px;
         left: -5px;
         scale: 0.9;
      }
   }

   input[type="submit"] {
      transition: all 0.2s linear;
      width: 100%;
      background-color: #475569;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      border-radius: 4px;
   }

   input[type="submit"]:hover:enabled {
      cursor: pointer;
      background-color: #394555;
   }

   input[type="submit"][disabled] {
      opacity: 0.8;
      cursor: default;
   }
}
</style>
