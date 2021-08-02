<template>
    <div>
        <b-modal id="modal-1" title="Login" hide-footer ref="my-modal">
            <b-form-group label-cols="12" label-cols-lg="12" label="Title" label-for="input-default">
                <b-form-input id="input-default" v-model="title"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="12" label-cols-lg="12" label="Name" label-for="input-default">
                <b-form-input id="input-default" v-model="name"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="12" label-cols-lg="12" label="E-Mail" label-for="input-default">
                <b-form-input id="input-default" v-model="email"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="12" label-cols-lg="12" label="Password" label-for="input-default">
                <b-form-input id="input-default" v-model="password" type="password"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="12" label-cols-lg="12" label="Langue" label-for="input-default">
                <select class="form-control" v-model="langue">
                        <option selected value="">Lütfen Seçim Yapınız</option>
                        <option v-for="items in getCountryList" :key="items.id" :value="items.id"> {{items.name}} </option>
                </select>
            </b-form-group>
            <b-button variant="success" @click="login">Login</b-button>
        </b-modal>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'
    import axios from 'axios'
    export default {
        name:"login",
        data(){
            return{
                title:"",
                name:"",
                email:"",
                password:"",
                langue:""
            }
        },
        created(){
            this.langue = this.$store.getters.getLangue
        },
        computed:{
            ...mapGetters(["getTitle","getName","getEmail","getPassword","getCountryList"])
        },
        methods:{
            ...mapMutations(["setTitle","setName","setEmail","setPassword","setIsLogin","setDummyText","setLang"]),
            langChange(name){
                this.setLang(name)
                axios.get("./data/dummyText.json")
                .then(response =>{
                    response.data.map((e) => {
                        if(e.langId == this.$store.getters.getLangue){
                            this.setDummyText(e)
                        }
                    })
                })
            },
            login(){
                this.setTitle(this.title);
                this.setName(this.name);
                this.setEmail(this.email);
                this.setPassword(this.password);
                document.title = this.title;
                this.setIsLogin(true);
                this.langChange(this.langue);
                this.hideModal()
            },
            hideModal() {
                this.$refs['my-modal'].hide()
            }
        }
    }
</script>

<style>

</style>