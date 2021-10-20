<template>
  <div class="logIn_user">
    <div class="container_logIn_user">
      <h2>Iniciar sesión</h2>
      <div>
        <img
          class="imgUserlogin"
          src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"
          alt="login"
        />
      </div>
      <form v-on:submit.prevent="processLogInUser">
        <input type="text" v-model="user.username" placeholder="Username" />
        <br />
        <input type="password" v-model="user.password" placeholder="Password" />
        <br />
        <button  class="button" type="submit">Iniciar Sesion</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "../config/axios";
export default {
  name: "LogIn",
  data: function () {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    processLogInUser: function () {
      axios
        .post("login/", this.user, { headers: {} })
        .then((result) => {
          let dataLogin = {
            username: this.user.username,
            token_access: result.data.access,
            token_refresh: result.data.refresh
          };
          this.$emit("completedLogIn", dataLogin);
        })
        .catch((error) => {
          if (error.response.status == "401") {
            alert("Error 401 Credenciales incorrectas");
          }
        });
    },
  },
};
</script>


<style>
.logIn_user {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container_logIn_user {
  border-radius: 10px;
  width: 70%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logIn_user h2 {
  color: #283747;
}
.logIn_user form {
  width: 70%;
}
.logIn_user input {
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;
  border: 1px solid #283747;
  border-radius: 10px;
}
.logIn_user button {
  width: 100%;
  height: 40px;
  color: #e5e7e9;
  background: #30343f;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0;
}
.logIn_user button:hover {
  color: #e5e7e9;
  background: rgb(40, 72, 177);
  border: 1px solid #283747;
}
.dimgUserlogin {
  width: 80px !important;
}
</style>