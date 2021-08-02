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
        },
        methods:{
            ...mapMutations(["setDummyText"])
        },
        computed:{
            ...mapGetters(["getDummyText"])
        }
    }
</script>

<style>

</style>