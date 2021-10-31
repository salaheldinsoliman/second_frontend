<template>
    <div>
        <h1>Get a loan</h1>
        <form @submit="postData" method="post">
            <label class="label">Amount</label>
            <div class="control">
            <input class="input" type="text" name="amount" placeholder="amount" v-model="posts.amount" />
            </div>
            <button class="button is-link is-light" type="submit">Submit</button>

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


<table class="table">
    <thead>
  <tr>
    <th colspan="10">Principal</th>
    <th colspan="10">Interest</th>
    <th colspan="10">Installment</th>
    <th colspan="10">Balance</th>
  </tr>
  </thead>
  <tr colspan="10">
  <div v-for="(loan, index) in loans['data']" v-bind:key="index" >
    <th colspan="10">
    <div v-for="(loan_element, i) in loan" v-bind:key="i">
    <p>{{ loan_element }}</p>
</div>
  </th>

  </div>
</tr>  
</table>
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