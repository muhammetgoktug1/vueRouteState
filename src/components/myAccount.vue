<template>
    <div>
        <b-container class="mt-4">
            <p>{{getTitle}}</p>
            <p>{{getName}}</p>
            <p>{{getEmail}}</p>
            <p>{{getPassword}}</p>
            <p>{{getTitle}}</p>
        </b-container>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name:"myAccount",
        computed:{
            ...mapGetters(["getEmail","getTitle","getName","getPassword"])
        }
    }
</script>

<style>

</style>