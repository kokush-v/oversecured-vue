<template>
   <div
      id="app-div"
      class="w-4/5 h-screen m-auto border border-slate-600 shadow-lg shadow-gray-500 overflow-hidden"
   >
      <UserHeader
         @filter-change="sortData"
         @open-form="openForm"
         @search="findUsers"
      />
      <UserList
         :userList="users"
         :loading="loadingList"
         @open-form="openForm"
         @delete-user="openDeleteForm"
      />
      <modal-window v-model:show="formDisplay">
         <UserForm
            v-model:editUser="actionUser"
            @create="createUser"
            @update="updateUser"
         />
      </modal-window>
      <modal-window v-model:show="deleteForm">
         <DeleteConfirmation
            v-model:deletedUser="actionUser"
            @delete="deleteUser"
         />
      </modal-window>
   </div>
</template>

<script>
import UserHeader from "./components/UserHeader.vue";
import UserList from "./components/UserList.vue";
import UserForm from "./components/UserForm.vue";
import DeleteConfirmation from "./components/DeleteConfirmation.vue";
import { GET_USERS, FIND_USERS } from "./api/api.urls";

export default {
   components: { UserHeader, UserList, UserForm, DeleteConfirmation },
   data() {
      return {
         users: [],
         formDisplay: false,
         deleteForm: false,
         actionUser: {},
         loadingList: true,
      };
   },
   methods: {
      sortData(value) {
         this.users.sort((u1, u2) => {
            return u1[value].localeCompare(u2[value]);
         });
      },
      openForm(user) {
         this.formDisplay = true;
         this.actionUser = user
            ? {
                 userId: user.userId,
                 name: user.name,
                 surname: user.surname,
              }
            : null;
      },
      openDeleteForm(user) {
         this.actionUser = user;
         this.deleteForm = true;
      },
      async getUsers() {
         try {
            fetch(GET_USERS)
               .then((response) => response.json())
               .then((data) => {
                  this.users = data.data;
                  this.loadingList = false;
               })
               .catch((error) => {
                  console.error(error);
               });
         } catch (e) {}
      },

      async createUser(user) {
         user.userId = Date.now().toString();
         fetch(GET_USERS, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
            mode: "no-cors",
         })
            .then(() => {
               this.formDisplay = false;
               this.getUsers();
            })

            .catch((error) => {
               console.error(error);
            });
      },
      async updateUser(user) {
         fetch(GET_USERS + `/${user.userId}`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: user.name, surname: user.surname }),
            mode: "no-cors",
         })
            .then(() => {
               this.formDisplay = false;
               const index = this.users.findIndex(({ userId }) => {
                  return userId === user.userId;
               });
               this.users[index] = user;
            })
            .catch((error) => {
               console.error(error);
            });
      },

      async deleteUser() {
         fetch(GET_USERS + `/${this.actionUser.userId}`, {
            method: "DELETE",
         })
            .then(() => {
               this.deleteForm = false;
               this.getUsers();
            })
            .catch((error) => {
               console.error(error);
            });
      },

      async findUsers(searchString) {
         if (searchString !== "") {
            try {
               fetch(FIND_USERS + `/${searchString}`)
                  .then((response) => response.json())
                  .then((data) => {
                     this.users = data.data;
                     this.loadingList = false;
                  })
                  .catch((error) => {
                     console.error(error);
                  });
            } catch (e) {}
         } else this.getUsers();
      },
   },
   mounted() {
      this.getUsers();
   },
};
</script>

<style lang="scss" scoped></style>
