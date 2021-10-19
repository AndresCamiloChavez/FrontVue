<template>
  <div id="app" class="app">
    <!-- <div class="header">
      <h1>Banco UN</h1>
      <nav>
        <button v-if="is_auth">Inicio</button>
        <button v-if="is_auth">Cuenta</button>
        <button v-if="is_auth">Cerrar Sesión</button>
        <button v-if="!is_auth" v-on:click="loadLogIn">Iniciar Sesión</button>
        <button v-if="!is_auth" v-on:click="loadSignUp">Registrarse</button>
      </nav>
    </div>

    <div class="main-component">
      <router-view
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
      >
      </router-view>
    </div>

    <div class="footer">
      <h2>Misión TIC 2022</h2>
    </div> -->
    <div v-if="!is_auth" class="todo">
      <div class="contenedor">
        <div class="titulo">BesTender</div>
        <div>
          <img
            src="https://www.alpina.com/Portals/entertaiment/Images/tenderos-iconos/icon-tendero.png"
            alt=""
          />
        </div>
        <div class="seleccion">
          <div v-on:click="loadSignUp" class="button">Registrarse</div>
          <div v-on:click="loadLogIn" class="button">Iniciar Sesion</div>
          <br />
          <div v-on:click="verHome" class="button">Ver Home</div>
        </div>
        <h3 class="bienve">Bienvenido</h3>
      </div>
      <div class="muestra">
        <router-view
          v-on:completedLogIn="completedLogIn"
          v-on:completedSignUp="completedSignUp"
        >
        </router-view>
      </div>
    </div>
    <div class="homee" v-if="is_auth">
      <div class="header">
        <ul class="header-list">
          <li>Mi Proveedores</li>
          <li>Mi Inventario</li>
          <li>Mi Perfil</li>
        </ul>
      </div>

      <div v-on:click="verHome" class="button">Regresar</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      is_auth: false,
      home: true,
    };
  },
  components: {},
  methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;
      if (this.is_auth == false) this.$router.push({ name: "logIn" });
      else this$.router.push({ name: "home" });
    },
    loadLogIn: function () {
      this.$router.push({ name: "logIn" });
    },
    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },
    completedLogIn: function (data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación exitosa");
    },
    completedSignUp: function (data) {
      alert("registor exitoso");
      this.completedLogIn(data);
    },
    verHome: function () {
      this.is_auth = !this.is_auth;
    },
  },
  created: function () {
    this.verifyAuth();
  },
};
</script>

<style>
body {
  margin: 0 0 0 0;
}
.todo {
  display: flex;
}

.main-component {
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background: #fdfefe;
}

.titulo {
  padding-top: 40px;
  text-align: center;
  color: #e5e7e9;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 30px;
}
.contenedor {
  background: #30343f;
  width: 50%;
  height: 100vh;
  text-align: center;
}
.seleccion {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
}
.button {
  align-content: center;
  padding: 10px;
  margin: 20px;
  height: 20px;
  width: 150px;
  background: #30343f;
  color: white;
  border-radius: 15px;
  transform: scale(1);
  transition-property: transform;
  transition-duration: 200ms;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 300;
  border: 2px solid #778da9;
}
.button:hover {
  background: rgb(40, 72, 177);
  border: 2px solid #dcdee4;
  transform: scale(1.1);
  transition-property: transform;
  transition-duration: 200ms;
  cursor: pointer;
}
.bienve {
  color: beige;
}
.bienve:hover {
  font-size: 20px;
  color: grey;
}

div img {
  width: 200px;
  transform: scale(1);
  transition-property: transform;
  transition-duration: 300ms;
  padding: 10px;
}
div img:hover {
  transform: scale(0.7);
  transition-property: transform;
  transition-duration: 300ms;
  padding: 10px;
}

.muestra {
  background: beige;
  width: 65%;
  height: 100vh;
  position: relative;
}

/* HOME */
.homee {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background: beige;
}
.header {
  background: #30343f;
}
.header-list {
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: end;
}
.header-list li {
  width: 150px;
  height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
}
li:hover {
  background: #778da9;
 
}
</style>