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
                        <li>LANDING <font-awesome-icon icon="fa-solid fa-chevron-down" size="2xs" /></li>
                        <li>PAGES <font-awesome-icon icon="fa-solid fa-chevron-down" size="2xs" /></li>
                        <li>DOCS <font-awesome-icon icon="fa-solid fa-chevron-down" size="2xs" /></li>
                    </ul>
                </div>
                <div class="right d-flex">

                    <div><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></div>
                    <div class="toggle_nav"><font-awesome-icon icon="fa-brands fa-stack-overflow" /></div>
                    <div class="toggle_nav"><font-awesome-icon icon="fa-regular fa-user" /></div>
                    <div class="toggle_nav"><font-awesome-icon icon="fa-brands fa-github" /></div>

                </div>
            </div>
            <div class="jumbo">
                <div class="jumbo_left">
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
                <div class="jumbo_right">
                    <img src="/img/about.png" alt="">
                </div>
            </div>
        </div>

        
    </div>
    <div class="bg-white">
        <div>

            <img src="../../public/img/waves.png" alt="">
        </div>

        <div class="brand">
            <img src="/img/amazon.svg" alt="">
            <img src="/img/shopify.svg" alt="">
            <img src="/img/spotify.svg" alt="">
            <img src="/img/google.svg" alt="">
            <img src="/img/lenovo.svg" alt="">
            <img src="/img/paypal.svg" alt="">
        </div>

    </div>
</template>


<style ></style>