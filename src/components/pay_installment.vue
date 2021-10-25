<template>
    <div>
        <h1>Pay installment</h1>
        <form @submit="postData" method="post">
            <input type="text" name="amount" placeholder="amount" v-model="posts.amount" />
            <input type="text" name="to_user" placeholder="The lender name" v-model="posts.to_user" />
            <button type="submit">Submit</button>

        </form>
    
    <div>
        <button v-on:click="getData">Get loans</button>
        <div v-for="loan in loans" :key="loan.amount">
            {{ loan.amount }}
        </div>
    </div>



    </div>
</template>









<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


export default {
    name: "pay_installment",
    data() {
        return {
            posts: {
                amount: null,
                to_user: null
            }


          
        }

    },
    methods: {
                postData(e){
            axios.post("http://localhost:8000/api/v1/ledger_create/", this.posts)
            .then((res) => {
                console.warn(res)
            })
            e.preventDefault();
           
        },


    }
}
</script>