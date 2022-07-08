<template>
    <div class="container">
        
        <div v-if="parte == 0" class="row justify-content-center">
            <div class="col-md-6">
                <div class="card border-success shadow-lg rounded p-3 mb-5" >
                    <div class="card-header border-success bg-white">
                        <div class="row">
                            <div class="col-8 text-start">
                                <p class="text-success h5">{{ titulo }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="mb-2">
                            <p>Olá,</p>
                            <p>Seja muito bem-vindo(a) ao:</p>
                            <p class="text-center fs-2">#vemproIF - 2022!!</p>
                            
                            <p>Faça seu cadastro para receber notícias do próximo processo seletivo.</p>
                            
                            <div class="alert alert-secondary">Atenção: Este cadastro não implica na realização de sua inscrição.</div>
                        </div>
                        
                        <div class="mb-12 text-end">
                            <button type="button" class="btn btn-success" @click="avancar">Iniciar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div v-if="parte == 1" class="row justify-content-center">
            <div class="col-md-6">
                <div class="card border-success shadow-lg rounded p-3 mb-5" >
                    <div class="card-header border-success bg-white">
                        <div class="row">
                            <div class="col-8 text-start">
                                <p class="text-success h5">{{ titulo }}</p>
                            </div>
                            <div class="col-4 text-end">
                                <span class="badge bg-success text-white rounded-pill">1/5</span>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="mb-2">
                                <label for="nome" class="form-label text-success">Qual seu nome completo?</label>
                                <input type="text" v-on:keyup.enter="validarNome" class="form-control" id="nome" required v-model="nome" placeholder="Digite aqui seu nome completo">
                                <div v-if="semNome" class="alert alert-danger">{{ msgErro }}</div>
                        </div>
                        
                        <div class="mb-12 text-end">
                            <button type="button" class="btn btn-success" @click="validarNome">Próximo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div v-if="parte == 2"  class="row justify-content-center">
            <div class="col-md-6">
                <div class="card border-success shadow-lg rounded p-3 mb-5" >
                     <div class="card-header border-success bg-white">
                        <div class="row">
                            <div class="col-8 text-start">
                                <p class="text-success">{{ titulo }}</p>
                            </div>
                            <div class="col-4 text-end">
                                <span class="badge bg-success text-white rounded-pill">2/5</span>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="mb-2">
                                <label for="email" class="form-label text-success">Qual o seu e-mail?</label>
                                <input type="text" v-on:keyup.enter="validarEmail" class="form-control" id="email" required v-model="email" placeholder="Digite aqui seu e-mail">
                                <div v-if="semEmail" class="alert alert-danger">{{ msgErro }}</div>
                        </div>
                        
                        <div class="mb-12 text-end">
                            <button type="button" class="btn btn-success" @click="voltar">Retornar</button>
                            <button type="button" class="btn btn-success" @click="validarEmail">Próximo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="parte == 3"  class="row justify-content-center">
            <div class="col-md-6">
                <div class="card border-success shadow-lg rounded p-3 mb-5" >
                     <div class="card-header border-success bg-white">
                        <div class="row">
                            <div class="col-8 text-start">
                                <p class="text-success">{{ titulo }}</p>
                            </div>
                            <div class="col-4 text-end">
                                <span class="badge bg-success text-white rounded-pill">3/5</span>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="mb-2">
                                <label for="telefone" class="form-label text-success">Qual o seu Fone/WhatsApp?</label>
                                <!-- <input type="text" v-on:keyup.enter="validarTelefone" class="form-control" id="telefone" required v-model="telefone"> -->
                                <the-mask type="text" v-on:keyup.native.enter="validarTelefone" class="form-control"  id="telefone"  required v-model="telefone"  :mask="['(##) ####-####', '(##) #####-####']"  :masked="true" placeholder="Digite seu telefone com DDD"></the-mask>
                                <div v-if="semTelefone" class="alert alert-danger">{{ msgErro }}</div>
                        </div>
                        
                        <div class="mb-12 text-end">
                            <button type="button" class="btn btn-success" @click="voltar">Retornar</button>
                            <button type="button" class="btn btn-success" @click="validarTelefone">Próximo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="parte == 4"  class="row justify-content-center">
            <div class="col-md-6">
                <div class="card border-success shadow-lg rounded p-3 mb-5" >
                     <div class="card-header border-success bg-white">
                        <div class="row">
                            <div class="col-8 text-start">
                                <p class="text-success">{{ titulo }}</p>
                            </div>
                            <div class="col-4 text-end">
                                <span class="badge bg-success text-white rounded-pill">4/5</span>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="mb-2">
                            <form class="form">
                                <label for="tipoCurso" class="form-label text-success">Qual o nível do curso que deseja cursar?</label>
                                <select class="form-select" v-model="tipoSelecionado" id="tipoCurso" required>
                                    <option v-for="tipo in tipoCurso" :value="tipo.id" :key="tipo.id">
                                       {{tipo.id}} - {{ tipo.name }}
                                    </option>
                                </select>
                            </form>
                        </div>
                        
                        <div class="mb-12 text-end">
                            <button type="button" class="btn btn-success" @click="voltar">Retornar</button>
                            <button type="button" class="btn btn-success" @click="validarTipoCurso">Próximo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="parte == 5"  class="row justify-content-center">
            <div class="col-md-6">
                <div class="card border-success shadow-lg rounded p-3 mb-5" >
                     <div class="card-header border-success bg-white">
                        <div class="row">
                            <div class="col-8 text-start">
                                <p class="text-success">{{ titulo }}</p>
                            </div>
                            <div class="col-4 text-end">
                                <span class="badge bg-success text-white rounded-pill">5/5</span>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="mb-2">
                            <form class="form">
                                <label for="cursos" class="form-label text-success">Selecione o curso desejado:</label>
                                <select class="form-select" v-model="cursoSelecionado" id="cursos" required>
                                    <option v-for="(curso, index) in listagemCursos" :value="curso.name" :key="curso.name">
                                       {{index+1}} - {{ curso.name }}
                                    </option>
                                </select>
                            </form>
                        </div>
                        
                        <div class="mb-12 text-end">
                            <button type="button" class="btn btn-success" @click="voltar">Retornar</button>
                            <button type="button" class="btn btn-success" @click="validaCurso">Próximo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div v-if="parte == 6"  class="row justify-content-center">
            <div class="col-md-6">
                <div class="card border-success shadow-lg rounded p-3 mb-5" >
                    <div class="card-header border-success bg-white">
                        <p class="text-success">{{ titulo }}</p>
                    </div>

                    <div class="card-body">
                        <div class="mb-2">
                            <div class="alert alert-warning fw-bold text-center">Atenção: Verifique seus dados antes de salvar!</div>
                            <p class="fs-6 lh-1">Nome:<br><span class="badge bg-secondary fs-6">{{ nome }}</span></p>
                            <p class="fs-6 lh-1">E-mail:<br><span class="badge bg-secondary fs-6">{{ email }}</span></p>
                            <p class="fs-6 lh-1">Telefone:<br><span class="badge bg-secondary fs-6">{{ telefone }}</span></p>
                            <p class="fs-6 lh-1">Nível do curso:<br><span class="badge bg-secondary fs-6">{{ nivelNome }}</span></p>
                            <p class="fs-6 lh-1">Curso de interesse:<br><span class="badge bg-secondary fs-6">{{ cursoSelecionado }}</span></p>
                        </div>
                        
                        <div class="mb-12 text-end">
                            <button type="button" class="btn btn-success" @click="voltar">Retornar</button>
                            <button type="button" class="btn btn-success" @click="salvar">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div v-if="parte == 7"  class="row justify-content-center">
            <div class="col-md-6">
                <div class="card border-success shadow-lg rounded p-3 mb-5" >
                    <div class="card-header border-success">
                        <p class="text-success">{{ titulo }}</p>
                    </div>

                    <div class="card-body">
                        <div class="row justify-content-center">
                            <p>Salvo com sucesso!!!</p>
                            <a class="btn btn-sm btn-success" href="http://ibiruba.ifrs.edu.br">Visite nosso site</a>
                            
                            <a class="btn btn-sm btn-success mt-2" @click="novoCadastro">Fazer novo cadastro</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
        data() {
            return {
                'titulo' : "#VemProIF 2022",
                'parte' : 7,
                'nome' : "",
                'email' : "",
                'telefone' : "",
                'semNome' : false,
                'semTelefone' : false,
                'semEmail' : false,
                'msgErro' : "",
                'tipoCurso' : [
                    {name: "Cursos Integrados", id: 1}, 
                    {name: "Cursos Subsequentes", id: 2},
                    {name: "Cursos Superiores", id: 3}
                ],
                'tipoSelecionado' : 1,
                'cursosSuperior' : [
                    {name: "Agronomia", id: 1}, 
                    {name: "Ciência da Computação", id: 2}, 
                    {name: "Engenharia Mecânica", id: 3}, 
                    {name: "Matemática", id: 4}, 
                    {name: "Não sei", id: 5}
                ],
                'cursosIntegrado' : [
                    {name: "Agropecuária", id: 1}, 
                    {name: "Informática", id: 2}, 
                    {name: "Mecânica", id: 3},
                    {name: "Não sei", id: 4}
                ],
                'cursosSubsequente' : [
                    {name: "Mecânica", id: 1}, 
                    {name: "Eletrotécnica", id: 2}, 
                    {name: "Não sei", id: 3}],
                'listagemCursos' : [],
                'cursoSelecionado' : "Ciência da Computação",
                'nivelNome' : "Cursos Superiores"
            }
        },


        filters: {
            
        },
        mounted() {
            console.log('Component mounted.')
        },
        computed: {
            
        },

        methods: {
            validarNome(){
                console.log("validar Nome")
                if(this.nome == "" || this.nome.length < 6){
                    this.semNome = true
                    this.msgErro = "Escreva seu nome completo"
                }else{
                    this.semNome = false
                    this.msgErro = ""
                    this.avancar()
                }
            },
            validarEmail(){
                if( this.email == ""){
                    this.semEmail = true
                    this.msgErro = "Preencha seu e-mail"
                }else{
                    if( !this.validateEmail(this.email) ){
                        this.semEmail = true
                        this.msgErro = "Escreva seu e-mail no formato correto"
                    }else{
                        this.semEmail = false
                        this.msgErro = ""
                        this.avancar()
                    }
                }
            },
            validarTelefone(){
                this.avancar()
            },
            salvar(){
                axios.post('/candidato', {
                    'nome': this.nome,
                    'email': this.email,
                    'telefone' : this.telefone,
                    'nivel' : this.nivelNome,
                    'curso' : this.cursoSelecionado
                })
                .then(response => {
                    var candidato = response.data
                    console.log("Axios - Candidato salvo com sucesso")
                    this.avancar()    
                })
                .catch(error => (
                    console.log("Axios - resposta erro: " + error)
                ));
                
            },
            avancar(){
                this.parte++
            },

            voltar(){
                this.parte--
            },

            validateEmail(value){
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
                    return true
                }else{
                    return false
                } 
            },

            validarTipoCurso(){
                switch(this.tipoSelecionado){
                    case 1: 
                        this.listagemCursos = this.cursosIntegrado
                        this.cursoSelecionado = this.cursosIntegrado[0].name
                        this.nivelNome = "Cursos Integrados"
                        break;
                    case 2:
                        this.listagemCursos = this.cursosSubsequente
                        this.cursoSelecionado = this.cursosSubsequente[0].name
                        this.nivelNome = "Cursos Subsequentes"
                        break;
                    case 3:
                        this.listagemCursos = this.cursosSuperior
                        this.cursoSelecionado = this.cursosSuperior[0].name
                        this.nivelNome = "Cursos Superiores"
                }
                //console.log(JSON.stringify(this.listagemCursos))
                this.avancar()
            },

            validaCurso(){
                this.avancar()
            },

            novoCadastro(){
                this.parte = 0
                this.nome = ""
                this.telefone = ""
                this.email = ""
                this.tipoSelecionado = 1
                this.listagemCursos = []

            }
        }
    }
</script>

<style lang="scss">
    
    .form-control:focus {
        border-color: #28a745;
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    } 

</style>