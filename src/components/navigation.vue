<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand to="/">Burası Logo Olacak</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav v-for="items in getDummyMenu" :key="items.name">
                    <b-nav-item :to="items.root">{{items.name}}</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <select class="form-control" v-model="getLangue" @change="langChange">
                        <option v-for="items in getCountryList" :key="items.id" :value="items.id"> {{items.name}} </option>
                    </select>
                    <div class="ml-1">
                        <b-button v-b-modal.modal-1 v-if="!getIsLogin">{{getDummyLoginText.loginText}}</b-button>
                        <b-nav-item-dropdown right v-if="getIsLogin">
                            <template #button-content>
                                <em>{{getEmail}}</em>
                            </template>
                            <b-dropdown-item to="/myAccount">
                                <span v-if="getLangue == 'TR'">Hesabım</span>
                                <span v-if="getLangue == 'US'">My Account</span>
                            </b-dropdown-item>
                            <b-dropdown-item @click="signOut">
                                <span v-if="getLangue == 'TR'">Çıkış Yap</span>
                                <span v-if="getLangue == 'US'">Logout</span>
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                    </div>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <login/>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'
    import axios from 'axios'
    import Login from './login.vue'
    export default {
        name: 'navigation',
        components: {
            Login
        },
        created(){
            axios.get("./data/dummyText.json")
            .then(response =>{
                response.data.map((e) => {
                    if(e.langId == this.$store.getters.getLangue){
                        this.setDummyMenu(e.menu)
                        this.setDummyLoginText(e)
                    }
                })
            })
        },
        computed:{
            ...mapGetters(["getCountryList","getIsLogin","getEmail","getTitle","getLangue","getDummyMenu","getDummyLoginText"])
        },
        methods:{
            ...mapMutations(["setLang","setDummyText","setTitle","setName","setEmail","setPassword","setIsLogin","setDummyMenu","setDummyLoginText"]),
            langChange(e){
                this.setLang(e.target.value)
                axios.get("./data/dummyText.json")
                .then(response =>{
                    response.data.map((e) => {
                        if(e.langId == this.$store.getters.getLangue){
                            console.log(e.menu)
                            this.setDummyText(e)
                            this.setDummyMenu(e.menu)
                            this.setDummyLoginText(e)
                        }
                    })
                })
            },
            signOut(){
                this.setTitle("Login");
                this.setName("");
                this.setEmail("");
                this.setPassword("");
                document.title = this.getTitle;
                this.setTitle("");
                this.setIsLogin(false);
            }
        }
    }
</script>