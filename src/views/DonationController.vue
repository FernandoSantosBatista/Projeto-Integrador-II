<template>
<body>
  <div class="container-fluid">

<!--Ferramenta VLibras Widget-->
  <div vw class="enabled">
    <div vw-access-button class="active"></div>
      <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper">
        </div>
      </div>
  </div>
  
    <div class="donation text-center">
      <h2 ><strong>Área de doação: Relação de Cadastrados</strong></h2> 
      <p>Clique no cadastro mais próximo de sua residência para realizar a doação.</p>
    </div>

    <div class="container">
      <div class="row height d-flex justify-content-center align-items-center">
        <div class="col-md-6">
          <div class="form">
          <input type="search"  v-model="search" class="form-control form-input" placeholder="Digite o nome da cidade"/>
          </div>
        </div>
      </div>
    </div>

  <div class="container">
    <div class="cards row row-cols-1 row-cols-md-3 g-3" >
      <div class="" v-for="item in filteredRegister" :key="item.id"> 
       <a :href="`mailto: ${item.email}?subject=Bem%20vindo%20ao%20apoio%20a%20crian%C3%A7a%20APLV&body=Ol%C3%A1%20vi%20o%20seu%20cadastro%20no%20site%20https%3A%2F%2Fapoioaplv.netlify.app%2F%20tenho%20interesse%20em%20ajudar.`">
        <div class="card shadow" style="width: 30rem;">
          <ul class="list-group list-group-flush">
            <i class="bi bi-reply-all-fill"></i>
            <li class="list-group-item"> <strong> Nome: </strong> {{item.name}}</li>
            <li class="list-group-item"> <strong> Bairro: </strong> {{item.district}}</li>
            <li class="list-group-item"> <strong> Cidade: </strong> {{item.city}}</li>
            <li class="list-group-item" hidden> <strong> Email: </strong> {{item.email}}</li>
            <i class="bi bi-hand-index"></i>
          </ul>
          </div>
        </a>
      </div> 
    </div>
    <div class="back d-md-flex justify-content-md-end">
            <a href="#topo" type="button" class="btn btn-primary btn-lg float-end"><i class="bi bi-arrow-up-circle text-white">Voltar ao Topo</i></a>
          </div>
  </div>
</div>
</body>
</template>
<script>

import RegisterMixin from '../mixins/register-mixin';

export default {
  name: "DonationrController",
  mixins:[RegisterMixin],
  components: {
  },

  data() {
    return {
      search: '',
     
    };
  },
  computed: {
    filteredRegister() {
      return this.register.filter(item => {
        return item.city.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
};
</script>
<style>

body {
    margin: 0;
    padding: 0;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    margin-bottom: auto;
  }

.shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: left;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
}
.shadow:hover {
  border: 2.5px solid #2196f3;
  width: 30rem;
}
.shadow a {
  text-decoration: none;
}

h2 {
    margin-top: 40px;
}

.bi{
  font-size: 20px;
  color: #2196f3;
  text-align: center;
}

.container-fluid {
  padding-right: unset;
  padding-left: unset;
}

.container, .container-lg, .container-md, .container-sm {
    max-width: 960px;
    margin-top: 20px;
    margin-bottom: 40px;
}

.back{
  margin-top: 20px;
  margin-bottom: 90px;
}

.donation{
  margin-top: 60px;
  margin-bottom:  40px;
}

.cards{
  
  margin-bottom: 30px;
}
</style>
