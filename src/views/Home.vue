<template>
  <div class="home">
      <section class="hero is-medium is-dark mb-6">
        <div class="hero-body has-text-centered">
            <p class="title mb-6">
                Welcome to Blnk
            </p>
            <p class="subtitle">
                  Buy now pay later
            </p>
        </div>
    </section>
  
  <div class="columns is-multiline">
      <div class="column is-12">
          <h2 class="is-size-2 has-text-centered">All Loans</h2>
      </div>
  </div>

  <div v-for="loan in all_loans" v-bind:key="loan.id" >

    <p>{{ loan.amount }}</p>

  </div>
</div>
</template>






<script>

import axios from 'axios'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data(){
    return{all_loans:[]}
  },
  components: {
 
  },
  mounted(){
    this.get_all_loans()
  },
  methods: {
    get_all_loans(){

      axios.get('/api/v1/all_loans/')
      .then(response =>{
        this.all_loans=response.data
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }
}
</script>
