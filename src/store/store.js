import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state:{
        isLogin:false,
        lang:"TR",
        dummyText:{},
        countryList:[
            { id: "TR", name: "Turkey" },
            { id: "US", name: "United States of America" },
            { id: "GB", name: "United Kingdom" },
            { id: "DE", name: "Germany" },
            { id: "SE", name: "Sweden" },
            { id: "KE", name: "Kenya" },
            { id: "BR", name: "Brazil" },
            { id: "ZW", name: "Zimbabwe" }
        ],
        title:"",
        name:"",
        email:"",
        password:""
    },
    getters:{
        getCountryList(state){
            return state.countryList
        },
        getIsLogin(state){
            return state.isLogin
        },
        getLangue(state){
            return state.lang
        },
        getDummyText(state){
            return state.dummyText
        },
        getTitle(state){
            return state.title
        },
        getName(state){
            return state.name
        },
        getEmail(state){
            return state.email
        },
        getPassword(state){
            return state.password
        }
    },
    mutations:{
        setLang(state, value){
            state.lang = value
        },
        setIsLogin(state, value){
            state.isLogin = value
        },
        setDummyText(state, value){
            state.dummyText = value
        },
        setTitle(state, value){
            state.title = value
        },
        setName(state, value){
            state.name = value
        },
        setEmail(state, value){
            state.email = value
        },
        setPassword(state, value){
            state.password = value
        },
    }
});