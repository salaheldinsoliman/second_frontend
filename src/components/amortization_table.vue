<template>
    <div>
        <h1 class="title has-text-centered">Get Amortization Table</h1>
    <div>
        <button class="button is-link mb-4" v-on:click="getData">Get Amortization Table</button>
    </div>

<div class="table-container">
<table class="table is-bordered is-hoverable is-fullwidth is-striped dark">
    <thead>
  <tr>
    <th>Principal</th>
    <th>Interest</th>
    <th>Installment</th>
    <th>Balance</th>
  </tr>
  </thead>
  
  <tr v-for="(loan, index) in loans['data']" v-bind:key="index" >
  
    <th v-for="(loan_element, i) in loan" v-bind:key="i">
        {{ loan_element }}
    </th>
</tr>
  

</table>
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