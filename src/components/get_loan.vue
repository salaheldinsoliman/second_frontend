<template>
    <div>
        <h1 class="title has-text-centered">Get a loan</h1>
        <div class="container">
        <form @submit="postData" method="post">
            <div class="control">
            <input class="input" type="text" name="amount" placeholder="amount" v-model="posts.amount" />
            </div>
            <button class="button is-link mt-4 is-fullwidth" type="submit">Submit</button>

        </form>
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
            loans : [],
            number_list : [],
            am_table: []
          
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
                this.loans = res.data;
                this.loans = JSON.parse(this.loans)
            })
        },
        getNumber(){
            axios.get("http://localhost:8000/api/v1/number_view/").then(res => {
                this.number_list = res.data
            })
        },
        getAmortizationTable(){
            axios.get("http://localhost:8000/api/v1/Amortization_table/").then(res => {
                this.am_table = res.data
            })
        },


    }
}
</script>