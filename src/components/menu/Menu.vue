<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="topo">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-item text-white nav-link">Home</router-link>
        </li>
        
        <li class="nav-item">
          <router-link to="/gerenciamento-de-cadastros/novo" class="nav-item text-white  nav-link">Cadastrar</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/doar" class="nav-item text-white nav-link">Quero Doar</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/sobre" class="nav-item text-white nav-link">Entenda</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name:"Menu",
    data(){
        return{

        }
    },
}

</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@700&family=Roboto+Slab:wght@600&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto Slab', serif;
  font-size: 20px;
}

.navbar {
    background: linear-gradient(to right, #070070, #0a5cf5);
}
nav a {
  text-decoration: none;
}
nav a:hover {
  background: linear-gradient(to right, #1404fc, #0a5cf5);
}


</style>