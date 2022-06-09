import registerService from "@/services/register-service";
import Register from "../models/Register";

let RegisterMixin = {
   // filters: {
        //data(data) {
          //return conversorDeData.aplicarMascaraEmDataIso(data);
        //},
    data(){
        return {
            register: [],
        }
    },

    mounted() {
        this.getAllRegisters();
    },

    methods: {    
        editRegister(register) {
          this.$router.push({ name: "EditRegister", params: { id: register.id } });
        },
    
        removeRegister(register) {
          this.$swal({
            icon: "question",
            title: "Deseja excluir o cadastro?",
            text: `Código: ${register.id} - Name: ${register.name}`,
            showCancelButton: true,
            confirmButtonColor: "#0039A8",
            confirmButtonText: "Sim",
            cancelButtonText: "Não",
            animate: true,
          }).then((result) => {
            if (result.isConfirmed) {
              registerService
                .remove(register.id)
                .then(() => {
                  let indice = this.register.findIndex((p) => p.id == register.id);
                  this.register.splice(indice, 1);
    
                    this.$swal({
                      icon: 'success',
                      title: 'Cadastro deletado com sucesso!',
                      confirmButtonColor: '#0039A8',
                      animate: true
                    });
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          });
        },
    
        orderRegisters(a, b) {
          // A < B = -1
          // A > B = 1
          // A == B = 0
          return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
        },
    
        getAllRegisters() {
          registerService
            .getAll()
            .then((response) => {
              let register = response.data.map((p) => new Register(p));
              this.register = register.reverse();
            })
            .catch((error) => {
              console.log(error);
            });
        },
    },
}

export default RegisterMixin;