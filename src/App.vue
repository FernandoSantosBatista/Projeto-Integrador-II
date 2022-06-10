<template>
  <div id="app">
    <Menu/>
    <!--Ferramenta VLibras Widget-->
  <div vw class="enabled">
    <div vw-access-button class="active"></div>
      <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper">
        </div>
      </div>
  </div>
     <router-view/>
    <Footer/>
  </div>
</template>
<script>

import Menu from "@/components/menu/Menu.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  components:{
    Menu,
    Footer
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500&display=swap');

  :root{
    --cor-primaria: #0039A8;
    --cor-secundaria: #296CDB;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Josefin Sans', sans-serif;
  }
  

  /* Override */
  .btn-primary,
  .btn-primary:active
  .btn-primary:focus,
  .btn-primary:focus-visible,
  .btn-primary:visited,
  .btn-primary:not(:disabled):not(.disabled):active{
    color: #fff;
    background-color: var(--cor-primaria);
    border: var(--cor-primaria);
    outline: none;
    box-shadow: none;
    min-width: 90px;
  }

  .btn-primary:hover{
    color: #fff;
    background-color: var(--cor-secundaria);
    border-color: var(--cor-secundaria);
  }

</style>
