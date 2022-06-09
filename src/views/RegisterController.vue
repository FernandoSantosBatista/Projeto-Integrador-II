<template>
  <div class="container">
    <div class="row">
      <div class="title col-sm-12">
        <h2 class="title00">Cadastros</h2>
        <hr />
      </div>
    </div>

    <div class="subcontainer row sub-cointainer">
      <div class="col-sm-2">
        <Button :callback="addRegister" value="Adicionar"></Button>
      </div>
      <div class="col-sm-8">
        <a @click="seeHome" class="float-end ver-em-cards"> Home </a>
      </div>
    </div>

    <div class="row">
      <div class="table-responsive col-sm-12">
        <table class="table table-hover table-borderless ">
          <thead>
            <tr>
              
              <th>Nome</th>
              <th>Bairro</th>
              <th>Cidade</th>
              <th>email</th>
              <th>Ações</th>
             
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in register" :key="item.id">
              <td>{{item.name}}</td>
              <td>{{item.district}}</td>
              <td>{{item.city }}</td>
              <td>{{item.email}}</td>
              <td>
                <i
                  @click="editRegister(item)"
                  class="bi bi-pen-fill edit"
                ></i>
                <i
                  @click="removeRegister(item)"
                  class="bi bi-trash3-fill remove"
                ></i>
              </td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../components/button/Button.vue";
import RegisterMixin from '../mixins/register-mixin';

export default {
  name: "RegisterController",
  mixins:[RegisterMixin],
  components: {
    Button,
  },

  data() {
    return {
    };
  },

  methods: {
    seeHome(){
      this.$router.push({ name: "Dashboard" });
    },

    addRegister() {
      this.$router.push({ name: "NewRegister" });
    }
  },
};
</script>
<style scoped>
.edit {
  color: #090753;
  cursor: pointer;
  margin: 5px;
}
.remove {
  color: #FF0000;
  cursor: pointer;
  margin: 5px;
}
.ver-em-cards {
 
  cursor: pointer;
  color: var(--cor-primaria);
  
}

.title{
  padding: 5px;
  color: #212F36;
}

.table{
  margin-top: 20px;
  font-size: 18px;
}


</style>
