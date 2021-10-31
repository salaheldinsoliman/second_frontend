<template>
    <div>
        <h1 class="title has-text-centered">Pay Installment</h1>
        <div class="container">
        <form @submit="postData" method="post">
            <div class="control">
            <input class="input mb-4" type="text" name="amount" placeholder="amount" v-model="posts.amount" />
            </div>
            <div class="control">
            <input class="input" type="text" name="to_user" placeholder="The lender name" v-model="posts.to_user" />
            </div>
            <button class="button mt-4 is-link is-fullwidth" type="submit">Submit</button>

        </form>
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