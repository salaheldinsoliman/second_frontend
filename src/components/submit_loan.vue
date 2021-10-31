<template>
    <div>
        <h1 class="title has-text-centered">Loan a Fund</h1>
        <div class="container">
        <form @submit="postData" method="post">
            <div class="control">
             <input class="input" type="text" name="amount" placeholder="amount" v-model="posts.amount" />
            </div>
            <button class="button is-link mt-4 is-fullwidth" type="submit">Post</button>

        </form>
    </div>

    </div>
</template>









<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


export default {
    name: "submit_loan",
    data() {
        return {
            posts: {
                amount: null,
                is_taken:1

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