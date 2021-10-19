<template>
  <div class="contenedor-home">

    <div>
      <ul>
        <!-- <li v-for="usuario of usuarios" key="usuario.id">{{usuario.name}}</li> -->
      </ul>
    </div>
  </div>
  
</template>
<script>
export default {
  name: "Homee",
  data: function () {
    return {
      is_auth: false,
    };
  },
  data: function () {
    return {
      username: localStorage.getItem("username") || "none",
      usuarios: [
        {
          id: 1,
          username: "Andres1",
          password: "1234",
          name: "Andres",
          email: "ad@gmail.com",
          nombreTienda: "Pagemenos",
        },
        {
          id: 2,
          username: "Laura32",
          password: "12344",
          name: "Luara",
          email: "la@gmail.com",
          nombreTienda: "PagaBajo",
        },
        {
          id: 3,
          username: "Erikka",
          password: "123443",
          name: "Erika",
          email: "ek@gmail.com",
          nombreTienda: "CuatroEsquinas",
        },
        {
          id: 4,
          username: "Marcela",
          password: "maec",
          name: "Marcela",
          email: "mar@gmail.com",
          nombreTienda: "Tiendabaja",
        },
      ],
    };
  },
};
</script>
<style>
.contenedor-home {
  width: 100%;
  height: 100vh;
  background: red;
  position: relative;
  z-index: 10;
}
</style>