<template>
    <div>
        <b-container class="mt-4">
            <p>{{getDummyText.text}}</p>
        </b-container>
    </div>
</template>

<script>
    import axios from 'axios'
    import {mapMutations, mapGetters} from 'vuex'
    export default {
        name:"home",
        created(){
            axios.get("./data/dummyText.json")
            .then(response =>{
                response.data.map((e) => {
                    if(e.langId == this.$store.getters.getLangue){
                        this.setDummyText(e)
                    }
                })
            })
            if(this.$store.getters.getLangue == "TR"){
                this.setActivePage("Anasayfa")
            }
            else{
                this.setActivePage("Home")
            }
        },
        methods:{
            ...mapMutations(["setDummyText","setActivePage"])
        },
        computed:{
            ...mapGetters(["getDummyText"])
        }
    }
</script>

<style>

</style>