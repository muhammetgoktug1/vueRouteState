<template>
    <div>
        <b-container class="mt-4">
            <b-form-group label-cols="12" label-cols-lg="12" label="Title" label-for="input-default">
                <b-form-input id="input-default" v-model="title"></b-form-input>
                <b-form-invalid-feedback :state="validationTitle">
                    Title uzunluğu 4-20 karakter uzunluğunda olmalıdır.
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="validationTitle">
                    Title uzunluğu yeterli
                </b-form-valid-feedback>
            </b-form-group>
            <b-form-group label-cols="12" label-cols-lg="12" label="Name" label-for="input-default">
                <b-form-input id="input-default" v-model="name"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="12" label-cols-lg="12" label="Phone" label-for="input-default">
                <b-form-input id="input-default" v-model="phone" type="tel"></b-form-input>
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
            <b-button variant="success" :disabled="!validationTitle" @click="send">Send</b-button>
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
                phone:"",
                email:"",
                message:"",
                langue:""
            }
        },
        computed:{
            ...mapGetters(["getCountryList"]),
            validationTitle() {
                return this.title.length > 4 && this.title.length < 20
            }

        },
        methods:{
            send(){
                console.log(this.title,'\n',this.name,'\n',this.phone,'\n',this.email,'\n',this.message,'\n',this.langue)
            }
        }
    }
</script>