<template>
<div id="wrapper">
<nav class="navbar is-dark">
    <div class="navbar-brand">
        <router-link to="/" class="navbar-item"></router-link>
        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
            <span aria-hidden="true">Profile</span>
            <span aria-hidden="true">Home</span>
        </a>
    </div>

    <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu}">
        <div class="navbar-end">
            <router-link to="/get_loan" class="navbar-item">Get a loan</router-link>
            <router-link to="/loan_fund" class="navbar-item">Loan a fund</router-link>


        </div>

    </div>

    <div class="navbar-item">
        <div class="butttons">
            <router-link to="/login" class="button is-light">
            <span class="icon"><i class="fas fa-shopping-cart"></i></span> Log in
            </router-link>
            <router-link to="/signup" class="button is-success">Sign up</router-link>

        </div>

    </div>

</nav>
<section class="section"> 
<router-view/>
</section>
  
<footer>
    <p>Copyright blnk &copy; 2021</p>
</footer>

</div>

</template>

<script>


export default{
    data(){
        return {
            showMobileMenu: false
        }




    }

}
</script>




<style lang="scss">
@import '../node_modules/bulma'; 
</style>
