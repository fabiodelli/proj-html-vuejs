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
        <div class="container_70">
            <div class="header_up">
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
            <div class="header_bottom">
                <div class="header_bl">
                    <div class="dev">Development</div>
                    <h1>A Complete Developer Toolset</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, totam!</p>
                    <div>
                        <button class="get_start">Get Started</button>
                        <button class="Doc">Documentation</button>
                    </div>
                    <br>
                    <div>Current Version v2.6.0</div>

                </div>
                <div class="header_br">
                    <img src="/img/about.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>


<style ></style>