<template>
    <div>
        <b-container class="mt-4">
            <b-form-group label-cols="12" label-cols-lg="12" label="Title" label-for="input-default">
                <b-form-input id="input-default" v-model="title"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="12" label-cols-lg="12" label="Name" label-for="input-default">
                <b-form-input id="input-default" v-model="name"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="12" label-cols-lg="12" label="E-Mail" label-for="input-default">
                <b-form-input id="input-default" v-model="email" type="email"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="12" label-cols-lg="12" label="Message" label-for="input-default">
                <b-form-textarea
                    id="textarea"
                    v-model="message"
                    placeholder="Enter something..."
                    rows="3"
                    max-rows="6"
                ></b-form-textarea>
            </b-form-group>
            <b-form-group label-cols="12" label-cols-lg="12" label="Langue" label-for="input-default">
                <select class="form-control" v-model="langue">
                        <option v-for="items in getCountryList" :key="items.id" :value="items.id"> {{items.name}} </option>
                </select>
            </b-form-group>
            <b-button variant="success" @click="send">Send</b-button>
        </b-container>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name:"contact",
        data(){
            return{
                title:"",
                name:"",
                email:"",
                message:"",
                langue:""
            }
        },
        computed:{
            ...mapGetters(["getCountryList"])
        },
        methods:{
            send(){
                console.log(this.title,'\n',this.name,'\n',this.email,'\n',this.message,'\n',this.langue)
            }
        }
    }
</script>

<style>

</style>