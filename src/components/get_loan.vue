<template>
    <div>
        <h1>Post</h1>
        <form @submit="postData" method="post">
            <input type="text" name="amount" placeholder="amount" v-model="posts.amount" />
            
            <button type="submit">Post</button>

        </form>
    
    <div>
        <button @submit="getData">Get loans</button>
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
    name: "get_loan",
    data() {
        return {
            posts: {
                amount: null,
                is_taken:0

            },
            loans : []
        }

    },
    methods: {
        postData(e){
            axios.post("http://localhost:8000/api/v1/loan_create/", this.posts)
            .then((res) => {
                console.warn(res)
            })
            e.preventDefault();
           
        },
        getData(){
            axios.get("http://localhost:8000/api/v1/all_loans/").then(res => {
                this.loans = res.data
            })
        }
    }
}
</script>