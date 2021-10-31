<template>
    <div>
        <h1>Get a loan</h1>
        <form @submit="postData" method="post">
            <input type="text" name="amount" placeholder="amount" v-model="posts.amount" />
            
            <button type="submit">Submit</button>

        </form>
    
    <div>
        <button v-on:click="getData">Get loans</button>
      
    </div>

    
    <div>
        <button v-on:click="getNumber">Get Number</button>
      
    </div>

      <div>
        <button v-on:click="getAmortizationTable">Get Amortization Table</button>
      
    </div>

      <div v-for="am_table_row in am_table" v-bind:key="am_table_row.id" >

    <p>{{ am_table_row.Principal }}</p>

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
                this.loans = res.data
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