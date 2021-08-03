import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state:{
        isLogin:false,
        lang:"TR",
        dummyText:{},
        dummyMenu:[],
        loginText:{},
        countryList:[
            { id: "TR", name: "Turkey" },
            { id: "US", name: "United States of America" }
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
        getDummyLoginText(state){
            return state.loginText
        },
        getDummyMenu(state, value){
            state.dummyMenu = value
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
        setDummyLoginText(state, value){
            state.loginText = value
        },
        setDummyMenu(state, value){
            state.dummyMenu = value
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