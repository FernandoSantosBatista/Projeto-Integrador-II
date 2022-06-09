<template>
<body>
<div class="container-fluid">
  <div class="hero-image">
    <div class="hero-text p3">
      <h1>Bem vindo ao Apoio a Criança </h1>
      <h3>Conheça mais sobre <br> APLV (Alergia a Proteina do Leite Vaca) </h3>
    </div>
  </div>
  <div class="container">
    <h2 class="col h3 text-right">Nosso Objetivo</h2>
    <h3 class="text-right">Ajudar....</h3>
    <p >O objetivo deste projeto é realizar um grupo de apoio a famílias de 
      crianças que possuem diagnóstico de APLV: são famílias que necessitam 
      de muita ajuda, pois além de se depararem com muitas dúvidas, o indivíduo 
      que sofre com todos os males causados pela alergia é uma criança, o que deixa 
      os responsáveis ainda mais angustiados.
      O foco principal será a realização de um banco de dados com responsáveis
      de crianças com APLV, para que haja o apoio às famílias, por meio de doações de fórmulas por 
      empresas que tenham essa fórmula sobressalente e/ou outras pessoas que se sensibilizarem a fazer a doação.
      Com este cadastro, quem estiver interessado em fazer a doação, filtrará a família mais próxima de sua residência e agendará a entrega em local firmado em comum acordo. 
      <a href="https://apoioaplv.herokuapp.com/sobre"><i class="bi-font bi bi-chevron-double-right">Mais Informaçoes...</i></a></p>
</div>
</div>
</body>
</template>
<script>

export default {
  name: "Dashboard",
  components: {
  },

  data() {
    return {
    };
  },

};
</script>
<style>
body {
    margin: 0;
    padding: 0;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
  }
  
h1{
  font-size:40px;
}

.bi-font{
  text-decoration: none;
  color:#212529;
  font-size: 20px;
}
.bi-font:hover {
    text-decoration:none;
    color: #0D6EFD;
}
 
.hero-image {
  background-image: linear-gradient(rgba(46, 44, 44, 0.5), rgba(10, 10, 10, 0.5)), url(~@/assets/images/aplv.jpg);
  height: 60vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.container-fluid {
  padding-right: unset;
  padding-left: unset;
}

.container, .container-lg, .container-md, .container-sm {
    max-width: 960px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.title{
  color: rgb(4, 10, 92);
}

.text{
  font-size: 18px;
}

a{
  text-decoration: none;
  color:rgb(18, 18, 19);
}
a:hover {
    text-decoration:none;
    color: #090753;
}

</style>
