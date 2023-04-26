<script>
export default {
    name: 'appHeader',
    data() {


        return {}
    }
}
</script>

<template>
    <div class="header">
        <div class="container_70 d-flex">
            <div class="left">
                <img src="/img/logo-dark.png" alt="">
            </div>
            <div class="center">
                <ul>
                    <li>HOME</li>
                    <li>LANDING</li>
                    <li>PAGES</li>
                    <li>DOCS</li>  
                </ul>
            </div>
            <div class="right d-flex">
                
                <div><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></div>
                <div class="toggle_nav"><font-awesome-icon icon="fa-brands fa-stack-overflow" /></div>
                <div class="toggle_nav"><font-awesome-icon icon="fa-regular fa-user" /></div>
                <div class="toggle_nav"><font-awesome-icon icon="fa-brands fa-github" /></div>
                
            </div>
        </div>
    </div>
</template>


<style ></style>