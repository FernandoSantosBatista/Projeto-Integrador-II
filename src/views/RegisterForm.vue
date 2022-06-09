<template>

  <div class="container col-sm-5 ">
    <div class="row " >
      <div class="col-sm-10">
        <h1 class="titulo">{{ registrationMode ? "Adicionar" : "Editar" }} Cadastros </h1>
        <p>Cadastre-se para receber doação</p>
        <hr />
      </div>
    </div>
    
    <div class="row">
      <div class="col-sm-10">
        <div class="form-group">
          <label class="form-label" for="id">Código</label>
          <input id="id" v-model="register.id" type="text" disabled class="form-control" />
        </div>
      </div>

      <div class="col-sm-10">
        <div class="form-group">
          <label class="form-label" for="name">Nome</label>
          <input id="name" v-model="register.name" type="text" class="form-control" />
        </div>
      </div>
 
      <div class="col-sm-10">
        <div class="form-group">
          <label class="form-label" for="district">Bairro</label>
          <input id="district" v-model="register.district" type="text" class="form-control" />
        </div>
      </div>

      <div class="col-sm-10">
        <div class="form-group">
          <label class="form-label" for="city">Cidade</label>
          <input id="city" v-model="register.city" type="text" class="form-control" />
        </div>
      </div>

      <div class="col-sm-10">
        <div class="form-group">
          <label class="form-label" for="email">Email</label>
          <input id="email" v-model="register.email" type="email" class="form-control" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-10">
        <hr />
      </div>

      <div class="col-sm-10">
        <div v-show="registrationMode" class="form-check-inline">
          <label class="form-check-label">
            <input v-model="continueAdding"  type="checkbox" class="form-check-input"  />
            Continuar adicionando
          </label>
        </div>

        <button  @click="cancelAction" class="btn btn-default float-right" type="button">
          Cancelar
        </button>
        <button @click="save" class="btn btn-primary float-right mr-2" type="button">
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import Register from '../models/Register';
import registerService from '../services/register-service';

export default {
    name:"RegisterForm",
    data(){
        return {

            register: new Register(),
            registrationMode: true,
            continueAdding: false,
        }
    },
    mounted(){
        let id = this.$route.params.id;
        if(!id) return;

        this.registrationMode = false;
        this.getRegisterbyId(id);
    },
    methods:{
        getRegisterbyId(id){
            registerService.getById(id)
            .then(response => {
                this.register = new Register(response.data);
            })
            .catch(error =>{
                console.log(error)
                this.$swal({
                  icon: 'error',
                  title: 'Não foi possível obter o cadastro pelo id ' + id,
                  confirmButtonColor: '#0039A8',
                  animate: true
                });
            })
        },

        cancelAction(){
            this.register = new Register();
            this.$router.push({name: "NewRegister"})
        },
        registerForm(){
            if(!this.register.modelValidForRegistration()){
                this.$swal({
                  icon: 'warning',
                  title: 'O nome é obrigatório para o cadastro.',
                  confirmButtonColor: '#0039A8',
                  animate: true
                });
                return;
            }

          registerService.register(this.register)
            .then(() => {
                this.$swal({
                  icon: 'success',
                  title: 'Cadastro concluido aguarde contato!',
                  confirmButtonColor: '#0039A8',
                  animate: true
                });

                this.register = new Register();

                if(!this.continueAdding){
                    this.$router.push({name: "NewRegister"})
                }
            })
            .catch(error =>{
                console.log(error);
                this.$swal({
                  icon: 'error',
                  title: 'Não foi possível cadastrar',
                  confirmButtonColor: '#0039A8',
                  animate: true
                });
            });
        },

        updateRegister(){
            if(!this.register.modelValidToUpdate()){
                this.$swal({
                  icon: 'warning',
                  title: 'O código e nome do cadastro são obrigatórios para o cadastro.',
                  confirmButtonColor: '#0039A8',
                  animate: true
                });
                return;
            }

            registerService.update(this.register)
            .then(() =>{
                this.$swal({
                  icon: 'success',
                  title: 'Cadastro atualizado com sucesso!',
                  confirmButtonColor: '#0039A8',
                  animate: true
                });
                this.$router.push({name: "RegisterController"});
            })
            .catch(error => {
                console.log(error);
                this.$swal({
                  icon: 'error',
                  title: 'Não foi possível atualizar o cadastro',
                  confirmButtonColor: '#0039A8',
                  animate: true
                });
            });
        },

        save(){
            (this.registrationMode) ? this.registerForm() : this.updateRegister();
        },
    }    
};
</script>

<style scoped>
.container{
    padding: 40px;
}

p{
  font-size: 16px;
}

</style>